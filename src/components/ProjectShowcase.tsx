import React, { useState, useEffect } from "react";
import 'react-quill/dist/quill.snow.css'; // Importa os estilos do Quill
import ReactQuill from 'react-quill';
import parse from 'html-react-parser'; // Importa a biblioteca para parsear HTML

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Plus,
  Trash2,
  ExternalLink,
  X,
  Upload,
  Image as ImageIcon,
  User,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { projects as localProjects, Project as LocalProject } from "@/data/projects";
import { translateProjects } from "@/data/projectsTranslations";

interface ContentBlock {
  id: string;
  type: "text" | "image";
  content: string; // For text blocks, this is the text. For image blocks, this is the image URL
  caption?: string; // Legenda opcional para imagens
}

interface Project extends Omit<LocalProject, "contentBlocks"> {
  contentBlocks?: ContentBlock[]; // Usado para o conteúdo detalhado, incluindo texto e imagens
}

interface ProjectShowcaseProps {
  // Não recebe mais `companies` como prop
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [projectsList, setProjectsList] = useState<Project[]>([]); // Lista exibida na tela
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectData, setNewProjectData] = useState<Omit<Project, 'id'> & { tempImageFile: File | null }>({ // Adiciona tempImageFile para o upload da imagem principal do card
    title: "",
    description: "",
    contentBlocks: [],
    detailedContent: "",
    role: "",
    duration: "",
    tempImageFile: null, // Campo para o arquivo de imagem do card
  });
  const [currentEditTextBlock, setCurrentEditTextBlock] = useState(""); // Para adicionar blocos de texto no modal
  const imageInputRef = React.useRef<HTMLInputElement>(null); // Adicionando useRef para o input de imagem do card
  const contentBlockImageInputRef = React.useRef<HTMLInputElement>(null); // Ref para upload de imagem de bloco de conteúdo

  const navigate = useNavigate();
  const { user } = useAuth();
  const { t, language } = useLanguage();

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image',
  ];

  const quillModulesForDetailedContent = { // Módulos para o detailedContent (permite imagens)
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const quillFormatsForDetailedContent = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image',
  ];

  const imageHandler = () => {
    // Este imageHandler é para o Quill da descrição principal ou detailedContent
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        // Sanitize the filename to remove invalid characters for Supabase Storage
        const originalFilename = file.name;
        const sanitizedFilename = originalFilename
          .normalize("NFD") // Normalize Unicode characters
          .replace(/[^\w.-]/g, '') // Remove all non-word characters except hyphen and dot
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
          .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

        const filename = `${Date.now()}-${sanitizedFilename}`;
        const { data, error } = await supabase.storage
          .from('project-images') // Use o nome do seu bucket aqui
          .upload(filename, file);

        if (error) {
          console.error("Erro ao fazer upload da imagem:", error);
          alert("Erro ao fazer upload da imagem. Por favor, tente novamente.");
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from('project-images')
          .getPublicUrl(data.path);

        const editor = (this as any).quill;
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', publicUrlData.publicUrl);
      }
    };
  };

  useEffect(() => {
    // Certifica-se de que o Quill use o manipulador de imagem customizado
    const quill = (ReactQuill as any).quill;
    if (quill) {
      quill.getModule('toolbar').addHandler('image', imageHandler);
    }
  }, []);

  // Efeito para carregar projetos do Supabase na montagem do componente.
  // Se o Supabase falhar (como no caso do projeto corrompido), fazemos fallback
  // Carrega os projetos: primeiro usa dados locais, depois tenta atualizar do Supabase se disponível
  useEffect(() => {
    // Define os dados locais imediatamente para garantir que apareçam, traduzidos
    setProjectsList(translateProjects(localProjects as Project[], language));

    // Tenta buscar do Supabase em background (opcional)
    const fetchProjects = async () => {
      try {
        // Verifica se temos credenciais do Supabase válidas
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (!supabaseUrl || !supabaseKey || supabaseUrl === 'https://placeholder.supabase.co') {
          // Sem credenciais válidas, mantém os dados locais
          return;
        }

        const { data, error } = await supabase.from('projects').select('*');

        if (error) {
          console.error("Erro ao carregar projetos do Supabase, usando dados locais:", error);
          return; // Mantém os dados locais já definidos
        }

        if (data && data.length > 0) {
          // Se encontrou dados no Supabase, atualiza a lista traduzida
          setProjectsList(translateProjects(data as Project[], language));
        }
      } catch (e) {
        console.error("Erro inesperado ao carregar projetos do Supabase:", e);
        // Mantém os dados locais já definidos
      }
    };
    
    fetchProjects();
  }, [language]);

  const toggleProjectExpansion = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProjectData({
      title: "",
      description: "",
      contentBlocks: [],
      detailedContent: "",
      role: "",
      duration: "",
      tempImageFile: null,
    });
    setCurrentEditTextBlock("");
  };

  const addTextBlockToContentBlocks = () => {
    if (currentEditTextBlock.trim()) {
      const newBlock: ContentBlock = {
        id: `block-${Date.now()}`,
        type: "text",
        content: currentEditTextBlock.trim(),
      };
      setNewProjectData((prev) => ({
        ...prev,
        contentBlocks: [...prev.contentBlocks, newBlock],
      }));
      setCurrentEditTextBlock("");
    }
  };

  const handleImageUploadForContentBlocks = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Sanitize the filename
      const originalFilename = file.name;
      const sanitizedFilename = originalFilename
        .normalize("NFD")
        .replace(/[^\w.-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      const filename = `${Date.now()}-${sanitizedFilename}`;
      const { data, error } = await supabase.storage
        .from('project-images')
        .upload(filename, file);

      if (error) {
        console.error("Erro ao fazer upload da imagem para o Supabase:", error);
        alert("Erro ao fazer upload da imagem. Por favor, tente novamente.");
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('project-images')
        .getPublicUrl(data.path);

      const newBlock: ContentBlock = {
        id: `block-${Date.now()}`,
        type: "image",
        content: publicUrlData.publicUrl,
      };
      setNewProjectData((prev) => ({
        ...prev,
        contentBlocks: [...prev.contentBlocks, newBlock],
      }));
    }
  };

  const removeContentBlock = (blockId: string) => {
    setNewProjectData((prev) => ({
      ...prev,
      contentBlocks: prev.contentBlocks.filter((block) => block.id !== blockId),
    }));
  };

  const handleMainImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setNewProjectData((prev) => ({ ...prev, tempImageFile: event.target.files![0] }));
    }
  };

  const saveProject = async () => {
    if (!newProjectData.title.trim()) return;

    let imageUrl = "";
    if (newProjectData.tempImageFile) {
      const file = newProjectData.tempImageFile;
      const originalFilename = file.name;
      const sanitizedFilename = originalFilename
        .normalize("NFD")
        .replace(/[^\w.-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      const filename = `${Date.now()}-${sanitizedFilename}`;
      const { data, error } = await supabase.storage
        .from('project-images')
        .upload(filename, file);

      if (error) {
        console.error("Erro ao fazer upload da imagem principal do projeto:", error);
        alert("Erro ao fazer upload da imagem principal. Por favor, tente novamente.");
        return;
      }
      const { data: publicUrlData } = supabase.storage
        .from('project-images')
        .getPublicUrl(data.path);
      imageUrl = publicUrlData.publicUrl;
    }

    const projectToSave: Omit<Project, 'id'> = {
      title: newProjectData.title,
      description: newProjectData.description,
      contentBlocks: newProjectData.contentBlocks,
      detailedContent: newProjectData.detailedContent,
      role: newProjectData.role,
      duration: newProjectData.duration,
      // Adiciona a URL da imagem principal do projeto se houver
      ...(imageUrl && { imageUrl: imageUrl }) as Partial<Project> // Usar Partial<Project> para adicionar imageUrl
    };

    // Se o Supabase estiver funcionando, continuamos salvando lá.
    // Caso contrário, apenas adicionamos o projeto na lista em memória (não persiste,
    // mas evita quebrar a interface enquanto você ainda não recriou o banco).
    try {
      const { data, error } = await supabase.from('projects').insert([projectToSave]).select();

      if (error) {
        console.error("Erro ao salvar o projeto no Supabase. O projeto será apenas exibido localmente nesta sessão:", error);
        const tempProject: Project = {
          ...(projectToSave as Project),
          id: `temp-${Date.now()}`,
        };
        setProjectsList((prev) => [...prev, tempProject]);
      } else {
        const savedProject = data[0];
        setProjectsList((prev) => [...prev, savedProject]); // Adiciona diretamente à lista de projetos
      }
    } catch (e) {
      console.error("Erro inesperado ao salvar o projeto. Ele será apenas exibido localmente nesta sessão:", e);
      const tempProject: Project = {
        ...(projectToSave as Project),
        id: `temp-${Date.now()}`,
      };
      setProjectsList((prev) => [...prev, tempProject]);
    }

    closeModal();
  };

  const deleteProject = async (projectId: string) => {
    try {
      const { error } = await supabase.from('projects').delete().eq('id', projectId);

      if (error) {
        console.error("Erro ao deletar o projeto do Supabase. O projeto será removido apenas da lista atual:", error);
      }
    } catch (e) {
      console.error("Erro inesperado ao tentar deletar o projeto no Supabase. Ele será removido apenas da lista atual:", e);
    }

    // Em qualquer caso, removemos da lista exibida.
    setProjectsList((prev) => prev.filter((p) => p.id !== projectId));
  };

  return (
    <section className="w-full py-12 bg-background" id="projects">
      <div className="container mx-auto px-4">
        {user && (
          <div className="flex justify-center mb-6">
            <Button
              onClick={openModal}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              {t('projects.addProject')}
            </Button>
          </div>
        )}

        <div className="space-y-12">
          {projectsList.length === 0 ? (
            <p className="text-center text-muted-foreground">{t('projects.noProjects')}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsList.map((project) => {
                const mainImage = (project as any).imageUrl || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80";
                return (
                  <Card
                    key={project.id}
                    className="rounded-none bg-white flex flex-col overflow-hidden cursor-pointer border-0"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    {mainImage && (
                      <img
                        src={mainImage}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-none"
                      />
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.role && (
                          <Badge variant="secondary" className="text-xs font-medium bg-blue-100 text-blue-800">
                            {project.role}
                          </Badge>
                        )}
                        {project.duration && (
                          <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-800">
                            {project.duration}
                          </Badge>
                        )}
                      </div>
                      <div className="text-muted-foreground text-sm flex-1 line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                      <Button
                        variant="outline"
                        className="mt-auto"
                        onClick={e => {
                          e.stopPropagation();
                          navigate(`/project/${project.id}`);
                        }}
                      >
                        {t('projects.viewDetails')}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal for adding new project */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{t('projects.addNewProject')}</DialogTitle>
              <DialogDescription>
                {t('projects.fillProjectData')}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">{t('projects.projectTitle')}</Label>
                <Input
                  id="title"
                  value={newProjectData.title}
                  onChange={(e) =>
                    setNewProjectData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder={t('projects.projectTitlePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="main-image">{t('projects.mainImage')}</Label>
                <Input
                  id="main-image"
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  ref={imageInputRef}
                />
                {newProjectData.tempImageFile && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('projects.fileSelected')} {newProjectData.tempImageFile.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">{t('projects.briefDescription')}</Label>
                <ReactQuill
                  theme="snow"
                  value={newProjectData.description}
                  onChange={(content) =>
                    setNewProjectData((prev) => ({ ...prev, description: content }))
                  }
                  placeholder="Uma breve descrição do projeto..."
                  className="min-h-[100px]"
                  modules={quillModules}
                  formats={quillFormats}
                />
              </div>

              {/* Detailed Content (Rich Text) */}
              <div className="space-y-2">
                <Label htmlFor="detailed-content">
                  {t('projects.detailedContent')}
                </Label>
                <ReactQuill
                  theme="snow"
                  value={newProjectData.detailedContent}
                  onChange={(content) =>
                    setNewProjectData((prev) => ({
                      ...prev,
                      detailedContent: content,
                    }))
                  }
                  placeholder={t('projects.detailedContentPlaceholder')}
                  className="min-h-[200px]"
                  modules={quillModulesForDetailedContent}
                  formats={quillFormatsForDetailedContent}
                />
              </div>

              {/* Content Blocks (Text and Images) */}
              <div className="space-y-4">
                <Label>{t('projects.contentBlocks')}</Label>
                <div className="space-y-3">
                  {newProjectData.contentBlocks.length > 0 ? (
                    newProjectData.contentBlocks.map((block) => (
                      <div
                        key={block.id}
                        className="flex items-center justify-between bg-muted p-3 rounded-md"
                      >
                        {block.type === "text" ? (
                          <div
                            className="flex-grow pr-4"
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          />
                        ) : (
                          <img
                            src={block.content}
                            alt={block.caption || "Imagem do bloco"}
                            className="h-16 w-16 object-cover rounded-md flex-shrink-0 mr-4"
                          />
                        )}
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeContentBlock(block.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">{t('projects.noContentBlocks')}</p>
                  )}
                </div>

                {/* Adicionar Novo Bloco de Texto */}
                <div className="space-y-2 border-t pt-4">
                  <Label htmlFor="new-text-block">{t('projects.addTextBlock')}</Label>
                  <Textarea
                    id="new-text-block"
                    placeholder={t('projects.addTextBlockPlaceholder')}
                    value={currentEditTextBlock}
                    onChange={(e) => setCurrentEditTextBlock(e.target.value)}
                    rows={3}
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={addTextBlockToContentBlocks}
                    disabled={!currentEditTextBlock.trim()}
                  >
                    <Plus className="h-4 w-4 mr-2" /> {t('projects.addText')}
                  </Button>
                </div>

                {/* Adicionar Nova Imagem */}
                <div className="space-y-2 border-t pt-4">
                  <Label htmlFor="new-image-block">{t('projects.addImage')}</Label>
                  <Input
                    id="image-upload-content-block"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadForContentBlocks}
                    className="hidden"
                    ref={contentBlockImageInputRef} // Usar a ref correta aqui
                  />
                  <Button
                    variant="outline"
                    onClick={() => contentBlockImageInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 inline-block mr-2" /> {t('projects.uploadImage')}
                  </Button>
                </div>
              </div>

              {/* Role and Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">{t('projects.role')}</Label>
                  <Input
                    id="role"
                    value={newProjectData.role}
                    onChange={(e) =>
                      setNewProjectData((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                    placeholder={t('projects.rolePlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">{t('projects.duration')}</Label>
                  <Input
                    id="duration"
                    value={newProjectData.duration}
                    onChange={(e) =>
                      setNewProjectData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder={t('projects.durationPlaceholder')}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={closeModal}>
                {t('projects.cancel')}
              </Button>
              <Button
                onClick={saveProject}
                disabled={!newProjectData.title.trim()}
              >
                {t('projects.saveProject')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectShowcase;

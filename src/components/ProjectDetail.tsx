import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, X, Plus, Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { projects as localProjects, Project as LocalProject } from "@/data/projects";
import { translateProject } from "@/data/projectsTranslations";

interface ContentBlock {
  id: string;
  type: "text" | "image";
  content: string;
  caption?: string;
}

interface Project extends Omit<LocalProject, "contentBlocks"> {
  contentBlocks?: ContentBlock[];
}

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header", "bold", "italic", "underline", "strike",
  "blockquote", "list", "bullet", "link", "image",
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProjectData, setEditProjectData] = useState<Omit<Project, "id"> | null>(null);
  const [currentEditTextBlock, setCurrentEditTextBlock] = useState("");
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const mainImageInputRef = React.useRef<HTMLInputElement>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState("");

  const fetchProject = async () => {
    setLoading(true);
    if (!id) { setLoading(false); return; }

    const local = localProjects.find((p) => p.id === id);
    if (local) {
      const translated = translateProject(local as Project, language);
      setProject(translated);
      setEditProjectData(translated as Omit<Project, "id">);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();
      if (error || !data) { setProject(null); setLoading(false); return; }
      const translated = translateProject(data as Project, language);
      setProject(translated);
      setEditProjectData(translated as Omit<Project, "id">);
    } catch {
      setProject(null);
    }
    setLoading(false);
  };

  useEffect(() => { fetchProject(); }, [id, language]);

  const openEditModal = () => {
    if (project) {
      setEditProjectData({
        title: project.title,
        description: project.description,
        contentBlocks: project.contentBlocks || [],
        detailedContent: project.detailedContent || "",
        role: project.role,
        duration: project.duration,
        imageUrl: project.imageUrl || "",
      });
      setMainImageFile(null);
      setIsEditModalOpen(true);
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditProjectData(null);
    setCurrentEditTextBlock("");
  };

  const addTextBlock = () => {
    if (currentEditTextBlock.trim() && editProjectData) {
      const newBlock: ContentBlock = {
        id: `block-${Date.now()}`,
        type: "text",
        content: currentEditTextBlock.trim(),
      };
      setEditProjectData((prev) => ({
        ...(prev as Omit<Project, "id">),
        contentBlocks: [...(prev?.contentBlocks || []), newBlock],
      }));
      setCurrentEditTextBlock("");
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const filename = `${Date.now()}-${file.name.replace(/[^\w.-]/g, "")}`;
    const { data, error } = await supabase.storage.from("project-images").upload(filename, file);
    if (error) { alert("Erro ao fazer upload."); return; }
    const { data: urlData } = supabase.storage.from("project-images").getPublicUrl(data.path);
    if (editProjectData) {
      setEditProjectData((prev) => ({
        ...(prev as Omit<Project, "id">),
        contentBlocks: [...(prev?.contentBlocks || []), {
          id: `block-${Date.now()}`, type: "image", content: urlData.publicUrl,
        }],
      }));
    }
  };

  const removeBlock = (blockId: string) => {
    setEditProjectData((prev) => ({
      ...(prev as Omit<Project, "id">),
      contentBlocks: prev?.contentBlocks?.filter((b) => b.id !== blockId) || [],
    }));
  };

  const handleUpdateProject = async () => {
    alert("Edite o projeto em src/data/projects.ts.");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          <span className="section-label">{t("projectDetail.loading")}</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-display text-2xl font-light">{t("projectDetail.projectNotFound")}</p>
          <button onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {t("projectDetail.backToHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* ─── HEADER ─── */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="font-ui text-[0.7rem] tracking-[0.14em] uppercase">{t("projectDetail.back")}</span>
          </button>

          <a href="/" className="flex items-center">
            <img src="/logo_lf.png" alt="LF" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="flex items-center gap-4">
            {user && (
              <button onClick={openEditModal}
                className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200">
                {t("projectDetail.editProject")}
              </button>
            )}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="font-ui text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-14">

        {/* ─── PROJECT HERO ─── */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/40 to-transparent pointer-events-none" />

          <div className="container py-20 md:py-28 relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {project.role && (
                  <span className="section-label">{project.role}</span>
                )}
                {project.role && project.duration && (
                  <span className="w-1 h-1 rounded-full bg-primary/50 inline-block" />
                )}
                {project.duration && (
                  <span className="section-label">{project.duration}</span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-[clamp(2rem,5.5vw,5rem)] font-light leading-[1.05] tracking-tight text-foreground max-w-3xl mb-8">
                {project.title}<span className="text-primary">.</span>
              </h1>

              {/* Description */}
              {project.description && (
                <div
                  className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-2xl project-content"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* ─── MAIN IMAGE ─── */}
        {project.imageUrl && !project.imageUrl.includes("unsplash") && (
          <motion.div
            className="w-full bg-secondary/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="container py-2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full max-h-[60vh] object-cover cursor-zoom-in"
                onClick={() => { setCurrentImageSrc(project.imageUrl!); setShowImageModal(true); }}
              />
            </div>
          </motion.div>
        )}

        {/* ─── CONTENT BLOCKS ─── */}
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto space-y-14">

            {project.detailedContent && (
              <motion.div
                className="project-content"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: project.detailedContent }}
              />
            )}

            {project.contentBlocks?.map((block, i) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                {block.type === "text" ? (
                  <div
                    className="project-content"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                ) : (
                  <div className="space-y-3 -mx-4 md:-mx-12">
                    <img
                      src={block.content}
                      alt={block.caption || ""}
                      className="w-full h-auto cursor-zoom-in"
                      onClick={() => { setCurrentImageSrc(block.content); setShowImageModal(true); }}
                    />
                    {block.caption && (
                      <p className="section-label text-center px-4">{block.caption}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Back link */}
          <div className="max-w-2xl mx-auto mt-20 pt-12 border-t border-border/50">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="font-ui text-[0.7rem] tracking-[0.14em] uppercase">{t("projectDetail.back")}</span>
            </button>
          </div>
        </div>
      </main>

      {/* ─── EDIT MODAL (admin only) ─── */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display font-light">{t("projectDetail.editProject")}</DialogTitle>
          </DialogHeader>

          {editProjectData && (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label>Título *</Label>
                <Input value={editProjectData.title}
                  onChange={(e) => setEditProjectData((p) => ({ ...(p as Omit<Project, "id">), title: e.target.value }))} />
              </div>

              <div className="space-y-2">
                <Label>Descrição breve</Label>
                <ReactQuill theme="snow" value={editProjectData.description}
                  onChange={(c) => setEditProjectData((p) => ({ ...(p as Omit<Project, "id">), description: c }))}
                  modules={quillModules} formats={quillFormats} className="min-h-[100px]" />
              </div>

              <div className="space-y-2">
                <Label>Conteúdo detalhado</Label>
                <ReactQuill theme="snow" value={editProjectData.detailedContent}
                  onChange={(c) => setEditProjectData((p) => ({ ...(p as Omit<Project, "id">), detailedContent: c }))}
                  modules={quillModules} formats={quillFormats} className="min-h-[200px]" />
              </div>

              <div className="space-y-4">
                <Label>Blocos de conteúdo</Label>
                <div className="space-y-2">
                  {editProjectData.contentBlocks?.map((block) => (
                    <div key={block.id} className="flex items-start justify-between gap-3 border border-border p-3">
                      {block.type === "image"
                        ? <img src={block.content} className="h-16 w-24 object-cover" />
                        : <div className="flex-1 text-sm text-muted-foreground line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: block.content }} />
                      }
                      <Button variant="ghost" size="sm" onClick={() => removeBlock(block.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t pt-4">
                  <Label>Adicionar bloco de texto</Label>
                  <Textarea placeholder="Parágrafo ou etapa do processo..."
                    value={currentEditTextBlock}
                    onChange={(e) => setCurrentEditTextBlock(e.target.value)} rows={3} />
                  <Button size="sm" type="button" onClick={addTextBlock} disabled={!currentEditTextBlock.trim()}>
                    <Plus className="h-4 w-4 mr-2" /> Adicionar texto
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <Label>Adicionar imagem</Label>
                  <input type="file" accept="image/*" ref={imageInputRef}
                    className="hidden" onChange={handleImageUpload} />
                  <Button size="sm" variant="outline" type="button"
                    onClick={() => imageInputRef.current?.click()} className="mt-2">
                    <Upload className="h-4 w-4 mr-2" /> Carregar imagem
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Função</Label>
                  <Input value={editProjectData.role}
                    onChange={(e) => setEditProjectData((p) => ({ ...(p as Omit<Project, "id">), role: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Duração</Label>
                  <Input value={editProjectData.duration}
                    onChange={(e) => setEditProjectData((p) => ({ ...(p as Omit<Project, "id">), duration: e.target.value }))} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t("projectDetail.currentCardImage")}</Label>
                {editProjectData.imageUrl && (
                  <img src={editProjectData.imageUrl} className="w-full max-w-xs h-32 object-cover border mb-2" />
                )}
                <Input type="file" accept="image/*" ref={mainImageInputRef}
                  onChange={(e) => { if (e.target.files?.[0]) setMainImageFile(e.target.files[0]); }} />
                {mainImageFile && (
                  <p className="text-xs text-muted-foreground">{t("projects.fileSelected")} {mainImageFile.name}</p>
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={closeEditModal}>{t("projects.cancel")}</Button>
            <Button onClick={handleUpdateProject}>{t("projectDetail.saveChanges")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ─── IMAGE ZOOM ─── */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur p-1.5 rounded-sm"
          >
            <X className="h-4 w-4" />
          </button>
          <img src={currentImageSrc} alt="" className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;

"use client"

import { useState } from "react"

type Project = {
  id: string
  name: string
  icon: string
  status: string
  tagline: string
  description: string
  details: string[]
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    id: "navada-llm",
    name: "NAVADA LLM",
    icon: "◈",
    status: "ACTIVE",
    tagline: "Custom fine-tuned language model",
    description:
      "Trained on NAVADA's proprietary knowledge base covering AI strategy, enterprise adoption, and consulting methodology. Qwen 2 1.5B base with QLoRA 4-bit training.",
    details: [
      "Base model: Qwen 2 1.5B",
      "Training method: QLoRA 4-bit (r=64, alpha=128)",
      "Format: Instruction-response pairs",
      "Dataset: 85+ examples across 3 versions",
      "Target layers: q/k/v/o attention projections",
      "LoRA adapter trained and saved",
    ],
    tags: ["QLoRA", "Qwen 2", "NF4", "Fine-tune"],
  },
  {
    id: "alex-agent",
    name: "ALEX",
    icon: "⬡",
    status: "ACTIVE",
    tagline: "Autonomous Logic & Execution eXpert",
    description:
      "Flagship autonomous AI agent with reasoning-action-observation loop. Model-agnostic architecture supporting Qwen, Llama, and Claude. Features tool use including image generation, code execution, and data analysis.",
    details: [
      "Architecture: Task > Plan > Tool Selection > Execution > Evaluation > Memory",
      "Models: Qwen / Llama / Claude (model-agnostic)",
      "Tools: Image gen, code execution, data analysis",
      "Memory: Enterprise vector databases (ChromaDB)",
      "Upgrading from Qwen 2 1.5B to Qwen 3 4B",
    ],
    tags: ["Agent", "RAG", "Tool-use", "Multi-model"],
  },
  {
    id: "alex-visual",
    name: "ALEX Visual",
    icon: "◉",
    status: "TRAINING",
    tagline: "Custom image generation via LoRA",
    description:
      "Stable Diffusion v1.5 LoRA fine-tune for custom image generation. Reference images collected and adapter trained for NAVADA-specific visual outputs.",
    details: [
      "Base: Stable Diffusion v1.5",
      "Method: LoRA fine-tune",
      "Reference images collected and curated",
      "Adapter training completed",
    ],
    tags: ["SD 1.5", "LoRA", "Image Gen"],
  },
  {
    id: "face-clone",
    name: "Face Clone Pipeline",
    icon: "◉",
    status: "NEW",
    tagline: "Webcam-based face capture & generation",
    description:
      "End-to-end pipeline from webcam capture to AI likeness generation. Uses MediaPipe Face Mesh for 468-landmark tracking with smart capture triggers based on pose, expression, and lighting changes.",
    details: [
      "Phase 1: Capture — MediaPipe Face Mesh (468 landmarks)",
      "Phase 2: Curate — Blur/duplicate filtering, diversity selection",
      "Phase 3: Train — LoRA / DreamBooth with prior preservation",
      "Phase 4: Iterate — Refine and expand",
      "Smart triggers: Pose, expression, lighting changes",
      "Auto-captioning with BLIP-2",
      "Target: 30-50 curated images per subject",
    ],
    tags: ["MediaPipe", "DreamBooth", "LoRA", "BLIP-2"],
  },
  {
    id: "helix-procure",
    name: "Helix-Procure",
    icon: "▸",
    status: "MVP",
    tagline: "Automated RFP analysis system",
    description:
      "Document ingestion and requirement extraction for automated RFP responses. Capability mapping, gap analysis, and response drafting targeting 60-70% reduction in response time.",
    details: [
      "Document ingestion pipeline",
      "Requirement extraction engine",
      "Capability mapping system",
      "Gap analysis module",
      "Response drafting automation",
      "Target: 60-70% reduction in RFP response time",
    ],
    tags: ["NLP", "Document AI", "Enterprise"],
  },
]

export function ProjectsSection({ activeProject }: { activeProject?: string }) {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    activeProject || null
  )

  const toggleProject = (id: string) => {
    setExpandedProject((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="mb-3 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.3em" }}
        >
          {"⬡"} ML Projects
        </p>
        <h2
          className="font-serif text-[40px] font-light"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Active Research
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: "#222" }} />
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {PROJECTS.map((project, i) => {
          const isExpanded = expandedProject === project.id
          return (
            <div
              key={project.id}
              id={project.id}
              className={`border border-[#222] ${i > 0 ? "border-t-0" : ""}`}
            >
              {/* Project header */}
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:border-[#444]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg" style={{ color: "#444" }}>
                    {project.icon}
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-serif text-xl font-light"
                        style={{ color: "#e0e0e0" }}
                      >
                        {project.name}
                      </span>
                      <span
                        className="border border-[#222] px-2 py-0.5 font-mono text-[8px] uppercase"
                        style={{
                          color: project.status === "NEW" ? "#e0e0e0" : "#555",
                          letterSpacing: "0.15em",
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="font-mono text-[10px]" style={{ color: "#555" }}>
                      {project.tagline}
                    </span>
                  </div>
                </div>
                <span
                  className="font-mono text-sm transition-transform duration-200"
                  style={{
                    color: "#555",
                    transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="border-t border-[#1a1a1a] px-6 py-6">
                  <p
                    className="mb-6 max-w-2xl font-serif text-[15px] font-light leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    {project.description}
                  </p>

                  {/* Details list */}
                  <div className="mb-6">
                    <p
                      className="mb-3 font-mono text-[9px] uppercase"
                      style={{ color: "#555", letterSpacing: "0.25em" }}
                    >
                      Details
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {project.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2">
                          <span
                            className="mt-1 font-mono text-[8px]"
                            style={{ color: "#444" }}
                          >
                            {"▸"}
                          </span>
                          <span
                            className="font-mono text-[11px]"
                            style={{ color: "#888" }}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#222] px-2 py-0.5 font-mono text-[9px] uppercase"
                        style={{ color: "#555", letterSpacing: "0.1em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

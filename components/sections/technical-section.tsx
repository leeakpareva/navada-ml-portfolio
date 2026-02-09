"use client"

import { useState } from "react"

type Tab = "llm" | "vision" | "face" | "agent"

const TABS: { id: Tab; label: string }[] = [
  { id: "llm", label: "LLM Fine-tuning" },
  { id: "vision", label: "Image Training" },
  { id: "face", label: "Face Tracking" },
  { id: "agent", label: "Agent Arch" },
]

export function TechnicalSection() {
  const [activeTab, setActiveTab] = useState<Tab>("llm")

  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="mb-3 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.3em" }}
        >
          {"★"} Technical Approach
        </p>
        <h2
          className="font-serif text-[40px] font-light"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Methodology
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: "#222" }} />
      </div>

      {/* Tabs */}
      <div className="mb-8 flex border-b border-[#1a1a1a]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className="relative px-5 py-3 font-mono text-[10px] uppercase transition-colors"
            style={{
              color: activeTab === tab.id ? "#e0e0e0" : "#555",
              letterSpacing: "0.15em",
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span
                className="absolute bottom-0 left-0 h-px w-full"
                style={{ background: "#fff" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[300px]">
        {activeTab === "llm" && (
          <div className="animate-fade-in-up">
            <h3
              className="mb-4 font-serif text-2xl font-light"
              style={{ color: "#e0e0e0" }}
            >
              QLoRA 4-bit Quantisation
            </h3>
            <p
              className="mb-8 max-w-2xl font-serif text-[15px] font-light leading-relaxed"
              style={{ color: "#888" }}
            >
              Maximising the RTX A4000{"'"}s 16 GB VRAM through aggressive quantisation.
              BitsAndBytes NF4 with float16 compute dtype, targeting attention layers
              for parameter-efficient training.
            </p>

            <div className="grid grid-cols-1 gap-px border border-[#222] md:grid-cols-2" style={{ background: "#222" }}>
              {[
                { label: "Quantisation", value: "NF4 (4-bit)", detail: "via BitsAndBytes" },
                { label: "Compute dtype", value: "float16", detail: "Mixed precision" },
                { label: "LoRA Rank", value: "r = 64", detail: "Alpha = 128" },
                { label: "Target Modules", value: "q, k, v, o", detail: "Attention projections" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 p-5" style={{ background: "#050505" }}>
                  <span
                    className="font-mono text-[9px] uppercase"
                    style={{ color: "#555", letterSpacing: "0.2em" }}
                  >
                    {item.label}
                  </span>
                  <span className="font-serif text-lg font-light" style={{ color: "#e0e0e0" }}>
                    {item.value}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "#444" }}>
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "vision" && (
          <div className="animate-fade-in-up">
            <h3
              className="mb-4 font-serif text-2xl font-light"
              style={{ color: "#e0e0e0" }}
            >
              Image Model Training
            </h3>
            <p
              className="mb-8 max-w-2xl font-serif text-[15px] font-light leading-relaxed"
              style={{ color: "#888" }}
            >
              LoRA for lightweight concept learning and DreamBooth for deeper subject
              learning. Prior preservation prevents identity bleed across generated outputs.
            </p>

            <div className="flex flex-col gap-4">
              <div className="border border-[#222] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ color: "#444" }}>{"◉"}</span>
                  <span className="font-mono text-[10px] uppercase" style={{ color: "#888", letterSpacing: "0.2em" }}>
                    LoRA Method
                  </span>
                </div>
                <p className="font-serif text-[14px] font-light leading-relaxed" style={{ color: "#888" }}>
                  Lightweight concept learning through low-rank adaptation. Injects trainable
                  rank-decomposition matrices into attention layers while freezing pre-trained weights.
                </p>
              </div>
              <div className="border border-[#222] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ color: "#444" }}>{"◈"}</span>
                  <span className="font-mono text-[10px] uppercase" style={{ color: "#888", letterSpacing: "0.2em" }}>
                    DreamBooth Method
                  </span>
                </div>
                <p className="font-serif text-[14px] font-light leading-relaxed" style={{ color: "#888" }}>
                  Deeper subject learning with prior preservation loss to prevent language drift
                  and identity bleed. Binds unique identifier token to subject representation.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "face" && (
          <div className="animate-fade-in-up">
            <h3
              className="mb-4 font-serif text-2xl font-light"
              style={{ color: "#e0e0e0" }}
            >
              MediaPipe Face Tracking
            </h3>
            <p
              className="mb-8 max-w-2xl font-serif text-[15px] font-light leading-relaxed"
              style={{ color: "#888" }}
            >
              MediaPipe over YOLO for face tracking — purpose-built for faces with 468 landmarks,
              head pose estimation, and expression detection. Runs efficiently on laptop CPU
              while YOLO is general object detection without face landmarks or pose angles.
            </p>

            <div className="border border-[#222]">
              <div className="border-b border-[#1a1a1a] p-5">
                <span className="font-mono text-[9px] uppercase" style={{ color: "#555", letterSpacing: "0.2em" }}>
                  Comparison
                </span>
              </div>
              <div className="grid grid-cols-3 border-b border-[#1a1a1a]">
                <div className="border-r border-[#1a1a1a] p-4">
                  <span className="font-mono text-[9px] uppercase" style={{ color: "#555", letterSpacing: "0.15em" }}>
                    Feature
                  </span>
                </div>
                <div className="border-r border-[#1a1a1a] p-4">
                  <span className="font-mono text-[9px] uppercase" style={{ color: "#888", letterSpacing: "0.15em" }}>
                    MediaPipe
                  </span>
                </div>
                <div className="p-4">
                  <span className="font-mono text-[9px] uppercase" style={{ color: "#555", letterSpacing: "0.15em" }}>
                    YOLO
                  </span>
                </div>
              </div>
              {[
                { feature: "Landmarks", mediapipe: "468 points", yolo: "None" },
                { feature: "Head Pose", mediapipe: "Full estimation", yolo: "No" },
                { feature: "Expressions", mediapipe: "Detection", yolo: "No" },
                { feature: "Purpose", mediapipe: "Face-specific", yolo: "General objects" },
                { feature: "CPU Ready", mediapipe: "Yes", yolo: "GPU preferred" },
              ].map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 ${i < 4 ? "border-b border-[#1a1a1a]" : ""}`}>
                  <div className="border-r border-[#1a1a1a] p-4">
                    <span className="font-mono text-[10px]" style={{ color: "#555" }}>{row.feature}</span>
                  </div>
                  <div className="border-r border-[#1a1a1a] p-4">
                    <span className="font-mono text-[10px]" style={{ color: "#e0e0e0" }}>{row.mediapipe}</span>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-[10px]" style={{ color: "#555" }}>{row.yolo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "agent" && (
          <div className="animate-fade-in-up">
            <h3
              className="mb-4 font-serif text-2xl font-light"
              style={{ color: "#e0e0e0" }}
            >
              Agent Architecture
            </h3>
            <p
              className="mb-8 max-w-2xl font-serif text-[15px] font-light leading-relaxed"
              style={{ color: "#888" }}
            >
              Model-agnostic reasoning core with pluggable tools. The agent follows a
              structured loop from task intake through planning, tool selection, execution,
              evaluation, and persistent memory storage.
            </p>

            {/* Pipeline visualization */}
            <div className="flex flex-wrap items-center gap-2">
              {["Task", "Plan", "Tool Selection", "Execution", "Evaluation", "Memory"].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="border border-[#222] px-4 py-3">
                      <span className="font-mono text-[10px] uppercase" style={{ color: "#e0e0e0", letterSpacing: "0.1em" }}>
                        {step}
                      </span>
                    </div>
                    {i < 5 && (
                      <span className="font-mono text-[10px]" style={{ color: "#444" }}>
                        {"▸"}
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="mt-8 border border-[#222] p-5">
              <p className="mb-3 font-mono text-[9px] uppercase" style={{ color: "#555", letterSpacing: "0.2em" }}>
                Key Properties
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Model-agnostic: Supports Qwen, Llama, Claude interchangeably",
                  "Reasoning-Action-Observation loop for structured problem solving",
                  "Tool use: Image generation, code execution, data analysis",
                  "Enterprise memory via ChromaDB vector database",
                  "Pluggable architecture for adding new capabilities",
                ].map((prop) => (
                  <div key={prop} className="flex items-start gap-2">
                    <span className="mt-0.5 font-mono text-[8px]" style={{ color: "#444" }}>{"▸"}</span>
                    <span className="font-mono text-[11px]" style={{ color: "#888" }}>{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

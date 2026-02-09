"use client"

import { useState } from "react"

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-[#222]">
      <div className="flex items-center justify-between border-b border-[#222] px-4 py-2">
        <span
          className="font-mono text-[9px] uppercase"
          style={{ color: "#555", letterSpacing: "0.2em" }}
        >
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="font-mono text-[9px] uppercase transition-colors hover:text-[#888]"
          style={{ color: "#444", letterSpacing: "0.15em" }}
        >
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
      <pre
        className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed"
        style={{ background: "#0a0a0a", color: "#888" }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function InfrastructureSection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="mb-3 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.3em" }}
        >
          {"◈"} Infrastructure
        </p>
        <h2
          className="font-serif text-[40px] font-light"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Environment Setup
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: "#222" }} />
      </div>

      {/* Paperspace Overview */}
      <div className="mb-12 rounded border border-[#222] bg-[#0a0a0a] p-6">
        <h3 className="mb-4 font-serif text-[24px] font-light" style={{ color: "#e0e0e0" }}>
          Paperspace: My AI Development Workspace
        </h3>
        <p className="mb-4 text-[14px] leading-relaxed" style={{ color: "#999" }}>
          Paperspace provides the foundation for all my ML/AI development. Now part of DigitalOcean,
          it offers instant access to powerful NVIDIA GPUs with radical simplicity. I run my RTX A4000
          instances here with per-second billing, paying only $0.76/hour when active—70% less than major
          cloud providers. The platform excels at eliminating infrastructure complexity, letting me focus
          purely on building AI solutions.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Instant GPU provisioning",
            "No queues or waitlists",
            "Pre-configured ML environments",
            "Persistent storage across sessions",
            "Native Jupyter integration",
            "One-click model deployment"
          ].map((feature) => (
            <span
              key={feature}
              className="rounded bg-[#111] px-3 py-1 font-mono text-[10px]"
              style={{ color: "#666", border: "1px solid #222" }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Platform details */}
      <div className="mb-12 grid grid-cols-1 gap-px border border-[#222] md:grid-cols-3" style={{ background: "#222" }}>
        {[
          { label: "Platform", value: "Paperspace Gradient", detail: "GPU-first ML platform" },
          { label: "GPU", value: "NVIDIA RTX A4000", detail: "16 GB VRAM / 6144 CUDA cores" },
          { label: "Storage", value: "/notebooks/", detail: "NVMe persistent storage" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-2 p-6" style={{ background: "#050505" }}>
            <span
              className="font-mono text-[9px] uppercase"
              style={{ color: "#555", letterSpacing: "0.25em" }}
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

      {/* Stack */}
      <div className="mb-12">
        <p
          className="mb-5 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.25em" }}
        >
          Software Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Python 3.11.7",
            "PyTorch 2.1.1",
            "Node.js v20",
            "CUDA 12.1",
            "BitsAndBytes",
            "Transformers",
            "Gradio",
            "FastAPI",
            "Playwright",
            "ChromaDB",
            "YOLOv8",
            "MediaPipe",
          ].map((pkg) => (
            <span
              key={pkg}
              className="border border-[#222] px-3 py-1 font-mono text-[10px]"
              style={{ color: "#888" }}
            >
              {pkg}
            </span>
          ))}
        </div>
      </div>

      {/* Environment code */}
      <div className="mb-12">
        <p
          className="mb-5 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.25em" }}
        >
          Configuration
        </p>
        <div className="flex flex-col gap-4">
          <CodeBlock
            label="secrets management"
            code={`# .env configuration
OPENAI_API_KEY=sk-...
HF_TOKEN=hf_...
GITHUB_TOKEN=ghp_...

# Secrets checker script validates all keys on startup
python scripts/check_secrets.py`}
          />
          <CodeBlock
            label="session logging"
            code={`# Cost tracking at $0.76/hr (A4000 rate)
# Session logs stored in /notebooks/logs/
# CLI task manager: task list | task add | task done

$ task list
  1. [x] Environment setup
  2. [x] NAVADA LLM v3 training
  3. [ ] ALEX agent upgrade to Qwen 3 4B
  4. [ ] Face capture pipeline`}
          />
        </div>
      </div>

      {/* Installed tools */}
      <div>
        <p
          className="mb-5 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.25em" }}
        >
          Toolchain Summary
        </p>
        <div className="border border-[#222]">
          {[
            { category: "ML / AI", tools: "PyTorch, Transformers, BitsAndBytes, PEFT, TRL, Accelerate" },
            { category: "Vision", tools: "YOLOv8 (nano + medium), MediaPipe Face Mesh, Stable Diffusion v1.5" },
            { category: "Agents", tools: "LangChain, CrewAI, Playwright browser automation" },
            { category: "Web", tools: "FastAPI, Gradio, Streamlit, Next.js, Vercel CLI" },
            { category: "Data", tools: "ChromaDB, SQLite, Pandas, NumPy" },
            { category: "Dev", tools: "GitHub CLI, Docker, Jupyter, VS Code Server" },
          ].map((row, i) => (
            <div
              key={row.category}
              className={`flex ${i < 5 ? "border-b border-[#1a1a1a]" : ""}`}
            >
              <div
                className="w-28 flex-shrink-0 border-r border-[#1a1a1a] px-4 py-3"
              >
                <span
                  className="font-mono text-[9px] uppercase"
                  style={{ color: "#555", letterSpacing: "0.15em" }}
                >
                  {row.category}
                </span>
              </div>
              <div className="px-4 py-3">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  {row.tools}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

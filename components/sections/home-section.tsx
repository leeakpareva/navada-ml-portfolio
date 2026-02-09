import Image from "next/image"

export function HomeSection() {
  return (
    <section className="min-h-screen">
      {/* Hero area */}
      <div className="relative flex min-h-[80vh] items-center flex-col lg:flex-row">
        {/* Content */}
        <div className="relative z-10 flex-1 pr-4 lg:pr-8">
          {/* Label */}
          <p
            className="mb-6 font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.3em" }}
          >
            Session Active
          </p>

          <h1
            className="mb-4 font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-light leading-[1.05]"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            <span className="text-balance">NVIDIA RTX A4000</span>
          </h1>

          <p
            className="mb-4 font-serif text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-light italic"
            style={{ color: "#888" }}
          >
            Research Infrastructure for Enterprise AI Development
          </p>
          <p
            className="mb-10 text-[14px] leading-relaxed"
            style={{ color: "#666" }}
          >
            Active deployment environment for production AI systems, autonomous agents, and ML model training.
            This infrastructure powers my consulting work across financial services, developing multi-agent
            architectures and RAG pipelines for enterprise clients.
          </p>

          {/* Specs table */}
          <div className="max-w-md border border-[#222]">
            <div className="flex border-b border-[#222]">
              <div className="flex-1 border-r border-[#222] px-5 py-2">
                <span
                  className="font-mono text-[10px] uppercase"
                  style={{ color: "#555", letterSpacing: "0.2em" }}
                >
                  Model :
                </span>
              </div>
              <div className="flex-1 px-5 py-2">
                <span
                  className="font-mono text-[10px] uppercase"
                  style={{ color: "#555", letterSpacing: "0.2em" }}
                >
                  CUDA Cores :
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 border-r border-[#222] px-5 py-3">
                <span className="font-serif text-lg font-light" style={{ color: "#e0e0e0" }}>
                  RTX A4000
                </span>
              </div>
              <div className="flex-1 px-5 py-3">
                <span className="font-serif text-lg font-light" style={{ color: "#e0e0e0" }}>
                  6144
                </span>
              </div>
            </div>
          </div>

          {/* Research Platform */}
          <div className="mt-8 mb-8">
            <div className="rounded border border-[#333] bg-[#111] p-4 max-w-md">
              <p className="mb-2 font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                Current Research Platform
              </p>
              <p className="text-[12px]" style={{ color: "#888" }}>
                Utilizing Paperspace Gradient for scalable compute infrastructure.
                This environment supports continuous experimentation with LLMs,
                computer vision models, and multi-agent systems for client deployments.
              </p>
              <a
                href="https://docs.digitalocean.com/products/paperspace/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-[11px] transition-colors hover:text-white"
                style={{ color: "#666" }}
              >
                <span>Platform documentation</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex gap-10">
            {[
              { label: "VRAM", value: "16 GB" },
              { label: "CUDA", value: "12.1" },
              { label: "RATE", value: "$0.76/hr" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="font-mono text-[9px] uppercase"
                  style={{ color: "#555", letterSpacing: "0.25em" }}
                >
                  {stat.label}
                </span>
                <span className="font-serif text-xl font-light" style={{ color: "#e0e0e0" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* GPU Image — right side */}
        <div className="relative w-full max-w-[300px] flex-shrink-0 mt-8 lg:mt-0 lg:w-[420px] lg:block">
          <Image
            src="/images/A4000.png"
            alt="NVIDIA RTX A4000 GPU"
            width={420}
            height={560}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Status strip */}
      <div className="border-t border-[#1a1a1a] py-6">
        <div className="flex items-center gap-6">
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.2em" }}
          >
            Lab Status
          </span>
          <span className="flex items-center gap-2">
            <span style={{ color: "#4ade80" }}>{"◉"}</span>
            <span className="font-mono text-[11px]" style={{ color: "#e0e0e0" }}>
              Active Research
            </span>
          </span>
          <span className="h-3 w-px" style={{ background: "#222" }} />
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.2em" }}
          >
            Current Projects
          </span>
          <span className="font-mono text-[11px]" style={{ color: "#888" }}>
            3 Client Deployments / 2 Research Papers
          </span>
          <span className="h-3 w-px" style={{ background: "#222" }} />
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.2em" }}
          >
            Focus Areas
          </span>
          <span className="font-mono text-[11px]" style={{ color: "#888" }}>
            Multi-Agent Systems / RAG Architecture / LLM Fine-tuning
          </span>
        </div>
      </div>
    </section>
  )
}

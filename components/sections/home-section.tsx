import Image from "next/image"

export function HomeSection() {
  return (
    <section className="min-h-screen">
      {/* Hero area */}
      <div className="relative flex min-h-[80vh] items-center">
        {/* Content */}
        <div className="relative z-10 flex-1 pr-8">
          {/* Label */}
          <p
            className="mb-6 font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.3em" }}
          >
            Session Active
          </p>

          <h1
            className="mb-4 font-serif text-[56px] font-light leading-[1.05]"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            <span className="text-balance">NVIDIA RTX A4000</span>
          </h1>

          <p
            className="mb-10 font-serif text-[22px] font-light italic"
            style={{ color: "#888" }}
          >
            Cloud GPU Computing for AI/ML Workloads on Paperspace
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

          {/* Paperspace Link */}
          <div className="mt-8 mb-8">
            <a
              href="https://docs.digitalocean.com/products/paperspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#333] bg-[#111] px-4 py-2 transition-all hover:border-[#555] hover:bg-[#1a1a1a]"
            >
              <span className="font-mono text-[11px] uppercase" style={{ color: "#888", letterSpacing: "0.15em" }}>
                Running on Paperspace Gradient
              </span>
              <span style={{ color: "#666" }}>→</span>
            </a>
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
        <div className="relative hidden w-[420px] flex-shrink-0 lg:block">
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
            Status
          </span>
          <span className="flex items-center gap-2">
            <span style={{ color: "#e0e0e0" }}>{"◉"}</span>
            <span className="font-mono text-[11px]" style={{ color: "#e0e0e0" }}>
              Online
            </span>
          </span>
          <span className="h-3 w-px" style={{ background: "#222" }} />
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.2em" }}
          >
            Platform
          </span>
          <span className="font-mono text-[11px]" style={{ color: "#888" }}>
            Paperspace Gradient
          </span>
          <span className="h-3 w-px" style={{ background: "#222" }} />
          <span
            className="font-mono text-[10px] uppercase"
            style={{ color: "#555", letterSpacing: "0.2em" }}
          >
            Stack
          </span>
          <span className="font-mono text-[11px]" style={{ color: "#888" }}>
            Python 3.11 / PyTorch 2.1 / Node v20
          </span>
        </div>
      </div>
    </section>
  )
}

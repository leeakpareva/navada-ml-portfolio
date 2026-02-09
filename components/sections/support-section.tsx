export function SupportSection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="mb-3 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.3em" }}
        >
          {"◉"} Support
        </p>
        <h2
          className="font-serif text-[40px] font-light"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Resources
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: "#222" }} />
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 gap-px border border-[#222] md:grid-cols-2" style={{ background: "#222" }}>
        <div className="flex flex-col gap-4 p-6" style={{ background: "#050505" }}>
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: "#555", letterSpacing: "0.25em" }}
          >
            Quick Commands
          </span>
          <div className="flex flex-col gap-2">
            {[
              { cmd: "task list", desc: "View current tasks" },
              { cmd: "task add <name>", desc: "Add a new task" },
              { cmd: "task done <id>", desc: "Mark task complete" },
              { cmd: "python scripts/check_secrets.py", desc: "Validate API keys" },
            ].map((item) => (
              <div key={item.cmd} className="flex items-center gap-3">
                <code
                  className="border border-[#222] px-2 py-0.5 font-mono text-[11px]"
                  style={{ background: "#0a0a0a", color: "#888" }}
                >
                  {item.cmd}
                </code>
                <span className="font-mono text-[10px]" style={{ color: "#555" }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6" style={{ background: "#050505" }}>
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: "#555", letterSpacing: "0.25em" }}
          >
            Environment
          </span>
          <div className="flex flex-col gap-2">
            {[
              { key: "Web Preview", value: "Port 6006" },
              { key: "Persistent Dir", value: "/notebooks/" },
              { key: "Session Cost", value: "$0.76/hr" },
              { key: "GPU Memory", value: "16 GB VRAM" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="font-mono text-[10px]" style={{ color: "#555" }}>
                  {item.key}
                </span>
                <span className="font-mono text-[11px]" style={{ color: "#e0e0e0" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6" style={{ background: "#050505" }}>
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: "#555", letterSpacing: "0.25em" }}
          >
            Secrets Management
          </span>
          <p className="font-serif text-[14px] font-light leading-relaxed" style={{ color: "#888" }}>
            All API keys managed through .env with automatic validation on startup.
            Keys include OpenAI, Hugging Face, and GitHub tokens. The .gitignore ensures
            no secrets are committed to version control.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6" style={{ background: "#050505" }}>
          <span
            className="font-mono text-[9px] uppercase"
            style={{ color: "#555", letterSpacing: "0.25em" }}
          >
            Packages Installed
          </span>
          <p className="font-serif text-[14px] font-light leading-relaxed" style={{ color: "#888" }}>
            80+ packages across ML, agents, web frameworks, databases, and development
            tools. Full ML/AI toolchain with PyTorch, Transformers, PEFT, and TRL
            for model training and inference.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-[#1a1a1a] pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-6 w-6 items-center justify-center border border-[#444]">
              <span className="font-mono text-[10px] font-light" style={{ color: "#fff" }}>
                N
              </span>
            </div>
            <span
              className="font-mono text-[10px] uppercase"
              style={{ color: "#555", letterSpacing: "0.2em" }}
            >
              NAVADA Lab
            </span>
          </div>
          <span className="font-mono text-[9px]" style={{ color: "#444" }}>
            Paperspace Gradient / RTX A4000
          </span>
        </div>
      </div>
    </section>
  )
}

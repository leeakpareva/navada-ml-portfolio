export function RoadmapSection() {
  const roadmapItems = [
    {
      category: "Model Upgrades",
      items: [
        { task: "Qwen 3 4B upgrade for ALEX agent reasoning", priority: "HIGH" },
        { task: "NAVADA LLM v4 with expanded training data", priority: "HIGH" },
        { task: "Gradio demo deployment for NAVADA LLM", priority: "MED" },
      ],
    },
    {
      category: "Agent Capabilities",
      items: [
        { task: "Web browsing tool via Playwright", priority: "HIGH" },
        { task: "Code sandbox for ALEX execution", priority: "HIGH" },
        { task: "ChromaDB vector memory for persistent context", priority: "MED" },
        { task: "Multi-agent system with CrewAI", priority: "LOW" },
      ],
    },
    {
      category: "Pipelines",
      items: [
        { task: "Face capture pipeline build", priority: "HIGH" },
        { task: "First LoRA clone training run", priority: "MED" },
        { task: "Helix-Procure document ingestion MVP", priority: "MED" },
      ],
    },
    {
      category: "Deployment",
      items: [
        { task: "Next.js portfolio / demo site to Vercel", priority: "MED" },
        { task: "Voice assistant (Whisper + LLM + TTS)", priority: "LOW" },
      ],
    },
  ]

  return (
    <section className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="mb-3 font-mono text-[10px] uppercase"
          style={{ color: "#555", letterSpacing: "0.3em" }}
        >
          {"▸"} Roadmap
        </p>
        <h2
          className="font-serif text-[40px] font-light"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          {"What's"} Coming
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: "#222" }} />
      </div>

      {/* Roadmap grid */}
      <div className="flex flex-col gap-8">
        {roadmapItems.map((group) => (
          <div key={group.category}>
            <p
              className="mb-4 font-mono text-[10px] uppercase"
              style={{ color: "#888", letterSpacing: "0.25em" }}
            >
              {group.category}
            </p>
            <div className="border border-[#222]">
              {group.items.map((item, i) => (
                <div
                  key={item.task}
                  className={`flex items-center justify-between px-5 py-3.5 ${
                    i < group.items.length - 1 ? "border-b border-[#1a1a1a]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[8px]" style={{ color: "#444" }}>
                      {"▸"}
                    </span>
                    <span
                      className="font-serif text-[14px] font-light"
                      style={{ color: "#e0e0e0" }}
                    >
                      {item.task}
                    </span>
                  </div>
                  <span
                    className="border border-[#222] px-2 py-0.5 font-mono text-[8px] uppercase"
                    style={{
                      color: item.priority === "HIGH" ? "#e0e0e0" : item.priority === "MED" ? "#888" : "#555",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

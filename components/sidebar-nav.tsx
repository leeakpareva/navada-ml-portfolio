"use client"

import { useState } from "react"

type NavSection = {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

const NAV_SECTIONS: NavSection[] = [
  { id: "home", label: "HOME" },
  { id: "profile", label: "PROFILE" },
  { id: "coretext", label: "CORETEXT AI" },
  { id: "comparison", label: "GPU COMPARISON" },
  { id: "infrastructure", label: "INFRASTRUCTURE" },
  {
    id: "projects",
    label: "PROJECTS",
    children: [
      { id: "navada-llm", label: "NAVADA LLM" },
      { id: "alex-agent", label: "ALEX AGENT" },
      { id: "alex-visual", label: "ALEX VISUAL" },
      { id: "face-clone", label: "FACE CLONE" },
      { id: "helix-procure", label: "HELIX-PROCURE" },
    ],
  },
  { id: "technical", label: "TECHNICAL" },
  { id: "roadmap", label: "ROADMAP" },
  { id: "support", label: "SUPPORT" },
  { id: "faq", label: "FAQ" },
]

export function SidebarNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (section: string) => void
}) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["projects"])

  const toggleExpand = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const isActive = (id: string) => activeSection === id

  return (
    <nav
      className="fixed left-0 top-0 z-40 flex h-screen w-[180px] flex-col border-r border-[#1a1a1a]"
      style={{ background: "#050505" }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-[#1a1a1a] px-5 py-6">
        <div className="flex h-8 w-8 items-center justify-center border border-[#444]">
          <span className="font-mono text-sm font-light" style={{ color: "#fff" }}>
            N
          </span>
        </div>
        <span
          className="font-mono text-[10px] uppercase"
          style={{ color: "#888", letterSpacing: "0.25em" }}
        >
          NAVADA-LAB
        </span>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.id}>
            <button
              type="button"
              onClick={() => {
                if (section.children) {
                  toggleExpand(section.id)
                }
                onNavigate(section.id)
              }}
              className={`group flex w-full items-center justify-between border-r-2 px-5 py-2.5 text-left font-mono text-[10.5px] uppercase transition-colors ${
                isActive(section.id)
                  ? "border-r-[#fff]"
                  : "border-r-transparent hover:border-r-[#444]"
              }`}
              style={{
                color: isActive(section.id) ? "#fff" : "#888",
                letterSpacing: "0.15em",
              }}
            >
              <span>{section.label}</span>
              {section.children && (
                <span
                  className="inline-block text-[12px] transition-transform duration-200"
                  style={{
                    color: "#555",
                    transform: expandedSections.includes(section.id)
                      ? "rotate(45deg)"
                      : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              )}
            </button>

            {/* Children */}
            {section.children && expandedSections.includes(section.id) && (
              <div className="overflow-hidden">
                {section.children.map((child) => (
                  <button
                    type="button"
                    key={child.id}
                    onClick={() => onNavigate(child.id)}
                    className={`flex w-full border-r-2 py-1.5 pl-9 pr-5 text-left font-mono text-[9.5px] uppercase transition-colors ${
                      isActive(child.id)
                        ? "border-r-[#fff]"
                        : "border-r-transparent hover:border-r-[#444]"
                    }`}
                    style={{
                      color: isActive(child.id) ? "#fff" : "#555",
                      letterSpacing: "0.12em",
                    }}
                  >
                    <span style={{ color: "#444", marginRight: 6 }}>{"▸"}</span>
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer tags */}
      <div className="border-t border-[#1a1a1a] px-5 py-4">
        <div className="flex flex-wrap gap-1.5">
          {["GPU", "RTX A4000"].map((tag) => (
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
    </nav>
  )
}

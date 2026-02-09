import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProfileSection() {
  const portfolioLinks = [
    { name: "Navada Space", url: "https://www.navada.space" },
    { name: "Navada Robotics", url: "https://www.navadarobotics.com" },
    { name: "Raven Terminal", url: "https://www.raventerminal.xyz" },
    { name: "Alex Navada", url: "https://www.alexnavada.xyz" },
  ]

  return (
    <section className="min-h-screen py-12">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="mb-4 font-serif text-[48px] font-light leading-[1.1]"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Profile
        </h1>
        <p
          className="font-serif text-[20px] font-light italic"
          style={{ color: "#888" }}
        >
          AI Engineer & Technology Director
        </p>
      </div>

      {/* Profile Card */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-serif text-[32px] font-light"
            style={{ color: "#e0e0e0" }}
          >
            Leslie Akpareva
          </h2>
          <div className="mb-6 space-y-2">
            <p className="font-mono text-[12px]" style={{ color: "#888" }}>
              Principal Azure AI Solution Consultant at Generali UK
            </p>
            <p className="font-mono text-[11px]" style={{ color: "#666" }}>
              Mobile: 07935237704 | Email: leeakpareva@hotmail.com
            </p>
          </div>

          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Visionary Program Lead and Senior Technology Consultant with over 17 years of experience
            delivering large-scale digital transformation across finance, insurance, healthcare, and emerging
            technology sectors. I design and deploy production-grade, AI-driven systems that align advanced
            engineering with measurable business outcomes.
          </p>

          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            My technical stack is centered on Python for model orchestration, data pipelines and backend
            services complemented by modern web frameworks. At Generali, I lead the design and delivery of
            the firm's end-to-end AI operations, owning the technical architecture, development standards,
            and execution model for enterprise AI across the UK team.
          </p>

          {/* Core Competencies */}
          <div className="mb-8">
            <h3
              className="mb-4 font-mono text-[12px] uppercase"
              style={{ color: "#888", letterSpacing: "0.2em" }}
            >
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Azure AI", "Python", "TypeScript", "TensorFlow", "LangChain", "OpenAI", "Anthropic", "Next.js", "Docker", "FastAPI", "Node.js", "NumPy"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-[#333] bg-transparent text-[#888] hover:bg-[#111]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h3
              className="mb-4 font-mono text-[12px] uppercase"
              style={{ color: "#888", letterSpacing: "0.2em" }}
            >
              Portfolio
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {portfolioLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded border border-[#444] bg-[#111] px-4 py-4 text-center transition-all hover:border-[#666] hover:bg-[#1a1a1a]"
                >
                  <p className="mb-1 font-mono text-[12px] font-medium" style={{ color: "#fff" }}>
                    {link.name}
                  </p>
                  <p className="font-mono text-[10px]" style={{ color: "#666" }}>
                    {link.url.replace('https://', '')}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-mono text-[14px] uppercase"
            style={{ color: "#888", letterSpacing: "0.2em" }}
          >
            Current Role
          </h2>

          <div className="mb-6">
            <h3 className="mb-2 font-serif text-[20px] font-light" style={{ color: "#e0e0e0" }}>
              Principal Azure AI Solution Consultant
            </h3>
            <p className="mb-3 font-mono text-[11px]" style={{ color: "#666" }}>
              Generali UK | November 2024 - Present
            </p>
            <ul className="space-y-2 text-[14px]" style={{ color: "#999" }}>
              <li>• Design and implement end-to-end architectures for multi-agent AI systems in Azure AI Foundry</li>
              <li>• Manage and deploy AI applications integrating LangChain, Azure OpenAI, and Vector Databases</li>
              <li>• Build RAG-based microservices, containerize workloads using Docker, and orchestrate with FastAPI</li>
              <li>• Develop custom Python and TypeScript components with Chainlit, Next.js, and Shadcn UI</li>
              <li>• Implement secure API layers with JWT/OAuth and Azure Key Vault integration</li>
              <li>• Author and deliver internal AI enablement programs and technical workshops</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-[#222] pt-6">
            <h3
              className="mb-4 font-mono text-[12px] uppercase"
              style={{ color: "#666", letterSpacing: "0.2em" }}
            >
              Previous Roles
            </h3>
            <div className="space-y-3">
              {[
                "Program Director - Informa Markets (Oct 2023 - Sept 2024)",
                "Commercial Program Manager - Farfetch (Dec 2022 - Aug 2023)",
                "Blockchain Program Manager - DHL Express (May 2022 - Dec 2022)",
                "Product/Project Lead - Shutterstock (Nov 2021 - May 2022)"
              ].map((role) => (
                <p key={role} className="font-mono text-[11px]" style={{ color: "#777" }}>
                  {role}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <Card className="border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-mono text-[14px] uppercase"
            style={{ color: "#888", letterSpacing: "0.2em" }}
          >
            Education & Certifications
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono text-[12px]" style={{ color: "#888" }}>
                EDUCATION
              </h3>
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• MBA - Northumbria University (2016-2017)</li>
                <li>• Masters in Project Management - Northumbria (2013-2015)</li>
                <li>• Fashion Design - Central Saint Martin's (2020)</li>
                <li>• LLB Law - Brunel University (2007-2010)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-mono text-[12px]" style={{ color: "#888" }}>
                KEY CERTIFICATIONS
              </h3>
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• Certified Blockchain Architect</li>
                <li>• Python Expert (Meta)</li>
                <li>• IBM Full Stack Developer</li>
                <li>• PRINCE2 Practitioner</li>
                <li>• Certified Scrum Master</li>
                <li>• CISM - Information Security Manager</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
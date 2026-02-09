"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { CoverPage } from "@/components/cover-page"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { HomeSection } from "@/components/sections/home-section"
import { ProfileSection } from "@/components/sections/profile-section"
import { CoreTextSection } from "@/components/sections/coretext-section"
import { InfrastructureSection } from "@/components/sections/infrastructure-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TechnicalSection } from "@/components/sections/technical-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { SupportSection } from "@/components/sections/support-section"

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [activeProject, setActiveProject] = useState<string | undefined>()
  const contentRef = useRef<HTMLDivElement>(null)

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const setSectionRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }, [])

  const handleNavigate = (section: string) => {
    const projectSections = ["navada-llm", "alex-agent", "alex-visual", "face-clone", "helix-procure"]

    if (projectSections.includes(section)) {
      setActiveSection("projects")
      setActiveProject(section)
      const projectsEl = sectionRefs.current["projects"]
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    setActiveSection(section)
    setActiveProject(undefined)
    const el = sectionRefs.current[section]
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Intersection observer for active section tracking
  useEffect(() => {
    if (!entered) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section")
            if (id) setActiveSection(id)
          }
        }
      },
      { threshold: 0.3 }
    )

    const timer = setTimeout(() => {
      for (const el of Object.values(sectionRefs.current)) {
        if (el) observer.observe(el)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [entered])

  if (!entered) {
    return <CoverPage onEnter={() => setEntered(true)} />
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#050505" }}>
      <div className="flex flex-1">
        <SidebarNav activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Main content */}
        <main
          ref={contentRef}
          className="ml-[180px] flex-1 overflow-y-auto px-12 lg:px-16"
        >
          <div className="mx-auto max-w-4xl">
            <div ref={setSectionRef("home")} data-section="home">
              <HomeSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("profile")} data-section="profile">
              <ProfileSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("coretext")} data-section="coretext">
              <CoreTextSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("infrastructure")} data-section="infrastructure">
              <InfrastructureSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("projects")} data-section="projects">
              <ProjectsSection activeProject={activeProject} />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("technical")} data-section="technical">
              <TechnicalSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("roadmap")} data-section="roadmap">
              <RoadmapSection />
            </div>

            <div className="h-px w-full" style={{ background: "#1a1a1a" }} />

            <div ref={setSectionRef("support")} data-section="support">
              <SupportSection />
            </div>

            {/* Bottom spacing */}
            <div className="h-32" />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

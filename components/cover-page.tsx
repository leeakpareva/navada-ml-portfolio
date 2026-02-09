"use client"

import { useState } from "react"

export function CoverPage({ onEnter }: { onEnter: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  const handleClick = () => {
    setIsExiting(true)
    setTimeout(onEnter, 600)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#050505" }}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick()
      }}
      role="button"
      tabIndex={0}
      aria-label="Click to enter NAVADA Lab"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo box */}
        <div
          className="flex items-center justify-center border border-[#444]"
          style={{ width: 100, height: 100 }}
        >
          <span
            className="font-mono text-[40px] font-light"
            style={{ color: "#fff", letterSpacing: "0.05em" }}
          >
            N
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center gap-4">
          <h1
            className="font-mono text-[11px] font-medium uppercase"
            style={{
              color: "#e0e0e0",
              letterSpacing: "0.45em",
            }}
          >
            NAVADA LAB
          </h1>

          {/* Animated line */}
          <div
            className="h-px animate-line-expand"
            style={{ background: "#444", width: 0 }}
          />

          <p
            className="font-mono text-[10px] uppercase"
            style={{
              color: "#555",
              letterSpacing: "0.3em",
            }}
          >
            AI Research & Development
          </p>
        </div>

        {/* Pulsing CTA */}
        <p
          className="mt-12 animate-pulse-text font-mono text-[10px] uppercase"
          style={{
            color: "#555",
            letterSpacing: "0.35em",
          }}
        >
          Click to enter
        </p>
      </div>
    </div>
  )
}

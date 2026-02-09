export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505] ml-0 lg:ml-[180px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 py-8 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left side - Name and title */}
          <div className="text-center md:text-left">
            <h3 className="mb-1 font-serif text-[16px] font-light" style={{ color: "#e0e0e0" }}>
              Leslie Akpareva
            </h3>
            <p className="font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
              Principal AI Solution Consultant
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="font-mono text-[10px]" style={{ color: "#555" }}>
              © 2024 Navada-Lab. All rights reserved. | navada-lab.space
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/leslie-akpareva-mba-ma-56a888182/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:opacity-80"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                style={{ color: "#888" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-mono text-[11px] group-hover:text-white" style={{ color: "#888" }}>
                LinkedIn
              </span>
            </a>

            <a
              href="mailto:leeakpareva@hotmail.com"
              className="group flex items-center gap-2 transition-colors hover:opacity-80"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                style={{ color: "#888" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-mono text-[11px] group-hover:text-white" style={{ color: "#888" }}>
                Email
              </span>
            </a>

            <a
              href="https://huggingface.co/Navada25"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:opacity-80"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                style={{ color: "#888" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.79 0 1.5-.71 1.5-1.5S8.79 9 8 9s-1.5.71-1.5 1.5S7.21 12 8 12zm8 0c.79 0 1.5-.71 1.5-1.5S16.79 9 16 9s-1.5.71-1.5 1.5.71 1.5 1.5 1.5zm-4 4c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z"/>
              </svg>
              <span className="font-mono text-[11px] group-hover:text-white" style={{ color: "#888" }}>
                Hugging Face
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CoreTextSection() {
  return (
    <section className="min-h-screen py-12">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="mb-4 font-serif text-[48px] font-light leading-[1.1]"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          CoreText AI
        </h1>
        <p
          className="font-serif text-[20px] font-light italic"
          style={{ color: "#888" }}
        >
          Liberating Knowledge from Static Pages
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-serif text-[32px] font-light"
            style={{ color: "#e0e0e0" }}
          >
            Why This Project Exists
          </h2>
          <p className="mb-6 text-[16px] font-medium leading-relaxed" style={{ color: "#e0e0e0" }}>
            Text-based knowledge is full of valuable information, but most of that knowledge stays trapped inside static documents.
          </p>

          <h3 className="mb-4 font-serif text-[20px] font-light" style={{ color: "#e0e0e0" }}>
            The Core Problem CoreText AI Solves
          </h3>
          <p className="mb-4 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Huge amounts of high-quality, carefully structured, expert-written knowledge remains locked in static text documents:
            business manuals, research papers, technical documentation, training materials, legal documents, educational content, and specialized literature for both businesses and individuals.
          </p>
          <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            This knowledge is extremely reliable (peer-reviewed, edited, authoritative), deeply structured,
            and pedagogically refined over years. But it's completely passive — it cannot answer questions,
            explain differently, skip known parts, connect concepts across chapters, or adapt to the learner's current level.
          </p>

          <div className="mb-6 rounded bg-[#111] p-4">
            <p className="mb-3 font-mono text-[12px] uppercase" style={{ color: "#888", letterSpacing: "0.2em" }}>
              The Inefficiency
            </p>
            <ul className="space-y-2 text-[13px]" style={{ color: "#999" }}>
              <li>• Read hundreds of pages linearly to find one answer</li>
              <li>• Struggle with outdated explanations or notation</li>
              <li>• Google for summaries and risk getting wrong/simplified/hallucinated versions</li>
              <li>• Lose time re-reading large sections to refresh context</li>
            </ul>
          </div>

          <h3 className="mb-4 font-serif text-[20px] font-light" style={{ color: "#e0e0e0" }}>
            CoreText AI's Central Thesis
          </h3>
          <p className="mb-6 text-[15px] font-medium leading-relaxed" style={{ color: "#e0e0e0" }}>
            The highest-leverage place to apply modern AI is not on the open web — it is on the
            highest-quality closed-domain knowledge that already exists in structured text documents.
          </p>
          <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Instead of letting another 10,000 mediocre blog posts get turned into yet another general chatbot,
            we should take specialized text content—whether academic, business, or personal—and turn each document
            into a living, reasoning, interactive expert that stays 100% faithful to the original content.
          </p>

          <div className="mb-6 border-l-2 border-[#444] pl-6">
            <p className="text-[16px] font-medium" style={{ color: "#e0e0e0" }}>
              Turn any text document into its own specialized, citation-grounded AI engine.
            </p>
          </div>

        </CardContent>
      </Card>

      {/* What It Does */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-serif text-[28px] font-light"
            style={{ color: "#e0e0e0" }}
          >
            What CoreText AI Actually Does
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            It converts any static text document into a dynamic, queryable, infinitely patient domain expert that:
          </p>
          <ul className="space-y-3 text-[14px]" style={{ color: "#999" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "#666" }}>▸</span>
              <span>Answers only from the source document</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#666" }}>▸</span>
              <span>Cites exact sections and references</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#666" }}>▸</span>
              <span>Explains, re-explains, steps through examples, and connects ideas</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#666" }}>▸</span>
              <span>Never hallucinates outside the source material</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#666" }}>▸</span>
              <span>Provides personalized access to any text content — 24/7</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Why Now */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-serif text-[28px] font-light"
            style={{ color: "#e0e0e0" }}
          >
            Why This Matters Now
          </h2>
          <p className="mb-4 font-mono text-[11px] uppercase" style={{ color: "#888", letterSpacing: "0.2em" }}>
            2026 Perspective
          </p>
          <ul className="space-y-3 text-[14px]" style={{ color: "#b0b0b0" }}>
            <li>• Students are already using general-purpose AIs and getting mixtures of correct + invented answers</li>
            <li>• Educators are seeing increasing academic integrity issues</li>
            <li>• Institutions want scalable tutoring but cannot afford 1:1 human support at scale</li>
            <li>• The gap between "good enough web answer" and "authoritative textbook answer" is growing wider</li>
            <li>• Vector databases, embedding models, RAG frameworks, and fast inference have finally become cheap and reliable enough</li>
          </ul>

          <div className="mt-6 rounded bg-[#111] p-4">
            <p className="text-[14px] font-medium" style={{ color: "#e0e0e0" }}>
              We are at the moment when it becomes realistic — and economically sensible — to productize
              "one expert AI per great textbook".
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Vision */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-serif text-[28px] font-light"
            style={{ color: "#e0e0e0" }}
          >
            Infrastructure for the Next Wave of Educational AI
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Instead of building one giant model that tries to know everything poorly, we build many small,
            precise, verifiable expert engines — one per book or per course. That turns out to be a much
            more powerful, trustworthy, and academically sound pattern.
          </p>

          <div className="border-y border-[#222] py-6">
            <p className="mb-2 text-[16px] font-medium" style={{ color: "#e0e0e0" }}>
              CoreText AI is not trying to replace books.
            </p>
            <p className="text-[16px] font-medium" style={{ color: "#e0e0e0" }}>
              It is trying to liberate them.
            </p>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Let the knowledge that was painstakingly written, edited, and refined over decades finally
            become interactive, adaptive, and accessible the way people actually want to learn in 2026.
          </p>

          <p className="mt-6 text-[15px] font-medium" style={{ color: "#e0e0e0" }}>
            That is the reason this project exists.
          </p>

          {/* Status Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge className="border-[#444] bg-[#111] text-[#888]">
              Status: In Development
            </Badge>
            <Badge className="border-[#444] bg-[#111] text-[#888]">
              Open Source Initiative
            </Badge>
            <Badge className="border-[#444] bg-[#111] text-[#888]">
              Community Driven
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure Platforms */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-mono text-[14px] uppercase"
            style={{ color: "#888", letterSpacing: "0.2em" }}
          >
            Infrastructure & Deployment
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-2 font-serif text-[18px] font-light" style={{ color: "#e0e0e0" }}>
                Paperspace
              </h3>
              <p className="font-mono text-[10px]" style={{ color: "#666" }}>
                GPU Computing & ML Workloads
              </p>
            </div>
            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-2 font-serif text-[18px] font-light" style={{ color: "#e0e0e0" }}>
                Railway
              </h3>
              <p className="font-mono text-[10px]" style={{ color: "#666" }}>
                Backend Services & APIs
              </p>
            </div>
            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-2 font-serif text-[18px] font-light" style={{ color: "#e0e0e0" }}>
                Vercel
              </h3>
              <p className="font-mono text-[10px]" style={{ color: "#666" }}>
                Frontend & Edge Functions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Documentation */}
      <Card className="border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-6 font-mono text-[14px] uppercase"
            style={{ color: "#888", letterSpacing: "0.2em" }}
          >
            CoreText AI Documentation
          </h2>
          <div className="space-y-6 font-mono text-[12px]" style={{ color: "#999" }}>
            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                1. Architecture Overview
              </h3>
              <p className="mb-2">
                CoreText AI is built on a microservices architecture using containerized workloads
                running on NVIDIA RTX A4000 GPUs in Paperspace. The system employs a multi-agent approach
                with specialized agents for different cognitive tasks, leveraging the powerful compute
                capabilities of dedicated GPU infrastructure.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                2. Paperspace Infrastructure
              </h3>
              <p className="mb-3">
                Paperspace provides the backbone of our ML infrastructure, offering a robust and
                developer-friendly cloud platform specifically designed for machine learning workloads.
              </p>
              <ul className="space-y-2 pl-4">
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• GPU-First Platform:</strong> Purpose-built for AI/ML with instant access to
                  NVIDIA GPUs including A4000, A5000, A6000, and H100 instances
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Gradient Notebooks:</strong> Jupyter-compatible environments with pre-configured
                  ML frameworks, automatic versioning, and collaborative features
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• One-Click Deployments:</strong> Deploy models directly from notebooks to production
                  endpoints with automatic scaling and load balancing
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Persistent Storage:</strong> High-performance NVMe storage that persists across
                  sessions, perfect for large datasets and model checkpoints
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Cost Efficiency:</strong> Pay-per-second billing with no minimum commitments,
                  automatic shutdown features, and spot instances for up to 70% savings
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• MLOps Integration:</strong> Native support for experiment tracking, model versioning,
                  and CI/CD pipelines with GitHub Actions and GitLab integration
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                3. Core Components
              </h3>
              <ul className="space-y-1 pl-4">
                <li>• RAG Pipeline: Document processing and semantic search on GPU-accelerated infrastructure</li>
                <li>• Agent Orchestrator: Multi-agent coordination and task routing</li>
                <li>• Vector Database: Pinecone/PostgreSQL with pgvector optimized for GPU operations</li>
                <li>• API Gateway: FastAPI with JWT authentication</li>
                <li>• Monitoring: Paperspace metrics, custom dashboards, and performance tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                4. Why Paperspace for ML Infrastructure
              </h3>
              <p className="mb-3">
                Paperspace stands out as the ideal platform for CoreText AI's infrastructure needs:
              </p>
              <ul className="space-y-2 pl-4">
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Developer Experience:</strong> Simple CLI/SDK, intuitive web console, and
                  seamless integration with popular ML frameworks like PyTorch, TensorFlow, and JAX
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Instant Scalability:</strong> Spin up GPU instances in seconds, not minutes,
                  with automatic resource provisioning and no queue times
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Enterprise Ready:</strong> SOC 2 Type II certified, HIPAA compliant options,
                  VPC peering, and dedicated clusters for sensitive workloads
                </li>
                <li>
                  <strong style={{ color: "#e0e0e0" }}>• Global Infrastructure:</strong> Data centers in US East, US West, Europe,
                  and Asia with low-latency connectivity and redundancy
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                5. Deployment Strategy
              </h3>
              <p className="mb-2">
                Leveraging Paperspace Gradient for model deployment with automatic versioning,
                A/B testing capabilities, and seamless rollback. Container deployments via Docker
                with Paperspace's native container registry and Kubernetes integration for orchestration.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                6. Security & Compliance
              </h3>
              <ul className="space-y-1 pl-4">
                <li>• End-to-end encryption for data at rest and in transit</li>
                <li>• GDPR-compliant data handling and retention policies</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Paperspace's secure infrastructure with isolated compute environments</li>
                <li>• Comprehensive audit logging and threat detection</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                7. Performance Metrics on RTX A4000
              </h3>
              <ul className="space-y-1 pl-4">
                <li>• Inference Speed: &lt;100ms for most LLM queries (7B parameter models)</li>
                <li>• Training Throughput: 16GB VRAM enables batch sizes up to 32 for standard transformers</li>
                <li>• Availability: 99.9% uptime with Paperspace's redundant infrastructure</li>
                <li>• Cost Efficiency: $0.76/hour for dedicated A4000 instance</li>
                <li>• CUDA Performance: 6144 cores delivering 19.2 TFLOPS FP32</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[14px]" style={{ color: "#e0e0e0" }}>
                8. Integration Capabilities
              </h3>
              <p className="mb-2">
                RESTful APIs deployed on Paperspace, WebSocket connections for real-time updates,
                webhook support for event-driven architectures, and native SDKs for Python, TypeScript, and .NET.
                Direct integration with Paperspace Gradient API for programmatic control.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer & Coming Soon */}
      <Card className="border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2
            className="mb-4 font-mono text-[14px] uppercase"
            style={{ color: "#888", letterSpacing: "0.2em" }}
          >
            Educational & Demonstrative Purpose
          </h2>

          <div className="mb-6 rounded bg-[#0f0f0f] border border-[#333] p-4">
            <h3 className="mb-3 font-mono text-[12px] uppercase text-[#e0e0e0]" style={{ letterSpacing: "0.1em" }}>
              Important Disclaimer
            </h3>
            <p className="mb-4 text-[13px] leading-relaxed" style={{ color: "#b0b0b0" }}>
              CoreText AI is designed to showcase the power and versatility of AI and data processing technologies.
              This project is <strong style={{ color: "#e0e0e0" }}>solely for educational and demonstrative purposes</strong>,
              not for commercial gain or copyright infringement.
            </p>
            <p className="mb-4 text-[13px] leading-relaxed" style={{ color: "#b0b0b0" }}>
              The focus is on demonstrating <strong style={{ color: "#e0e0e0" }}>creativity, design process, technical stack,
              and proving the value of AI technologies</strong> in making knowledge more accessible and interactive.
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "#b0b0b0" }}>
              Any implementation respects copyright laws and fair use principles. This is a proof-of-concept
              to advance AI education and demonstrate responsible innovation in knowledge accessibility.
            </p>
          </div>

          <div className="text-center">
            <h3
              className="mb-4 font-mono text-[14px] uppercase"
              style={{ color: "#888", letterSpacing: "0.2em" }}
            >
              Join the Initiative
            </h3>
            <p className="mb-6 text-[14px]" style={{ color: "#999" }}>
              CoreText AI is currently in active development. We're building something special
              for the AI community. More details, documentation, and the full open-source release
              will be announced soon.
            </p>
            <p className="font-mono text-[12px]" style={{ color: "#666" }}>
              Stay tuned for updates
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
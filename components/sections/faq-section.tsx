import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      category: "AI & Machine Learning",
      questions: [
        {
          q: "What is the difference between AI, ML, and Deep Learning?",
          a: "AI is the broadest concept - any computer system that exhibits intelligent behavior. Machine Learning is a subset of AI where systems learn from data without explicit programming. Deep Learning is a subset of ML using neural networks with multiple layers, inspired by the human brain's structure."
        },
        {
          q: "What are Large Language Models (LLMs) and how do they work?",
          a: "LLMs are transformer-based neural networks trained on vast text datasets. They predict the next token in a sequence using self-attention mechanisms. Models like GPT-4, Claude, and LLaMA use billions of parameters to understand context and generate human-like text through probabilistic token generation."
        },
        {
          q: "What is RAG (Retrieval-Augmented Generation)?",
          a: "RAG combines LLMs with external knowledge retrieval. Instead of relying solely on training data, RAG systems fetch relevant information from databases or documents in real-time, then use this context to generate more accurate, up-to-date, and verifiable responses. This reduces hallucinations and enables citation of sources."
        },
        {
          q: "How do multi-agent AI systems work?",
          a: "Multi-agent systems consist of autonomous AI agents that collaborate to solve complex problems. Each agent has specialized capabilities and can communicate with others. They use frameworks like LangChain or CrewAI to coordinate tasks, share information, and achieve goals that single agents cannot accomplish alone."
        },
        {
          q: "What is fine-tuning vs prompt engineering?",
          a: "Prompt engineering optimizes input instructions to get better outputs from existing models - it's fast and requires no training. Fine-tuning retrains a model on specific data to specialize its behavior - it's more powerful but requires computational resources and can cause catastrophic forgetting of general knowledge."
        }
      ]
    },
    {
      category: "GPU & Infrastructure",
      questions: [
        {
          q: "Why do AI models need GPUs instead of CPUs?",
          a: "GPUs excel at parallel processing with thousands of cores handling simultaneous calculations, perfect for matrix operations in neural networks. A task that takes hours on a CPU can complete in minutes on a GPU. Modern GPUs also have specialized tensor cores optimized specifically for AI workloads."
        },
        {
          q: "What is VRAM and why is it critical for AI?",
          a: "VRAM (Video RAM) is the GPU's dedicated memory. It must hold the entire model, intermediate calculations, and batch data. A 7B parameter model needs ~14GB VRAM in FP16. Insufficient VRAM causes out-of-memory errors or forces slower system RAM usage, crippling performance."
        },
        {
          q: "Cloud GPU vs Local GPU - which is better?",
          a: "Cloud GPUs offer flexibility, no upfront costs, and instant scaling. Local GPUs provide consistent availability and lower long-term costs for 24/7 usage. For most researchers and businesses, cloud GPUs are superior due to zero maintenance, ability to switch between GPU types, and pay-per-use pricing."
        },
        {
          q: "What are CUDA cores and tensor cores?",
          a: "CUDA cores are general-purpose parallel processors for various computations. Tensor cores are specialized units that perform matrix multiply-accumulate operations 4-8x faster than CUDA cores, specifically optimized for AI training and inference. RTX A4000 has 6,144 CUDA cores plus tensor cores."
        }
      ]
    },
    {
      category: "Data & Privacy",
      questions: [
        {
          q: "How is training data used in AI models?",
          a: "Training data teaches models patterns and relationships. During training, the model adjusts billions of parameters to minimize prediction errors. The quality, diversity, and size of training data directly impact model performance. Biased or poor-quality data leads to biased or ineffective models."
        },
        {
          q: "What is data privacy in AI context?",
          a: "AI data privacy involves protecting personal information during collection, training, and inference. Key concerns include: preventing models from memorizing sensitive data, ensuring GDPR compliance, implementing differential privacy, and controlling who accesses model outputs. Enterprise deployments often require on-premise or private cloud solutions."
        },
        {
          q: "What are embeddings and vector databases?",
          a: "Embeddings are numerical representations of data (text, images) that capture semantic meaning in high-dimensional space. Vector databases like Pinecone or ChromaDB store and search these embeddings efficiently using similarity metrics. They're essential for semantic search, RAG systems, and recommendation engines."
        },
        {
          q: "How do you prevent AI hallucinations?",
          a: "Hallucinations occur when models generate false information confidently. Prevention strategies include: using RAG to ground responses in real data, implementing fact-checking layers, fine-tuning on high-quality data, setting appropriate temperature parameters, and adding validation loops with citation requirements."
        },
        {
          q: "What is synthetic data and when is it useful?",
          a: "Synthetic data is artificially generated information that mimics real data patterns. It's valuable when real data is scarce, sensitive, or biased. Uses include training privacy-preserving models, augmenting small datasets, and creating edge-case scenarios for testing. Quality depends on generation methods and validation against real distributions."
        }
      ]
    },
    {
      category: "Enterprise AI Implementation",
      questions: [
        {
          q: "What are the key considerations for production AI deployment?",
          a: "Production AI requires: scalable infrastructure, monitoring/observability, version control for models and data, A/B testing capabilities, fallback mechanisms, security/compliance measures, cost optimization, and continuous retraining pipelines. Most failures occur from inadequate production engineering, not model performance."
        },
        {
          q: "How do you measure ROI on AI projects?",
          a: "AI ROI = (Gain from AI - Cost of AI) / Cost of AI. Gains include: time savings, error reduction, revenue increase, and customer satisfaction. Costs include: infrastructure, development, maintenance, and training. Successful projects typically show 3-10x ROI within 12-18 months, with clear KPIs defined upfront."
        },
        {
          q: "What is MLOps and why is it essential?",
          a: "MLOps applies DevOps principles to machine learning. It encompasses model versioning, automated training pipelines, deployment orchestration, performance monitoring, and drift detection. Without MLOps, models degrade over time, deployments fail, and teams cannot iterate efficiently. It's the difference between research and production AI."
        },
        {
          q: "When should companies build vs buy AI solutions?",
          a: "Build when: AI is core to competitive advantage, you have specific domain requirements, data privacy is critical, or you need full control. Buy when: solving common problems, lacking ML expertise, needing quick deployment, or when excellent solutions exist. Most companies benefit from a hybrid approach."
        }
      ]
    }
  ]

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2
          className="mb-4 font-serif text-[32px] font-light"
          style={{ color: "#e0e0e0" }}
        >
          AI, ML & Data FAQ
        </h2>
        <p className="text-[14px]" style={{ color: "#888" }}>
          Essential knowledge for understanding modern AI systems and infrastructure
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((category) => (
          <Card key={category.category} className="border-[#222] bg-[#0a0a0a]">
            <CardContent className="p-6">
              <h3
                className="mb-4 font-mono text-[12px] uppercase"
                style={{ color: "#888", letterSpacing: "0.2em" }}
              >
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="border-b-[#222]"
                  >
                    <AccordionTrigger className="text-left font-light hover:no-underline">
                      <span className="text-[14px]" style={{ color: "#e0e0e0" }}>
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[13px] leading-relaxed" style={{ color: "#999" }}>
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded border border-[#222] bg-[#111] p-4">
        <p className="mb-2 font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
          Have More Questions?
        </p>
        <p className="text-[13px]" style={{ color: "#888" }}>
          These FAQs cover fundamental concepts in AI/ML. For specific consulting inquiries about
          enterprise AI implementation, multi-agent architectures, or custom LLM deployments,
          please reach out at lee@navada.info
        </p>
      </div>
    </section>
  )
}
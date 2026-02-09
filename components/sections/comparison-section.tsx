import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ComparisonSection() {
  const physicalCosts = {
    gpu: 1500,
    power: 0.30,
    cooling: 100,
    maintenance: 50,
    space: 100,
    totalUpfront: 1750,
  }

  const cloudCosts = {
    hourly: 0.76,
    monthly: 547,
    yearly: 6564,
  }

  return (
    <section className="min-h-screen py-12">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="mb-4 font-serif text-[48px] font-light leading-[1.1]"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Cloud vs Physical GPU
        </h1>
        <p
          className="font-serif text-[20px] font-light italic"
          style={{ color: "#888" }}
        >
          RTX A4000: Paperspace Cloud Computing vs Physical Hardware
        </p>
      </div>

      {/* Main Comparison Grid */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Cloud GPU */}
        <Card className="border-[#222] bg-[#0a0a0a]">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
                Cloud GPU
              </h2>
              <Badge className="border-[#444] bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white">
                Recommended
              </Badge>
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Hourly Rate
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $0.76/hr
                </span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Monthly (720hrs)
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $547
                </span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Yearly Cost
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $6,564
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Upfront Cost
                </span>
                <span className="font-mono text-[14px] font-medium" style={{ color: "#4ade80" }}>
                  $0
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
                Advantages
              </h3>
              <ul className="space-y-2 text-[13px]" style={{ color: "#999" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Instant provisioning - start in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Pay only when using (per-second billing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>No maintenance or cooling required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Scale up/down instantly (A4000 → A6000 → H100)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Pre-configured ML environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Persistent storage across sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>Access from anywhere</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Physical GPU */}
        <Card className="border-[#222] bg-[#0a0a0a]">
          <CardContent className="p-8">
            <h2 className="mb-6 font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
              Physical GPU
            </h2>

            <div className="mb-6 space-y-4">
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  GPU Cost (RTX A4000)
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $1,500
                </span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Power ($/kWh yearly)
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $360
                </span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Cooling/Maintenance
                </span>
                <span className="font-mono text-[14px]" style={{ color: "#e0e0e0" }}>
                  $150
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[11px]" style={{ color: "#888" }}>
                  Total First Year
                </span>
                <span className="font-mono text-[14px] font-medium" style={{ color: "#ef4444" }}>
                  $2,010
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
                Disadvantages
              </h3>
              <ul className="space-y-2 text-[13px]" style={{ color: "#999" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>High upfront investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Pays even when idle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Requires cooling & power infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Fixed to one GPU model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Manual environment setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Depreciation over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#ef4444" }}>×</span>
                  <span>Local access only (without setup)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Analysis */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2 className="mb-6 font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
            Cost Analysis & Break-Even
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div className="rounded bg-[#111] p-4">
              <p className="mb-2 font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
                Break-Even Point
              </p>
              <p className="font-serif text-[24px] font-light" style={{ color: "#e0e0e0" }}>
                3.9 months
              </p>
              <p className="mt-1 text-[11px]" style={{ color: "#888" }}>
                of 24/7 usage
              </p>
            </div>
            <div className="rounded bg-[#111] p-4">
              <p className="mb-2 font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
                Typical ML Usage
              </p>
              <p className="font-serif text-[24px] font-light" style={{ color: "#e0e0e0" }}>
                8-12 hrs/day
              </p>
              <p className="mt-1 text-[11px]" style={{ color: "#888" }}>
                ~$200/month
              </p>
            </div>
            <div className="rounded bg-[#111] p-4">
              <p className="mb-2 font-mono text-[10px] uppercase" style={{ color: "#666", letterSpacing: "0.2em" }}>
                Savings (Typical Use)
              </p>
              <p className="font-serif text-[24px] font-light" style={{ color: "#4ade80" }}>
                67%
              </p>
              <p className="mt-1 text-[11px]" style={{ color: "#888" }}>
                vs physical GPU
              </p>
            </div>
          </div>

          <div className="rounded border border-[#222] p-4">
            <h3 className="mb-3 font-mono text-[12px]" style={{ color: "#888" }}>
              Real-World Scenario: ML Engineer Working Pattern
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 text-[13px]" style={{ color: "#999" }}>
                  <strong style={{ color: "#e0e0e0" }}>Cloud GPU:</strong>
                </p>
                <ul className="space-y-1 text-[12px]" style={{ color: "#888" }}>
                  <li>• Training: 40 hrs/week @ $0.76 = $30.40</li>
                  <li>• Experiments: 20 hrs/week @ $0.76 = $15.20</li>
                  <li>• Monthly cost: ~$182</li>
                  <li>• Yearly: $2,184</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-[13px]" style={{ color: "#999" }}>
                  <strong style={{ color: "#e0e0e0" }}>Physical GPU:</strong>
                </p>
                <ul className="space-y-1 text-[12px]" style={{ color: "#888" }}>
                  <li>• Initial: $1,500</li>
                  <li>• Power (year): $360</li>
                  <li>• Cooling: $150</li>
                  <li>• Year 1: $2,010</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[13px] font-medium" style={{ color: "#4ade80" }}>
              → Cloud saves $174 in first year, with no upfront cost
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Virtual Servers Section */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2 className="mb-6 font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
            Beyond GPUs: Virtual Servers for Autonomous Agents
          </h2>

          <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            Paperspace CORE provides CPU-based virtual servers perfect for running autonomous agents,
            web scrapers, API servers, and always-on processes that don't require GPU acceleration.
          </p>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-3 font-mono text-[11px] uppercase" style={{ color: "#888", letterSpacing: "0.15em" }}>
                C2 Instance
              </h3>
              <p className="mb-2 font-serif text-[20px]" style={{ color: "#e0e0e0" }}>
                $0.01/hr
              </p>
              <ul className="space-y-1 text-[11px]" style={{ color: "#666" }}>
                <li>• 1 vCPU, 1GB RAM</li>
                <li>• Perfect for lightweight agents</li>
                <li>• API endpoints</li>
                <li>• ~$7/month 24/7</li>
              </ul>
            </div>

            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-3 font-mono text-[11px] uppercase" style={{ color: "#888", letterSpacing: "0.15em" }}>
                C5 Instance
              </h3>
              <p className="mb-2 font-serif text-[20px]" style={{ color: "#e0e0e0" }}>
                $0.05/hr
              </p>
              <ul className="space-y-1 text-[11px]" style={{ color: "#666" }}>
                <li>• 2 vCPUs, 4GB RAM</li>
                <li>• Multi-agent systems</li>
                <li>• Web scraping fleets</li>
                <li>• ~$36/month 24/7</li>
              </ul>
            </div>

            <div className="rounded border border-[#222] p-4">
              <h3 className="mb-3 font-mono text-[11px] uppercase" style={{ color: "#888", letterSpacing: "0.15em" }}>
                C7 Instance
              </h3>
              <p className="mb-2 font-serif text-[20px]" style={{ color: "#e0e0e0" }}>
                $0.11/hr
              </p>
              <ul className="space-y-1 text-[11px]" style={{ color: "#666" }}>
                <li>• 8 vCPUs, 16GB RAM</li>
                <li>• Complex agent orchestration</li>
                <li>• Database servers</li>
                <li>• ~$79/month 24/7</li>
              </ul>
            </div>
          </div>

          <div className="rounded bg-[#111] p-4">
            <h3 className="mb-3 font-mono text-[12px]" style={{ color: "#888" }}>
              Use Cases for Virtual Servers
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• <strong style={{ color: "#e0e0e0" }}>Autonomous AI Agents:</strong> Run LangChain/CrewAI agents 24/7</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Web Scraping:</strong> Playwright/Selenium browser automation</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>API Servers:</strong> FastAPI/Express backends always available</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Schedulers:</strong> Cron jobs and task orchestration</li>
              </ul>
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• <strong style={{ color: "#e0e0e0" }}>Monitoring:</strong> System health checks and alerting</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Data Pipelines:</strong> ETL processes and streaming</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Discord/Slack Bots:</strong> Always-on chat automation</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Development:</strong> Remote development environments</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Power & Performance Comparison */}
      <Card className="mb-8 border-[#222] bg-[#0a0a0a]">
        <CardContent className="p-8">
          <h2 className="mb-6 font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
            Performance & Power Comparison
          </h2>

          <div className="mb-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="pb-3 text-left font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    Device
                  </th>
                  <th className="pb-3 text-right font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    TFLOPS
                  </th>
                  <th className="pb-3 text-right font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    Memory
                  </th>
                  <th className="pb-3 text-right font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    TDP
                  </th>
                  <th className="pb-3 text-right font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    Cost
                  </th>
                  <th className="pb-3 text-right font-mono text-[11px] font-normal uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
                    ML Capability
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    RTX A4000 (Cloud)
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#4ade80" }}>
                    19.2
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    16 GB GDDR6
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    140W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    $0.76/hr
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#4ade80] bg-[#111] text-[#4ade80]">
                      Production
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    RTX A4000 (Physical)
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#4ade80" }}>
                    19.2
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    16 GB GDDR6
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    140W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    $1,500
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#4ade80] bg-[#111] text-[#4ade80]">
                      Production
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    MacBook Pro M3
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#fbbf24" }}>
                    4.5
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    18 GB Unified
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    20W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    $1,599
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#fbbf24] bg-[#111] text-[#fbbf24]">
                      Development
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    Gaming Laptop RTX 4060
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#fbbf24" }}>
                    15.1
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    8 GB GDDR6
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    115W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    $1,200
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#fbbf24] bg-[#111] text-[#fbbf24]">
                      Limited ML
                    </Badge>
                  </td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    Regular Laptop (Intel)
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#ef4444" }}>
                    0.4
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    16 GB DDR4
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    15W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    $800
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#ef4444] bg-[#111] text-[#ef4444]">
                      CPU Only
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-mono text-[13px]" style={{ color: "#e0e0e0" }}>
                    Raspberry Pi 5 (8GB)
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#ef4444" }}>
                    0.001
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#999" }}>
                    8 GB LPDDR4
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#4ade80" }}>
                    5W
                  </td>
                  <td className="py-3 text-right font-mono text-[13px]" style={{ color: "#4ade80" }}>
                    $80
                  </td>
                  <td className="py-3 text-right">
                    <Badge className="border-[#ef4444] bg-[#111] text-[#ef4444]">
                      Edge Only
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded bg-[#111] p-4">
              <h3 className="mb-3 font-mono text-[12px]" style={{ color: "#888" }}>
                Performance Analysis
              </h3>
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• <strong style={{ color: "#e0e0e0" }}>RTX A4000:</strong> 48x faster than regular laptop for ML</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>MacBook M3:</strong> Good for development, limited for training</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Gaming Laptop:</strong> OK for small models, VRAM limited</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Raspberry Pi:</strong> 19,200x slower than A4000</li>
              </ul>
            </div>

            <div className="rounded bg-[#111] p-4">
              <h3 className="mb-3 font-mono text-[12px]" style={{ color: "#888" }}>
                Power Efficiency
              </h3>
              <ul className="space-y-2 text-[12px]" style={{ color: "#999" }}>
                <li>• <strong style={{ color: "#e0e0e0" }}>Best TFLOPS/Watt:</strong> MacBook M3 (0.225)</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>RTX A4000:</strong> 0.137 TFLOPS/W (excellent for GPU)</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Gaming Laptop:</strong> 0.131 TFLOPS/W</li>
                <li>• <strong style={{ color: "#e0e0e0" }}>Pi 5:</strong> Ultra-low power but minimal compute</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded border border-[#222] p-4">
            <p className="mb-2 font-mono text-[11px] uppercase" style={{ color: "#666", letterSpacing: "0.15em" }}>
              Key Insight
            </p>
            <p className="text-[13px]" style={{ color: "#b0b0b0" }}>
              While a Raspberry Pi 5 costs only $80 and uses 5W of power, it would take
              <strong style={{ color: "#e0e0e0" }}> 19,200 Raspberry Pi 5s</strong> to match the compute
              power of one RTX A4000. For serious ML work, cloud GPUs offer unmatched value — you get
              datacenter-grade performance without the $1,500+ investment or power infrastructure.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-[#222] bg-gradient-to-br from-[#0a0a0a] to-[#111]">
        <CardContent className="p-8">
          <h2 className="mb-4 font-serif text-[28px] font-light" style={{ color: "#e0e0e0" }}>
            The Cloud Advantage
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed" style={{ color: "#b0b0b0" }}>
            For most ML engineers and researchers, cloud GPUs offer superior economics and flexibility.
            You avoid the $1,500+ upfront cost, pay only for actual usage, and can instantly scale
            between different GPU models as your needs change.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "No upfront investment",
              "70% cost savings (typical use)",
              "Instant scaling",
              "Global access",
              "Pre-configured environments",
              "Zero maintenance",
              "Latest hardware available"
            ].map((benefit) => (
              <Badge key={benefit} className="border-[#333] bg-[#111] text-[#888]">
                {benefit}
              </Badge>
            ))}
          </div>
          <div className="mt-6 border-t border-[#222] pt-6">
            <p className="text-[13px]" style={{ color: "#999" }}>
              <strong style={{ color: "#e0e0e0" }}>Bottom Line:</strong> Unless you're using a GPU 24/7 for
              4+ months straight, cloud computing with Paperspace delivers better value, flexibility, and
              peace of mind. Combine GPU instances for training with virtual servers for agents, and you have
              a complete AI infrastructure at a fraction of the cost of physical hardware.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Lock } from 'lucide-react';

const useCases = [
  {
    id: 1,
    title: "AI Agent Command Center",
    client: "E-commerce Brand",
    industry: "Retail",
    previewImage: "/case-studies/01-ai-agent-management/preview.jpg",
    problem: "Managing 12+ AI agents across disconnected tools",
    solution: "Unified dashboard with real-time sync",
    results: ["68% faster task completion", "Zero context switching", "24/7 agent visibility"],
    tools: ["Next.js", "Convex", "Ollama"],
    details: "Built a Mission Control system that orchestrates 12 specialized AI agents...",
    locked: false
  },
  {
    id: 2,
    title: "Lead Generation Pipeline",
    client: "B2B SaaS Startup",
    industry: "Technology",
    previewImage: "/case-studies/02-lead-gen/preview.jpg",
    problem: "Manual outreach taking 40+ hours/week",
    solution: "Automated prospecting + qualification",
    results: ["12x more leads", "73% cost reduction", "24hr response time"],
    tools: ["n8n", "Make.com", "Apollo"],
    details: "End-to-end lead generation with automated prospecting, enrichment...",
    locked: true
  },
  {
    id: 3,
    title: "Content Production Factory",
    client: "Digital Marketing Agency",
    industry: "Marketing",
    previewImage: "/case-studies/03-content-factory/preview.jpg",
    problem: "Content bottleneck for 15+ clients",
    solution: "AI-powered content pipeline with approvals",
    results: ["50 articles/week", "85% time saved", "99% client satisfaction"],
    tools: ["Claude", "Airtable", "Slack"],
    details: "Automated content research, drafting, editing, and distribution...",
    locked: true
  },
  {
    id: 4,
    title: "Customer Support Automation",
    client: "Healthcare Provider",
    industry: "Healthcare",
    previewImage: "/case-studies/04-support/preview.jpg",
    problem: "2,000+ tickets/month, 48hr response time",
    solution: "AI triage + auto-resolution for common issues",
    results: ["89% auto-resolution", "4hr avg response", "24/7 coverage"],
    tools: ["Intercom", "OpenAI", "Zapier"],
    details: "Intelligent ticket routing with context-aware responses...",
    locked: true
  },
  {
    id: 5,
    title: "Financial Reporting Suite",
    client: "Accounting Firm",
    industry: "Finance",
    previewImage: "/case-studies/05-finance/preview.jpg",
    problem: "Monthly reports taking 60+ hours",
    solution: "Automated data aggregation + insight generation",
    results: ["98% time saved", "Zero errors", "Client portal"],
    tools: ["Python", "Notion", "QuickBooks"],
    details: "Automated financial report generation with anomaly detection...",
    locked: true
  }
];

export default function ExpandableUseCases() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">
        Real Results, Real Businesses
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Select projects showing AI automation impact across industries
      </p>

      <div className="space-y-4">
        {useCases.map((useCase) => (
          <motion.div
            key={useCase.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
            onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
            layout
          >
            {/* Preview Row */}
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {useCase.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.client} • {useCase.industry}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                  {useCase.results.slice(0, 2).map((result, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      {result.split(' ')[0]}
                    </span>
                  ))}
                </div>
                {useCase.locked && <Lock size={16} className="text-gray-500" />}
                <motion.div
                  animate={{ rotate: expandedId === useCase.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={24} className="text-gray-400" />
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === useCase.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10"
                >
                  <div className="p-6 grid md:grid-cols-2 gap-8">
                    {/* Left: Problem/Solution */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          Challenge
                        </h4>
                        <p className="text-gray-300">{useCase.problem}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          Solution
                        </h4>
                        <p className="text-gray-300">{useCase.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-purple-400 font-medium mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.tools.map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Wireframe Preview */}
                    <div className="bg-black/30 rounded-xl p-4">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 relative overflow-hidden">
                        {useCase.locked ? (
                          <div className="text-center">
                            <Lock size={48} className="text
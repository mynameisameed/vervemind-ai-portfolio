'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const useCases = [
  {
    id: 1,
    title: 'AI Agent Command Center',
    client: 'E-commerce Brand',
    industry: 'Retail',
    problem: 'Managing 12+ AI agents across disconnected tools',
    solution: 'Unified dashboard with real-time sync',
    results: ['68% faster completion', 'Zero context switching'],
    tools: ['Next.js', 'Convex', 'Ollama'],
    details: 'Orchestrated 12 specialized AI agents through a single Mission Control interface...',
    wireframe: '/wireframes/case-1.svg'
  },
  {
    id: 2,
    title: 'Lead Generation Pipeline',
    client: 'B2B SaaS Startup', 
    industry: 'Technology',
    problem: 'Manual outreach taking 40+ hours/week',
    solution: 'Automated prospecting + qualification',
    results: ['12x more leads', '73% cost reduction'],
    tools: ['n8n', 'Apollo', 'Claude'],
    details: 'End-to-end automation from lead capture to qualification...',
    wireframe: '/wireframes/case-2.svg'
  },
  {
    id: 3,
    title: 'Content Production Factory',
    client: 'Marketing Agency',
    industry: 'Marketing', 
    problem: 'Content bottleneck for 15+ clients',
    solution: 'AI-powered content pipeline with approvals',
    results: ['50 articles/week', '85% time saved'],
    tools: ['Claude', 'Airtable', 'Slack'],
    details: 'Automated research, drafting, editing, and publishing workflow...',
    wireframe: '/wireframes/case-3.svg'
  },
  {
    id: 4,
    title: 'Customer Support Automation',
    client: 'Healthcare Provider',
    industry: 'Healthcare',
    problem: '2,000+ tickets/month, slow responses',
    solution: 'AI triage + auto-resolution',
    results: ['89% auto-resolved', '4hr avg response'],
    tools: ['Intercom', 'OpenAI', 'Zapier'],
    details: 'Intelligent ticket routing with context-aware responses...',
    wireframe: '/wireframes/case-4.svg'
  },
  {
    id: 5,
    title: 'Financial Reporting Suite',
    client: 'Accounting Firm',
    industry: 'Finance',
    problem: 'Monthly reports taking 60+ hours',
    solution: 'Automated data aggregation + insights',
    results: ['98% time saved', 'Zero errors'],
    tools: ['Python', 'Notion', 'QuickBooks'],
    details: 'Automated report generation with anomaly detection...',
    wireframe: '/wireframes/case-5.svg'
  }
];

export default function ExpandableUseCases() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Real Results, Real Businesses
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Select case studies showcasing AI automation impact across industries
        </p>
      </div>

      <div className="space-y-4">
        {useCases.map((useCase) => (
          <motion.div
            key={useCase.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/50 transition-all"
            onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
            layout
          >
            {/* Collapsed View */}
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {useCase.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {useCase.client} • {useCase.industry}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                  {useCase.results.map((result, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>
                <motion.div
                  animate={{ rotate: expandedId === useCase.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-white/10"
                >
                  <div className="p-6 grid md:grid-cols-2 gap-8">
                    {/* Left: Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          Challenge
                        </h4>
                        <p className="text-gray-300">{useCase.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          Solution
                        </h4>
                        <p className="text-gray-300">{useCase.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.tools.map((tool) => (
                            <span 
                              key={tool} 
                              className="px-3 py-1 bg-white/10 text-white text-sm rounded-lg border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm italic border-l-2 border-purple-500 pl-4">
                        {useCase.details}
                      </p>
                    </div>

                    {/* Right: Wireframe Preview */}
                    <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                      <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-dashed border-purple-500/30 flex items-center justify-center">
                            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="text-gray-500 text-sm">Wireframe visualization</p>
                          <p className="text-gray-600 text-xs mt-2">Protected - detailed view available upon request</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

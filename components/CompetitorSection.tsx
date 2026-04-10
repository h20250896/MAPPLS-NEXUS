'use client'

import { motion } from 'framer-motion'
import { competitorComparison, competitorRadarData, monetizationGap } from '../lib/data'
import CompetitorRadarChart from './charts/CompetitorRadarChart'
import GapBarChart from './charts/GapBarChart'

const specs = [
  { label: 'Revenue Model', key: 'revenueModel' },
  { label: 'Strengths', key: 'strengths' },
  { label: 'Weakness', key: 'weakness' },
  { label: 'Estimate', key: 'estimate' },
  { label: 'Mappls Differentiator', key: 'differentiator' }
]

export default function CompetitorSection() {
  return (
    <section id="competitors" className="bg-[#08102b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Market & Competitor Analysis</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">How Mappls beats alternatives with India-first depth</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">A comparison of global, ride, hyperlocal commerce and discovery platforms against the Mappls Nexus moat.</p>
        </motion.div>

        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="section-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">Radar comparison</h3>
            <p className="mt-3 text-sm text-mappls-muted">Mappls delivers balanced strength across India-specificity, B2B ecosystem, revenue diversity, and data depth.</p>
            <div className="mt-8 h-[360px]">
              <CompetitorRadarChart data={competitorRadarData} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <div className="section-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">Competitor matrix</h3>
              <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
                <table className="min-w-full divide-y divide-white/10 text-left text-sm text-mappls-muted">
                  <thead className="bg-mappls-dark/90 text-mappls-electric/80">
                    <tr>
                      <th className="px-4 py-4">Attribute</th>
                      {competitorComparison.map(item => (
                        <th key={item.name} className="px-4 py-4 font-semibold text-white">{item.name}</th>
                      ))}
                      <th className="px-4 py-4 font-semibold text-mappls-success">Mappls</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {specs.map(spec => (
                      <tr key={spec.label} className="bg-mappls-dark/80">
                        <td className="px-4 py-4 font-medium text-white">{spec.label}</td>
                        {competitorComparison.map(item => (
                          <td key={`${item.name}-${spec.label}`} className="px-4 py-4 text-sm text-mappls-muted">{item[spec.key as keyof typeof item]}</td>
                        ))}
                        <td className="px-4 py-4 text-sm text-mappls-success">India-sovereign data, govt trust, native navigation intent</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="section-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">Monetization gap analysis</h3>
              <p className="mt-3 text-sm text-mappls-muted">This chart summarizes the estimated revenue moat Mappls can capture compared to competing models.</p>
              <div className="mt-8 h-[320px]">
                <GapBarChart data={monetizationGap} />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 rounded-3xl border border-mappls-red/20 bg-mappls-navy/90 p-8 text-white shadow-2xl shadow-mappls-red/10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.9fr]">
            <div>
              <h3 className="text-2xl font-semibold">Strategic moat</h3>
              <p className="mt-3 text-sm text-mappls-muted">Mappls is anchored by layered advantages in data sovereignty, government credibility, local scale and merchant network.</p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-mappls-electric/10 text-center text-white">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-10 rounded-full border border-mappls-red/20" />
                <div className="absolute inset-20 rounded-full border border-mappls-navy/30" />
                <div className="absolute inset-28 rounded-full bg-mappls-red/90 px-4 py-3 text-xs font-semibold text-white">Mappls</div>
                <div className="absolute left-5 top-8 w-32 text-xs text-mappls-muted">Data Sovereignty</div>
                <div className="absolute right-5 top-16 w-32 text-xs text-mappls-muted">Govt Trust</div>
                <div className="absolute left-12 bottom-14 w-32 text-xs text-mappls-muted">POI Depth</div>
                <div className="absolute right-10 bottom-10 w-32 text-xs text-mappls-muted">Merchant Ecosystem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

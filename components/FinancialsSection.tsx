'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { costStructure, monthlyFinancials, scenarios, unitEconomics } from '../lib/data'
import RevenueRampBarChart from './charts/RevenueRampBarChart'
import CostPieChart from './charts/CostPieChart'

const formatCrore = (value: number) => `₹${value.toFixed(1)} Cr`

export default function FinancialsSection() {
  const [activeScenario, setActiveScenario] = useState(scenarios[1])
  const adjustedRevenue = useMemo(
    () => monthlyFinancials.map(item => ({ month: item.month, value: item.value * activeScenario.multiplier })),
    [activeScenario]
  )

  return (
    <section id="financials" className="bg-[#081022] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Financial Projections</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Base, pessimistic and optimistic revenue scenarios</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Dynamic projections, unit economics, and cost structure for the Mappls Nexus growth plan.</p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-mappls-dark/80 p-4 text-sm text-mappls-muted">
          <span className="font-semibold text-white">Scenario</span>
          <div className="flex flex-wrap gap-3">
            {scenarios.map(option => (
              <button
                key={option.id}
                onClick={() => setActiveScenario(option)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeScenario.id === option.id ? 'bg-mappls-red text-white' : 'bg-white/5 text-mappls-muted hover:bg-white/10'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <span className="rounded-full bg-mappls-navy/90 px-4 py-2 text-sm font-semibold text-mappls-electric">Year 1 total estimate: {formatCrore(adjustedRevenue.reduce((sum, item) => sum + item.value, 0))}</span>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="section-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">Monthly Revenue Ramp</h3>
            <p className="mt-3 text-sm text-mappls-muted">Projected cash flow leading to break-even in Month 9.</p>
            <div className="mt-8 h-[360px]">
              <RevenueRampBarChart data={adjustedRevenue} />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="section-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">Unit Economics</h3>
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-mappls-dark/90">
                <table className="min-w-full divide-y divide-white/10 text-left text-sm text-mappls-muted">
                  <thead className="bg-mappls-dark/80 text-mappls-electric/80">
                    <tr>
                      <th className="px-4 py-4">Product</th>
                      <th className="px-4 py-4">CAC</th>
                      <th className="px-4 py-4">LTV</th>
                      <th className="px-4 py-4">LTV:CAC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {unitEconomics.map(item => (
                      <tr key={item.product}>
                        <td className="px-4 py-4 text-white">{item.product}</td>
                        <td className="px-4 py-4">{item.cac}</td>
                        <td className="px-4 py-4">{item.ltv}</td>
                        <td className="px-4 py-4">{item.ratio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="section-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">Cost Breakdown</h3>
              <p className="mt-3 text-sm text-mappls-muted">Investment allocation for product, growth, operations and AI.</p>
              <div className="mt-8 h-[320px]">
                <CostPieChart data={costStructure} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

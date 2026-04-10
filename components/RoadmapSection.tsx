'use client'

import { motion } from 'framer-motion'
import { roadmapRows } from '../lib/data'

const monthHeaders = ['M1-2', 'M3-4', 'M5-6', 'M7-8', 'M9-10', 'M11-12']

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-[#081324] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">12-Month Implementation Roadmap</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Execution plan across product, sales, GovTech and finance</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">A monthly milestone matrix with department-level delivery for the launch and scale path.</p>
        </motion.div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-mappls-dark/80 p-4">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-mappls-muted">
            <thead>
              <tr className="border-b border-white/10 text-mappls-electric/80">
                <th className="px-4 py-4">Department</th>
                {monthHeaders.map(month => (
                  <th key={month} className="px-4 py-4">{month}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {roadmapRows.map(row => (
                <tr key={row.department} className="even:bg-white/5 odd:bg-mappls-dark/90">
                  <td className="px-4 py-4 font-medium text-white">{row.department}</td>
                  {row.items.map((item, index) => (
                    <td key={`${row.department}-${index}`} className="px-4 py-4 align-top">
                      <div className="mb-3 rounded-3xl border border-white/10 bg-mappls-navy/90 p-3 text-xs leading-6 text-mappls-muted">
                        {item}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex h-3 w-3 rounded-full ${index < 2 ? 'bg-mappls-success' : index < 4 ? 'bg-mappls-warning' : 'bg-mappls-red'}`}></span>
                        <span className="text-xs uppercase tracking-[0.35em] text-mappls-electric/80">{index < 2 ? 'On track' : index < 4 ? 'At risk' : 'Critical'}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

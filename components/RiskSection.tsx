'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { riskProfiles } from '../lib/data'
import RiskMatrix from './charts/RiskMatrix'

export default function RiskSection() {
  const [selectedRisk, setSelectedRisk] = useState(riskProfiles[0])

  return (
    <section id="risk" className="bg-[#091027] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Risk Analysis</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Risk matrix with mitigation planning</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Visualize critical business risks and the actions that keep the Mappls Nexus flywheel secure.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="section-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">Risk matrix</h3>
            <p className="mt-3 text-sm text-mappls-muted">Click each point to reveal the mitigation plan.</p>
            <div className="mt-8 h-[380px]">
              <RiskMatrix data={riskProfiles} onSelect={setSelectedRisk} selectedId={selectedRisk.id} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="section-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">Selected risk mitigation</h3>
            <div className="mt-6 rounded-3xl border border-mappls-red/20 bg-mappls-dark/90 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">{selectedRisk.title}</p>
              <div className="mt-4 grid gap-3 text-sm text-mappls-muted">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-white">Probability</p>
                  <p className="mt-1">{selectedRisk.probability}/10</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-white">Impact</p>
                  <p className="mt-1">{selectedRisk.impact}/10</p>
                </div>
                <div className="rounded-3xl bg-mappls-navy/90 p-4 text-mappls-muted">
                  <p className="font-semibold text-white">Mitigation</p>
                  <p className="mt-2">{selectedRisk.mitigation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

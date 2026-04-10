'use client'

import { motion } from 'framer-motion'
import { gtmPhases } from '../lib/data'

export default function GTMSection() {
  return (
    <section id="gtm" className="bg-[#0b1226] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Go-to-market Strategy</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">A phased launch for the Mappls Nexus flywheel</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">A focused rollout from pilots to national monetization with SME, Pro, and GovTech playbooks.</p>
        </motion.div>

        <div className="space-y-6">
          {gtmPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="section-card rounded-3xl border border-white/10 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-mappls-electric/80">{phase.months}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{phase.title}</h3>
                </div>
                <div className="rounded-full bg-mappls-red/10 px-4 py-2 text-sm font-semibold text-mappls-red">Milestone {index + 1}</div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {phase.bullets.map(item => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-mappls-dark/90 p-4 text-sm text-mappls-muted">
                    • {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

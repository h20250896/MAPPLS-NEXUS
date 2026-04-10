'use client'

import { motion } from 'framer-motion'
import { innovations } from '../lib/data'

export default function InnovationSection() {
  return (
    <section id="innovation" className="bg-[#08112b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Innovation Showcase</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Unique innovations that create a defensible market moat</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Three differentiated innovations that no competitor currently delivers in India.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {innovations.map(item => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="section-card rounded-3xl border border-white/10 p-6"
            >
              <div className="mb-5 h-24 rounded-3xl bg-gradient-to-br from-mappls-red via-mappls-electric to-mappls-navy p-4 text-white shadow-lg shadow-mappls-red/20">
                <p className="text-sm uppercase tracking-[0.35em]">Innovation</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-7 text-mappls-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-mappls-red/20 bg-mappls-navy/90 p-6 text-sm text-mappls-muted">
            <h3 className="text-xl font-semibold text-white">Intent Moment Advertising</h3>
            <p className="mt-4">Visualizes the trigger point where user navigation intent becomes an ad conversion signal.</p>
          </div>
          <div className="rounded-3xl border border-mappls-red/20 bg-mappls-navy/90 p-6 text-sm text-mappls-muted">
            <h3 className="text-xl font-semibold text-white">Bharat Data Sovereignty Moat</h3>
            <p className="mt-4">Highlights India-first data collection, localization and trust advantages over global players.</p>
          </div>
          <div className="rounded-3xl border border-mappls-red/20 bg-mappls-navy/90 p-6 text-sm text-mappls-muted">
            <h3 className="text-xl font-semibold text-white">Merchant Flywheel</h3>
            <p className="mt-4">Shows why more merchants mean stronger targeting and better ROI across all revenue pillars.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

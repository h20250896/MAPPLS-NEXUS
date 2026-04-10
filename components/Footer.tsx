'use client'

import { motion } from 'framer-motion'
import { footerSources } from '../lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#06101e] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-mappls-dark/80 p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Sources & citations</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Research-backed references for judges and investors</h2>
              <p className="mt-4 text-sm leading-7 text-mappls-muted">Data points are grounded in industry publications and credible market reports.</p>
            </div>
            <div className="space-y-3 text-sm text-mappls-muted">
              {footerSources.map(source => (
                <div key={source} className="rounded-2xl border border-white/10 bg-mappls-navy/80 p-4">
                  {source}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-xs text-mappls-muted">Built with Tailwind CSS, Recharts, Framer Motion, and Next.js App Router for a polished pitch delivery.</div>
        </motion.div>
      </div>
    </footer>
  )
}

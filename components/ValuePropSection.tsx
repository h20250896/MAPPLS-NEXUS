'use client'

import { motion } from 'framer-motion'
import { valueCanvas } from '../lib/data'

export default function ValuePropSection() {
  return (
    <section id="value" className="bg-[#081025] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Value Proposition</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">A value canvas built for active Indian users and enterprises</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Jobs, pains, gains and product-led outcomes linked to each segment.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {valueCanvas.map(item => (
            <motion.article
              key={item.segment}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="section-card rounded-3xl border border-white/10 p-6"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">{item.segment}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Jobs to be done</h3>
              <p className="mt-3 text-sm leading-7 text-mappls-muted">{item.job}</p>
              <div className="mt-6 space-y-4 text-sm text-mappls-muted">
                <div>
                  <p className="font-semibold text-white">Pain</p>
                  <p className="mt-1">{item.pain}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Gain</p>
                  <p className="mt-1">{item.gain}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Pain Reliever</p>
                  <p className="mt-1">{item.painReliever}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Gain Creator</p>
                  <p className="mt-1">{item.gainCreator}</p>
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-mappls-red/20 bg-mappls-dark/90 p-4 text-sm text-mappls-muted">
                <p className="font-semibold text-white">Product</p>
                <p className="mt-2">{item.product}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-mappls-electric/20 bg-mappls-dark/90 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-white">What does ₹10,000/month get an SME owner?</h3>
              <p className="mt-3 text-sm leading-7 text-mappls-muted">A side-by-side comparison of the old marketing world, Google Ads, and Mappls Pulse.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#051025] p-5 text-sm text-mappls-muted">
                <p className="font-semibold text-white">Old world</p>
                <p className="mt-3">Pamphlets: 2,000 pieces, 0 tracking, low attribution.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#051025] p-5 text-sm text-mappls-muted">
                <p className="font-semibold text-white">Google Ads</p>
                <p className="mt-3">National reach, limited hyperlocal intent, ₹8 CPC, weak store visit signal.</p>
              </div>
              <div className="rounded-3xl border border-mappls-red/20 bg-mappls-red/10 p-5 text-sm text-white">
                <p className="font-semibold">Mappls Pulse</p>
                <p className="mt-3">200 guaranteed hyperlocal leads, ₹50 CPL, navigation intent, competitor footfall insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

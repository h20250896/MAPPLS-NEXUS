'use client'

import { motion } from 'framer-motion'
import { problemCards, timelineSteps, pitchStats } from '../lib/data'

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-[#081024] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Problem Understanding</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Why Mappls needs a revenue-native ecosystem now</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">
            Mappls has strong market traction, but monetization is constrained by the need for ads to feel native and contextually relevant.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {problemCards.map(card => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="section-card rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-mappls-muted">{card.copy}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-mappls-dark/80 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Mappls evolution timeline</h3>
              <p className="mt-3 text-sm text-mappls-muted">A strategic journey from local mapping pioneer to an India-first revenue platform.</p>
              <div className="mt-8 space-y-6">
                {timelineSteps.map(step => (
                  <div key={step.year} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-mappls-red/10 text-sm font-semibold text-mappls-red">{step.year}</span>
                    <p className="text-sm leading-7 text-mappls-muted">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-mappls-electric/20 bg-mappls-navy/90 p-8 text-white shadow-lg shadow-mappls-electric/10">
              <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Market context</p>
              <p className="mt-4 text-3xl font-semibold">Google Maps earns estimated {pitchStats.googleRevenue}.</p>
              <p className="mt-4 text-sm leading-7 text-mappls-muted">Mappls' TAM share for India-specific location intelligence is ₹8,400 Cr with room to capture local SME and government revenue.</p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-mappls-red/80">Focused TAM</p>
                <p className="mt-3 text-2xl font-semibold">{pitchStats.mapplsTAMShare}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

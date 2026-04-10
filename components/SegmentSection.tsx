'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { personas, revenueShare } from '../lib/data'
import DonutRevenueChart from './charts/DonutRevenueChart'

export default function SegmentSection() {
  const [selected, setSelected] = useState(personas[0])

  return (
    <section id="segments" className="bg-[#0d1222] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">User Segments</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Five customer personas driving the Mappls Nexus story</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Interactive personas show how each revenue stream serves a different customer need.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.94fr_0.64fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {personas.map(persona => (
              <motion.button
                key={persona.id}
                onClick={() => setSelected(persona)}
                whileHover={{ y: -4 }}
                className={`section-card rounded-3xl border border-white/10 p-6 text-left transition ${selected.id === persona.id ? 'border-mappls-red/50 bg-mappls-red/10' : 'bg-mappls-dark/70 hover:bg-mappls-dark/90'}`}
              >
                <span className="text-xs uppercase tracking-[0.35em] text-mappls-electric/80">{persona.category}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{persona.title}</h3>
                <div className="mt-4 grid gap-2 text-sm text-mappls-muted">
                  <div><strong>Age:</strong> {persona.age}</div>
                  <div><strong>City:</strong> {persona.city}</div>
                  <div><strong>Pain:</strong> {persona.pain}</div>
                  <div><strong>WTP:</strong> {persona.wtp}</div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="section-card rounded-3xl border border-white/10 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Selected persona</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selected.title}</h3>
              </div>
              <span className="rounded-full bg-mappls-red/10 px-3 py-2 text-sm font-semibold text-mappls-red">{selected.value}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-mappls-muted">{selected.category} with a clear value path through the Mappls Nexus ecosystem.</p>
            <div className="mt-8 h-[360px]">
              <DonutRevenueChart data={revenueShare} />
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-mappls-dark/80 p-4 text-sm text-mappls-muted">
              <p className="font-semibold text-white">Revenue contribution</p>
              <p className="mt-2">Pulse Ads: 42%, Pro Subscriptions: 28%, Fleet Pro: 18%, Data API: 12%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

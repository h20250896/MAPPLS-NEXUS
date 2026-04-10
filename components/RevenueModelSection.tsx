'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { revenuePillars, revenueStackData } from '../lib/data'
import RevenueStackedAreaChart from './charts/RevenueStackedAreaChart'

export default function RevenueModelSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="revenue" className="bg-[#09122d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Revenue Model</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">The Mappls Nexus revenue engine</h2>
          <p className="mt-4 text-base leading-8 text-mappls-muted">Three pillars, one stack: Pulse ads, premium subscription, and sovereign data API.</p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.9fr_0.65fr]">
          <div className="space-y-5">
            {revenuePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className={`section-card rounded-3xl border ${activeIndex === index ? 'border-mappls-red/40 bg-mappls-red/10' : 'border-white/10 bg-mappls-dark/70'} p-6 transition`}
              >
                <button type="button" onClick={() => setActiveIndex(index)} className="w-full text-left">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">{pillar.subtitle}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <div className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase text-mappls-muted">{activeIndex === index ? 'Expanded' : 'Show details'}</div>
                  </div>
                </button>
                {activeIndex === index ? (
                  <div className="mt-6 space-y-4 text-sm text-mappls-muted">
                    <p>{pillar.copy}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {pillar.bullets.map(item => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-mappls-dark/80 p-4">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 rounded-3xl border border-mappls-red/20 bg-mappls-dark/90 p-4">
                      {pillar.tiers.map(plan => (
                        <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <h4 className="font-semibold text-white">{plan.name} — {plan.price}</h4>
                          <p className="mt-1 text-sm text-mappls-muted">{plan.details}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-3xl border border-mappls-electric/20 bg-mappls-navy/90 p-4 text-sm text-mappls-muted">
                      {pillar.metrics.map(metric => (
                        <p key={metric} className="mt-3 leading-7">• {metric}</p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="section-card rounded-3xl p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">12-month revenue stack</h3>
                  <p className="mt-2 text-sm text-mappls-muted">Stacked monthly revenue ramp across the three core pillars.</p>
                </div>
              </div>
              <div className="mt-8 h-[340px]">
                <RevenueStackedAreaChart data={revenueStackData} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="section-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">Live demo simulation</h3>
              <p className="mt-3 text-sm text-mappls-muted">A storytelling mockup showing a route, a pulse ad trigger point and Merchant OS notification.</p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-mappls-dark/90 p-5">
                <div className="relative h-72 overflow-hidden rounded-3xl border border-mappls-red/20 bg-[#04102a] p-5 sm:p-6">
                  <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-mappls-electric shadow-[0_0_15px_rgba(0,201,255,0.45)]" />
                  <div className="absolute left-14 top-14 h-2 w-24 rounded-full bg-mappls-electric/30" />
                  <div className="absolute left-14 top-20 h-2 w-32 rounded-full bg-mappls-electric/20" />
                  <div className="absolute left-10 top-24 h-40 w-1 rounded-full bg-mappls-red/40" />
                  <div className="absolute left-10 top-64 h-1 w-40 rounded-full bg-mappls-electric/20" />
                  <div className="absolute left-12 top-80 h-1 w-32 rounded-full bg-mappls-electric/20" />
                  <div className="absolute left-18 top-14 h-5 w-5 rounded-full bg-mappls-red shadow-[0_0_20px_rgba(232,41,43,0.35)]" />
                  <div className="absolute left-56 top-40 h-48 w-48 rounded-full bg-mappls-electric/10 blur-2xl" />
                  <div className="absolute right-5 top-6 w-48 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-mappls-muted">
                    <p className="font-semibold text-white">Merchant OS</p>
                    <p className="mt-3">New campaign trigger: <span className="font-semibold text-mappls-red">Pulse Ad</span></p>
                    <p className="mt-2">Target radius: 1.2 km • Intent: nearby mall navigation</p>
                  </div>
                  <div className="absolute bottom-6 left-6 w-80 rounded-3xl border border-mappls-electric/20 bg-mappls-navy/95 p-4 text-white shadow-lg shadow-mappls-electric/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Route event</p>
                    <p className="mt-3 text-lg font-semibold">User approaching trigger point</p>
                    <p className="mt-2 text-sm text-mappls-muted">A native map card appears when the route intercepts the merchant POI.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { kpiCards } from '../lib/data'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,41,43,0.24),_transparent_28%),linear-gradient(180deg,_rgba(0,48,135,0.24),_rgba(10,15,30,0.85))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-full border border-mappls-red/40 bg-mappls-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-mappls-red">
              MAPPLS NEXUS
            </span>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              India’s First Hyperlocal Revenue Intelligence Ecosystem
            </h1>
            <p className="max-w-2xl text-base leading-8 text-mappls-muted sm:text-lg">
              A business case dashboard built for Mappls App — unlocking revenue with intent-driven ads, consumer subscriptions, and sovereign mobility data.
            </p>
            <button
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full bg-mappls-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-mappls-red/20 transition hover:bg-mappls-red/90"
            >
              Start Exploring
              <span aria-hidden="true">→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {kpiCards.map(item => (
              <div key={item.label} className="section-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">{item.label}</p>
                <span className="mt-4 block text-3xl font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

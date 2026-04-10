'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sparkles } from 'lucide-react'
import { navItems, type SectionId } from '../lib/data'

interface NavbarProps {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
  hackathonMode: boolean
  setHackathonMode: (value: boolean) => void
}

export default function Navbar({ activeSection, onNavigate, hackathonMode, setHackathonMode }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar sticky top-0 z-50 border-b border-white/10 bg-mappls-dark/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-mappls-red/20 bg-mappls-red/10">
            <span className="text-lg font-black text-mappls-red">M</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-mappls-electric/75">MAPPLS NEXUS</p>
            <p className="text-sm font-semibold text-white/90">Business Case Dashboard</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${activeSection === item.id ? 'bg-mappls-red text-white' : 'text-mappls-muted hover:bg-white/5 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setHackathonMode(!hackathonMode)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            {hackathonMode ? <Sparkles className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {hackathonMode ? 'Presentation Mode' : 'Dashboard Mode'}
          </button>
          <button className="md:hidden" onClick={() => setOpen(prev => !prev)}>
            {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-mappls-dark/95 px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setOpen(false)
                }}
                className={`block rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${activeSection === item.id ? 'bg-mappls-red text-white' : 'bg-white/5 text-mappls-muted hover:bg-white/10 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

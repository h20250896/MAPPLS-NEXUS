'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Download, LayoutDashboard } from 'lucide-react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import CompetitorSection from '../components/CompetitorSection'
import SegmentSection from '../components/SegmentSection'
import RevenueModelSection from '../components/RevenueModelSection'
import ValuePropSection from '../components/ValuePropSection'
import GTMSection from '../components/GTMSection'
import RoadmapSection from '../components/RoadmapSection'
import FinancialsSection from '../components/FinancialsSection'
import RiskSection from '../components/RiskSection'
import InnovationSection from '../components/InnovationSection'
import Footer from '../components/Footer'
import { navItems } from '../lib/data'
import type { SectionId } from '../lib/data'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [hackathonMode, setHackathonMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const homeRef = useRef<HTMLElement>(null)
  const problemRef = useRef<HTMLElement>(null)
  const competitorsRef = useRef<HTMLElement>(null)
  const segmentsRef = useRef<HTMLElement>(null)
  const revenueRef = useRef<HTMLElement>(null)
  const valueRef = useRef<HTMLElement>(null)
  const gtmRef = useRef<HTMLElement>(null)
  const roadmapRef = useRef<HTMLElement>(null)
  const financialsRef = useRef<HTMLElement>(null)
  const riskRef = useRef<HTMLElement>(null)
  const innovationRef = useRef<HTMLElement>(null)

  const sectionRefs = {
    home: homeRef,
    problem: problemRef,
    competitors: competitorsRef,
    segments: segmentsRef,
    revenue: revenueRef,
    value: valueRef,
    gtm: gtmRef,
    roadmap: roadmapRef,
    financials: financialsRef,
    risk: riskRef,
    innovation: innovationRef
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section') as SectionId
            if (section) setActiveSection(section)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.2 }
    )

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
        document.body.classList.add('print-friendly')
        setTimeout(() => {
          window.print()
          document.body.classList.remove('print-friendly')
        }, 200)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const scrollToSection = (id: SectionId) => {
    const ref = sectionRefs[id]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const slides = [
    { label: 'Executive Summary', content: <HeroSection /> },
    { label: 'Problem Understanding', content: <ProblemSection /> },
    { label: 'Market Analysis', content: <CompetitorSection /> },
    { label: 'User Segments', content: <SegmentSection /> },
    { label: 'Revenue Model', content: <RevenueModelSection /> },
    { label: 'Value Proposition', content: <ValuePropSection /> },
    { label: 'Go-to-market Strategy', content: <GTMSection /> },
    { label: '12-month Roadmap', content: <RoadmapSection /> },
    { label: 'Financial Projections', content: <FinancialsSection /> },
    { label: 'Risk Analysis', content: <RiskSection /> },
    { label: 'Innovation Showcase', content: <InnovationSection /> }
  ]

  const moveSlide = (delta: number) => {
    setCurrentSlide(prev => Math.max(0, Math.min(slides.length - 1, prev + delta)))
  }

  const handlePrint = () => {
    document.body.classList.add('print-friendly')
    setTimeout(() => {
      window.print()
      document.body.classList.remove('print-friendly')
    }, 150)
  }

  return (
    <main className="relative overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        hackathonMode={hackathonMode}
        setHackathonMode={setHackathonMode}
      />
      <div className="sticky top-0 z-40 bg-mappls-dark/90 backdrop-blur-xl border-b border-white/10 no-print">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-mappls-red">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-4 w-4" />
            <span>{activeSection.toUpperCase().replace(/_/g, ' ')}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full border border-mappls-red/30 bg-mappls-red/10 px-4 py-2 text-white transition hover:bg-mappls-red/20"
            >
              <Download className="h-4 w-4" />
              Download as PDF
            </button>
          </div>
        </div>
      </div>

      {hackathonMode ? (
        <section className="min-h-screen bg-mappls-dark px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-mappls-surface/90 p-6 shadow-2xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-mappls-electric/80">Hackathon Slide Mode</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Slide-by-slide pitch view</h1>
                <p className="max-w-2xl text-sm text-mappls-muted">Use this mode for a clean 10-minute story flow. Next and previous buttons navigate slide sections.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${currentSlide === index ? 'bg-mappls-red text-white' : 'bg-white/5 text-mappls-electric hover:bg-white/10'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-mappls-red/20 bg-mappls-dark/80 p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{slides[currentSlide].label}</h2>
                  <p className="text-sm text-mappls-muted">Slide {currentSlide + 1} of {slides.length}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => moveSlide(-1)}
                    disabled={currentSlide === 0}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => moveSlide(1)}
                    disabled={currentSlide === slides.length - 1}
                    className="rounded-full border border-white/10 bg-mappls-red px-4 py-2 text-sm text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="space-y-6">{slides[currentSlide].content}</div>
            </div>
          </div>
        </section>
      ) : (
        <div className="space-y-24">
          <section ref={sectionRefs.home} data-section="home">
            <HeroSection />
          </section>
          <section ref={sectionRefs.problem} data-section="problem">
            <ProblemSection />
          </section>
          <section ref={sectionRefs.competitors} data-section="competitors">
            <CompetitorSection />
          </section>
          <section ref={sectionRefs.segments} data-section="segments">
            <SegmentSection />
          </section>
          <section ref={sectionRefs.revenue} data-section="revenue">
            <RevenueModelSection />
          </section>
          <section ref={sectionRefs.value} data-section="value">
            <ValuePropSection />
          </section>
          <section ref={sectionRefs.gtm} data-section="gtm">
            <GTMSection />
          </section>
          <section ref={sectionRefs.roadmap} data-section="roadmap">
            <RoadmapSection />
          </section>
          <section ref={sectionRefs.financials} data-section="financials">
            <FinancialsSection />
          </section>
          <section ref={sectionRefs.risk} data-section="risk">
            <RiskSection />
          </section>
          <section ref={sectionRefs.innovation} data-section="innovation">
            <InnovationSection />
          </section>
          <Footer />
        </div>
      )}
    </main>
  )
}

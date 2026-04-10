export type SectionId =
  | 'home'
  | 'problem'
  | 'competitors'
  | 'segments'
  | 'revenue'
  | 'value'
  | 'gtm'
  | 'roadmap'
  | 'financials'
  | 'risk'
  | 'innovation'

export const navItems: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'HOME / EXECUTIVE SUMMARY' },
  { id: 'problem', label: 'PROBLEM UNDERSTANDING' },
  { id: 'competitors', label: 'MARKET & COMPETITOR ANALYSIS' },
  { id: 'segments', label: 'USER SEGMENTS' },
  { id: 'revenue', label: 'REVENUE MODEL' },
  { id: 'value', label: 'VALUE PROPOSITION' },
  { id: 'gtm', label: 'GO-TO-MARKET STRATEGY' },
  { id: 'roadmap', label: '12-MONTH ROADMAP' },
  { id: 'financials', label: 'FINANCIAL PROJECTIONS' },
  { id: 'risk', label: 'RISK ANALYSIS' },
  { id: 'innovation', label: 'INNOVATION SHOWCASE' }
]

export const kpiCards = [
  { label: 'Total Addressable Market', value: '₹8,400 Cr' },
  { label: 'Projected Year-1 Revenue', value: '₹127 Cr' },
  { label: 'Target Paying Users', value: '4.2M' },
  { label: 'Break-even Month', value: 'Month 9' }
]

export const problemCards = [
  {
    title: 'The Gap',
    copy: "Mappls has 10M+ users but <3% revenue conversion vs Google Maps' robust ad ecosystem"
  },
  {
    title: 'The Opportunity',
    copy: "India's digital ad market is ₹33,000 Cr growing at 32% YoY. Location-based ads are only 12% of that — massively underserved"
  },
  {
    title: 'The Constraint',
    copy: 'Cannot disrupt UX. Any revenue model must feel native, not intrusive'
  }
]

export const timelineSteps = [
  { year: '2004', label: 'MapmyIndia founded, local mapping begins' },
  { year: '2015', label: 'Data moat expands with POI, traffic, regional coverage' },
  { year: '2023', label: 'Mappls launched as India-first navigation & location platform' }
]

export const competitorDimensions = [
  'Scale',
  'Data Depth',
  'Revenue Diversity',
  'UX Quality',
  'B2B Ecosystem',
  'India-Specificity'
]

export const competitorRadarData = [
  { name: 'Google Maps', Scale: 10, 'Data Depth': 8, 'Revenue Diversity': 10, 'UX Quality': 10, 'B2B Ecosystem': 8, 'India-Specificity': 4 },
  { name: 'Ola Maps', Scale: 6, 'Data Depth': 5, 'Revenue Diversity': 6, 'UX Quality': 6, 'B2B Ecosystem': 5, 'India-Specificity': 6 },
  { name: 'Zomato/Swiggy', Scale: 8, 'Data Depth': 7, 'Revenue Diversity': 7, 'UX Quality': 7, 'B2B Ecosystem': 6, 'India-Specificity': 7 },
  { name: 'MagicPin', Scale: 5, 'Data Depth': 4, 'Revenue Diversity': 6, 'UX Quality': 5, 'B2B Ecosystem': 6, 'India-Specificity': 6 },
  { name: 'Mappls', Scale: 7, 'Data Depth': 10, 'Revenue Diversity': 9, 'UX Quality': 8, 'B2B Ecosystem': 9, 'India-Specificity': 10 }
]

export const competitorComparison = [
  {
    name: 'Google Maps',
    revenueModel: 'Advertising, API licensing, Google One integration',
    strengths: 'Global scale, AI superiority, ecosystem lock-in',
    weakness: 'Privacy concerns, no India-first data depth, no govt trust',
    estimate: '$11B globally',
    differentiator: 'India-sovereign data, govt partnerships, Bharat-depth POIs'
  },
  {
    name: 'Ola Maps',
    revenueModel: 'Ride-hailing integration, API sales to startups',
    strengths: 'Captive ride user base, cheap API pricing',
    weakness: 'No consumer brand, limited POI database, no B2C subscription',
    estimate: 'Early-stage launch',
    differentiator: '20-year data moat, 10M+ consumer users, GovTech credibility'
  },
  {
    name: 'Zomato/Swiggy',
    revenueModel: 'Commission, ads, subscriptions',
    strengths: 'Massive F&B intent data, subscription proven in India',
    weakness: 'Vertical-only, no navigation layer',
    estimate: '₹20,000 Cr+ commerce business',
    differentiator: 'Cross-vertical location intent (not just food), navigation-native'
  },
  {
    name: 'MagicPin',
    revenueModel: 'Merchant subscriptions, cashback-driven traffic, brand campaigns',
    strengths: 'Proven merchant monetization in India, loyalty mechanics',
    weakness: 'No maps/navigation, low brand recall nationally',
    estimate: '₹350 Cr domestic run-rate',
    differentiator: 'Navigation context = highest purchase intent moment'
  }
]

export const monetizationGap = [
  { name: 'Google Maps', gap: 85 },
  { name: 'Ola Maps', gap: 56 },
  { name: 'Zomato/Swiggy', gap: 42 },
  { name: 'MagicPin', gap: 68 }
]

export const personas = [
  {
    id: 'commuter',
    title: 'The Daily Commuter',
    category: 'B2C — Mappls Pro subscriber',
    age: '24-38',
    city: 'Tier 1 & 2',
    pain: 'Traffic, fuel costs, parking',
    wtp: '₹99-199/month',
    value: 'Time saved, stress reduced',
    color: 'from-mappls-red'
  },
  {
    id: 'sme',
    title: 'The SME Owner',
    category: 'B2B — Pulse Advertiser',
    age: 'N/A',
    city: 'Urban + high-footfall zones',
    pain: 'No affordable hyperlocal digital marketing tool',
    wtp: '₹3,000-15,000/month ad spend',
    value: 'Footfall, leads, visibility',
    color: 'from-mappls-electric'
  },
  {
    id: 'fleet',
    title: 'The Logistics Fleet Manager',
    category: 'B2B — Pro Fleet',
    age: '30-50',
    city: 'Pan-India',
    pain: 'No affordable Indian fleet tracking',
    wtp: '₹299/vehicle/month',
    value: 'Fuel savings, driver accountability',
    color: 'from-mappls-navy'
  },
  {
    id: 'planner',
    title: 'The City Planner / Municipal Officer',
    category: 'B2G — Data API',
    age: '35-55',
    city: 'Smart city agencies',
    pain: 'No real-time granular mobility data for smart city decisions',
    wtp: '₹1L-5L/month',
    value: 'Evidence-based urban planning',
    color: 'from-mappls-success'
  },
  {
    id: 'traveler',
    title: 'The Bharat Traveler',
    category: 'B2C — Pro + Commerce',
    age: '28-45',
    city: 'Non-metro India',
    pain: 'Poor offline maps, no Hindi/regional navigation',
    wtp: '₹799/year',
    value: 'Reliable navigation in India’s hinterland',
    color: 'from-mappls-warning'
  }
]

export const revenueShare = [
  { name: 'Pulse Ads (SMEs)', value: 42, color: '#E8292B' },
  { name: 'Pro Subscriptions (B2C)', value: 28, color: '#003087' },
  { name: 'Fleet Pro (B2B)', value: 18, color: '#00D97E' },
  { name: 'Data API (B2G)', value: 12, color: '#00C9FF' }
]

export const revenuePillars = [
  {
    title: 'Mappls Pulse',
    subtitle: 'Hyperlocal Intelligence Advertising',
    copy: 'Native intent-triggered map cards that convert nearby shoppers into store visits, calls, and route actions.',
    bullets: [
      'SME signs up on Merchant OS free',
      'Defines radius, intent, offer and budget',
      'Ad appears at the exact navigation intent moment',
      'Merchant pays only for clicks/calls/navigation'
    ],
    tiers: [
      { name: 'Starter', price: '₹3,000/month', details: '50 leads guaranteed' },
      { name: 'Growth', price: '₹10,000/month', details: '200 leads + analytics dashboard' },
      { name: 'Scale', price: '₹25,000/month', details: '500 leads + competitor footfall data + priority listing' }
    ],
    metrics: [
      '50,000 SME advertisers by Month 12',
      'Avg spend: ₹8,000/month',
      'Monthly revenue: ₹40 Cr/month by Month 12',
      'Year 1 total: ₹~156 Cr (ramp from Month 3)'
    ]
  },
  {
    title: 'Mappls Pro',
    subtitle: 'Freemium Subscription for Power Users',
    copy: 'Premium navigation tools, offline maps, AI trip planning, and travel cost intelligence for modern Indian commuters.',
    bullets: [
      'Offline HD maps',
      'AI trip planner',
      'Real-time fuel price tracker',
      'Toll cost predictor and parking finder',
      'Travel expense logger and ad-free experience'
    ],
    tiers: [
      { name: 'Pro', price: '₹99/month', details: 'Full premium feature set for individuals' },
      { name: 'Pro Fleet', price: '₹299/vehicle/month', details: 'Live tracking, geofencing, driver scoring, ERPs' }
    ],
    metrics: [
      '10M users → 15% try Pro trial → 40% convert = 600K subscribers',
      'Fleet: 500 companies × 45 vehicles = ₹6.7 Cr/month',
      'B2C: 600K × ₹99 = ₹59.4 Cr/month by Year 1 end'
    ]
  },
  {
    title: 'Data Intelligence API',
    subtitle: 'GovTech & Data Revenue Platform',
    copy: 'Sell anonymized mobility, footfall, and risk data to government, real estate, FMCG, and insurance customers.',
    bullets: [
      'Footfall Heatmaps API',
      'Mobility Flow API',
      'Commercial Site Intelligence',
      'Risk Zone API for underwriting'
    ],
    tiers: [
      { name: 'Core', price: '₹25K/month', details: 'Basic aggregated dashboards' },
      { name: 'Growth', price: '₹1.5L/month', details: 'Real-time mobility feeds and heatmaps' },
      { name: 'Enterprise', price: '₹5L/month', details: 'Custom insights, API contracts, smart city support' }
    ],
    metrics: [
      'Customers: NITI Aayog, Smart City SPVs, real estate developers, insurance companies',
      'Target: 200 enterprise clients by Month 12',
      'Revenue: ₹15 Cr/month by Month 12'
    ]
  }
]

export const revenueStackData = [
  { month: 'M1', pulse: 1, pro: 0.8, api: 0.2 },
  { month: 'M2', pulse: 2.5, pro: 1.5, api: 0.5 },
  { month: 'M3', pulse: 5.5, pro: 3, api: 1 },
  { month: 'M4', pulse: 8.5, pro: 5.5, api: 1.5 },
  { month: 'M5', pulse: 12.5, pro: 8, api: 2 },
  { month: 'M6', pulse: 17.5, pro: 11, api: 3 },
  { month: 'M7', pulse: 23, pro: 14, api: 4 },
  { month: 'M8', pulse: 29, pro: 17, api: 5 },
  { month: 'M9', pulse: 36, pro: 21, api: 6 },
  { month: 'M10', pulse: 44, pro: 25, api: 6.5 },
  { month: 'M11', pulse: 53, pro: 30, api: 7.5 },
  { month: 'M12', pulse: 60, pro: 34, api: 8.5 }
]

export const valueCanvas = [
  {
    segment: 'SME Owner',
    job: 'Acquire nearby customers with measurable ROI',
    pain: 'Untracked local marketing spend',
    gain: 'Higher footfall, lead conversions, attribution',
    painReliever: 'Native map ads only when intent is highest',
    gainCreator: 'Guaranteed leads, competitor footfall signals',
    product: 'Mappls Pulse with Merchant OS'
  },
  {
    segment: 'Daily Commuter',
    job: 'Navigate faster and reduce costs daily',
    pain: 'Traffic uncertainty, high fuel bills',
    gain: 'Faster arrival, lower commuting stress',
    painReliever: 'AI route planning and toll prediction',
    gainCreator: 'Offline HD maps and real-time fuel updates',
    product: 'Mappls Pro'
  },
  {
    segment: 'City Planner',
    job: 'Plan infrastructure with real-time mobility data',
    pain: 'Lack of granular city movement intelligence',
    gain: 'Evidence-based decisions for smart city rollout',
    painReliever: 'Aggregated flow and footfall APIs',
    gainCreator: 'Heatmaps and risk zone insights',
    product: 'Data Intelligence API'
  }
]

export const gtmPhases = [
  {
    title: 'Phase 1: Foundation',
    months: 'M1-M3',
    bullets: [
      'Launch Merchant OS in 5 pilot cities',
      'Onboard 1,000 pilot SMEs for free',
      'Launch Mappls Pro beta for power users',
      'Direct sales team + local business partnerships'
    ]
  },
  {
    title: 'Phase 2: Scale',
    months: 'M4-M8',
    bullets: [
      'Expand to 25 cities',
      'Launch self-serve Merchant OS',
      'Performance marketing to drive Pro',
      'Telecom bundling pilots with Jio and Airtel'
    ]
  },
  {
    title: 'Phase 3: Monetization Flywheel',
    months: 'M9-M12',
    bullets: [
      '50+ cities live',
      'Launch Mappls Commerce booking flows',
      'Data API commercial contracts signed',
      'IPO-readiness narrative across revenue streams'
    ]
  }
]

export const roadmapRows = [
  {
    department: 'Product',
    items: [
      'Merchant OS MVP',
      'Public Pro launch',
      'Self-serve ad platform',
      'AI intent engine v2',
      'Data API pricing launch',
      'Full flywheel product polish'
    ]
  },
  {
    department: 'Engineering',
    items: [
      'Payment gateway integration',
      'Merchant onboarding flow',
      'Fleet tracking backend',
      'Smart targeting infrastructure',
      'API scale readiness',
      'Regional language UI'
    ]
  },
  {
    department: 'Sales',
    items: [
      '50 city reps hired',
      'SME onboarding target 5,000',
      'Fleet enterprise sales',
      'Telecom partner enablement',
      '50-city rollout',
      'Regional city expansion'
    ]
  },
  {
    department: 'Marketing',
    items: [
      'Pilot city launch campaigns',
      'Digital acquisition for Pro',
      'Merchant growth programs',
      'Smart city outreach',
      'Commerce launch marketing',
      'Tier 2/3 regional campaigns'
    ]
  },
  {
    department: 'GovTech',
    items: [
      'DPDP privacy framework',
      'Smart City pilot design',
      'Data API alpha clients',
      'Gov outreach for pricing',
      'Commercial smart city contracts',
      'Policy & compliance scaling'
    ]
  },
  {
    department: 'Finance',
    items: [
      'Budget for pilot incentives',
      'Revenue forecasting',
      'CAC / LTV tracking',
      'Monetization KPI scorecards',
      'Break-even tracking',
      'IPO readiness modeling'
    ]
  }
]

export const monthlyFinancials = [
  { month: 'M1', value: 0.5 },
  { month: 'M2', value: 1.2 },
  { month: 'M3', value: 3.8 },
  { month: 'M4', value: 7.5 },
  { month: 'M5', value: 12 },
  { month: 'M6', value: 18 },
  { month: 'M7', value: 25 },
  { month: 'M8', value: 34 },
  { month: 'M9', value: 45 },
  { month: 'M10', value: 58 },
  { month: 'M11', value: 72 },
  { month: 'M12', value: 89 }
]

export const scenarios = [
  { id: 'pessimistic', label: 'Pessimistic', multiplier: 0.5 },
  { id: 'base', label: 'Base', multiplier: 1 },
  { id: 'optimistic', label: 'Optimistic', multiplier: 1.5 }
]

export const unitEconomics = [
  { product: 'Pulse Ads', cac: '₹2,500', ltv: '₹96,000', ratio: '38x' },
  { product: 'Pro B2C', cac: '₹120', ltv: '₹3,564', ratio: '29x' },
  { product: 'Fleet Pro', cac: '₹8,000', ltv: '₹1,07,640', ratio: '13x' },
  { product: 'Data API', cac: '₹50,000', ltv: '₹18,00,000', ratio: '36x' }
]

export const costStructure = [
  { name: 'Engineering & Product', value: 30, color: '#00C9FF' },
  { name: 'Sales & Marketing', value: 35, color: '#E8292B' },
  { name: 'Infrastructure', value: 15, color: '#003087' },
  { name: 'G&A', value: 10, color: '#F6C343' },
  { name: 'Data Science/AI', value: 10, color: '#00D97E' }
]

export const riskProfiles = [
  {
    id: 'sme-adoption',
    title: 'SME adoption slower than expected',
    probability: 6,
    impact: 9,
    mitigation: 'Free 3-month trial, guaranteed lead model, dedicated onboarding support'
  },
  {
    id: 'google-competition',
    title: 'Google Maps offers competing SME product',
    probability: 4,
    impact: 9,
    mitigation: 'Sovereign data advantage, govt relationships, India-depth POIs'
  },
  {
    id: 'dpdp-change',
    title: 'DPDP Act compliance requirements change',
    probability: 6,
    impact: 6,
    mitigation: 'Privacy-by-design architecture, legal advisory retained from Day 1, data anonymization pipeline'
  },
  {
    id: 'pro-churn',
    title: 'User churn from Pro subscription',
    probability: 6,
    impact: 6,
    mitigation: 'Feature-gating strategy, 3-month free trial with telecom bundle, annual plan discount'
  },
  {
    id: 'free-to-pro',
    title: 'Low conversion from free to Pro',
    probability: 6,
    impact: 9,
    mitigation: 'Freemium design ensures Pro features are indispensable for Bharat reliability'
  },
  {
    id: 'ola-pricing',
    title: 'Ola Maps undercuts API pricing',
    probability: 4,
    impact: 6,
    mitigation: '20-year data depth moat, government credibility, Tier 2/3 accuracy advantage'
  }
]

export const innovations = [
  {
    title: 'INTENT MOMENT ADVERTISING',
    subtitle: 'Native map ads triggered by real navigation intent.',
    description: 'Unlike competitors focused on demographics, Mappls Pulse activates when users are en route to a destination with the highest purchase probability.'
  },
  {
    title: 'BHARAT DATA SOVEREIGNTY MOAT',
    subtitle: 'A legal and tactical advantage for India-first data.',
    description: '20 years of local POI mapping, rural coverage, and regional-language data that foreign platforms cannot replicate under Indian localization norms.'
  },
  {
    title: 'THE MERCHANT FLYWHEEL',
    subtitle: 'A self-reinforcing ecosystem of merchants and intent inventory.',
    description: 'More merchants drive better inventory, better targeting, better ROI, and stronger retention for all three revenue pillars.'
  }
]

export const footerSources = [
  'IAMAI Digital Advertising Report 2024',
  'MapmyIndia Annual Report 2023-24',
  'Statista India Maps market data',
  'NITI Aayog Smart Cities data'
]

export const sectionsSummary = [
  { id: 'home', title: 'Executive Summary' },
  { id: 'problem', title: 'Problem Understanding' },
  { id: 'competitors', title: 'Market & Competitor Analysis' },
  { id: 'segments', title: 'User Segments' },
  { id: 'revenue', title: 'Revenue Model' },
  { id: 'value', title: 'Value Proposition' },
  { id: 'gtm', title: 'Go-to-market Strategy' },
  { id: 'roadmap', title: '12-month Roadmap' },
  { id: 'financials', title: 'Financial Projections' },
  { id: 'risk', title: 'Risk Analysis' },
  { id: 'innovation', title: 'Innovation Showcase' }
]

export function formatCurrency(value: number) {
  const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
  return formatter.format(value * 10000000)
}

export const pitchStats = {
  yearOneTotal: '₹366 Cr',
  mapplsTAMShare: '₹8,400 Cr',
  googleRevenue: '$11B/year'
}

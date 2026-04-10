'use client'

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type RevenuePoint = { month: string; pulse: number; pro: number; api: number }

interface Props {
  data: RevenuePoint[]
}

export default function RevenueStackedAreaChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -8, bottom: 0 }}>
        <defs>
          <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E8292B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#E8292B" stopOpacity={0.15} />
          </linearGradient>
          <linearGradient id="proGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#003087" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#003087" stopOpacity={0.15} />
          </linearGradient>
          <linearGradient id="apiGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00D97E" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00D97E" stopOpacity={0.15} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
        <XAxis dataKey="month" tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} formatter={(value: number) => [`₹${value} Cr`, 'Revenue']} />
        <Legend wrapperStyle={{ color: '#A8B7D3' }} />
        <Area type="monotone" dataKey="pulse" stackId="1" stroke="#E8292B" fill="url(#pulseGrad)" />
        <Area type="monotone" dataKey="pro" stackId="1" stroke="#003087" fill="url(#proGrad)" />
        <Area type="monotone" dataKey="api" stackId="1" stroke="#00D97E" fill="url(#apiGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

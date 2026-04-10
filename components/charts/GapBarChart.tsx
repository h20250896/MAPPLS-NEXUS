'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type GapPoint = { name: string; gap: number }

interface Props {
  data: GapPoint[]
}

export default function GapBarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} formatter={(value: number) => [`${value}% gap`, 'Monetization gap']} />
        <Bar dataKey="gap" fill="#E8292B" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

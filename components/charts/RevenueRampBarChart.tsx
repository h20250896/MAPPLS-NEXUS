'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type DataPoint = { month: string; value: number }

interface Props {
  data: DataPoint[]
}

export default function RevenueRampBarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
        <XAxis dataKey="month" tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} formatter={(value: number) => [`₹${value} Cr`, 'Revenue']} />
        <Bar dataKey="value" fill="#00C9FF" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

'use client'

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts'

type Segment = { name: string; value: number; color: string }

interface Props {
  data: Segment[]
}

export default function DonutRevenueChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} formatter={(value: number) => [`${value}%`, 'Revenue share']} />
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={100} paddingAngle={3} stroke="transparent">
          {data.map(entry => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

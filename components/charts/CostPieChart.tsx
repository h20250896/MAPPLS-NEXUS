'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

type CostSlice = { name: string; value: number; color: string }

interface Props {
  data: CostSlice[]
}

export default function CostPieChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} formatter={(value: number) => [`${value}%`, 'Cost share']} />
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={110} stroke="transparent">
          {data.map(slice => (
            <Cell key={slice.name} fill={slice.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

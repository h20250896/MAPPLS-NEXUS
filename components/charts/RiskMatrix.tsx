'use client'

import { Scatter, ScatterChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type RiskPoint = {
  id: string
  title: string
  probability: number
  impact: number
  mitigation: string
}

interface Props {
  data: RiskPoint[]
  onSelect: (risk: RiskPoint) => void
  selectedId: string
}

export default function RiskMatrix({ data, onSelect, selectedId }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" />
        <XAxis type="number" dataKey="probability" name="Probability" domain={[0, 10]} tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <YAxis type="number" dataKey="impact" name="Impact" domain={[0, 10]} tick={{ fill: '#A8B7D3' }} axisLine={false} tickLine={false} />
        <Tooltip
          cursor={{ stroke: '#00C9FF', strokeDasharray: '3 3' }}
          contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          formatter={(value: number, name: string, props: any) => [`${value}`, name]}
          labelFormatter={label => `Risk point`}
        />
        <Scatter
          data={data}
          fill="#E8292B"
          shape="circle"
          onClick={(_, index) => onSelect(data[index])}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

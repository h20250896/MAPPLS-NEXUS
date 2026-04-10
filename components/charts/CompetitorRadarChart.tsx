'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'

type DataPoint = { name: string; [key: string]: number | string }

interface Props {
  data: DataPoint[]
}

export default function CompetitorRadarChart({ data }: Props) {
  const dimensions = ['Scale', 'Data Depth', 'Revenue Diversity', 'UX Quality', 'B2B Ecosystem', 'India-Specificity']
  const colors = ['#E8292B', '#003087', '#00C9FF', '#F6C343', '#00D97E']

  const chartData = dimensions.map(dimension => {
    return data.reduce(
      (acc, competitor) => ({
        ...acc,
        metric: dimension,
        [competitor.name as string]: Number(competitor[dimension])
      }), {} as Record<string, string | number>)
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={chartData} outerRadius="80%">
        <PolarGrid stroke="rgba(255,255,255,0.08)" />
        <PolarAngleAxis dataKey="metric" tick={{ fill: '#A8B7D3' }} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        {data.map((competitor, index) => (
          <Radar
            key={competitor.name}
            name={competitor.name as string}
            dataKey={competitor.name as string}
            stroke={colors[index % colors.length]}
            fill={colors[index % colors.length]}
            fillOpacity={0.2}
          />
        ))}
        <Tooltip contentStyle={{ backgroundColor: '#020914', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

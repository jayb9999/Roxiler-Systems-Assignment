import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const PieChartComponent = props => {
  const {data, m} = props
  let month = parseInt(m, 10)
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"]
  let mn = monthNames[month-1]
  return (
    <div>
      <h2>Pie-Chart - {mn}</h2>
    <ResponsiveContainer width="50%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="itemCount"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.category} />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent
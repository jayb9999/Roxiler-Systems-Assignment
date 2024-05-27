
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const BarChartComponent = props => {
  const {data, m} = props
  let month = parseInt(m, 10)
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"]
  let mn = monthNames[month-1]
  return (
    <div>
      <h2>Bar-Chart - {mn}</h2>
    <ResponsiveContainer width="70%" height={600}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="range"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          ticks={[1, 2, 3, 4, 5]}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="count" name="count" fill="#1f77b4" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )}
  
  export default BarChartComponent
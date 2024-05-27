const Statistics = (props) => {
  const {data, m} = props
  let month = parseInt(m, 10)
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"]
  let mn = monthNames[month-1]
  return (
    <div>
      <h2>Statistics - {mn}</h2>
      <p>Total Sales: ${data.totalSaleAmount}</p>
      <p>Total Sold Items: {data.totalSoldItems}</p>
      <p>Total Not Sold Items: {data.totalNotSoldItems}</p>
    </div>
  ) }
  
  export default Statistics
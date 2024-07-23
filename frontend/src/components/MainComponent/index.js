import {useState, useEffect} from 'react'
import axios from 'axios'
import Transactions from '../Transactions'
import Statistics from '../Statistics'
import BarChartComponent from '../BarChart'
import PieChartComponent from '../PieChart'
import "./index.css"

const MainComponent = () => {
  const [transactions, setTransactions] = useState([])
  const [statistics, setStatistics] = useState({})
  const [barChart, setBarChart] = useState({})
  const [pieChart, setPieChart] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('01')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setSelectedPerPage] = useState(10)

  const fetchAllTransactions = async (currentPage, perPage, search, selectedMonth) => {
    try {
      const response = await axios.get(
        `https://roxiler-transactions-managaement.onrender.com/transactions?page=${currentPage}&perPage=${perPage}&search=${search}`,
      )
      const data = response.data
      setTransactions(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  /*const fetchStats = async (selectedMonth) => {
    try {
      const response = await axios.get(`http://localhost:3000/statistics?month=${selectedMonth}`)
      const data = response.data
      setStatistics(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  const fetchBarCartData = async (selectedMonth) => {
    try {
      const response = await axios.get(`http://localhost:3000/bar-chart?month=${selectedMonth}`)
      const data = response.data
      setBarChart(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  const fetchPieCartData = async (selectedMonth) => {
    try {
      const response = await axios.get(`http://localhost:3000/pie-chart?month=${selectedMonth}`)
      const data = response.data
      setPieChart(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }*/

  const fetchCombinedData = async month => {
    try {
      const response = await axios.get(
        `https://roxiler-transactions-managaement.onrender.com/combined-data?month=${month}`,
      )
      setStatistics(response.data.statistics)
      setBarChart(response.data.barChart)
      setPieChart(response.data.pieChart)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchAllTransactions(currentPage, perPage, search, selectedMonth)
    /*fetchStats(selectedMonth)
    fetchBarCartData(selectedMonth)
    fetchPieCartData(selectedMonth)*/
    fetchCombinedData(selectedMonth)
  }, [currentPage, perPage, search, selectedMonth])

  const handleInputChange = event => setSearch(event.target.value)

  const handlePrevBtn = () => setCurrentPage(prevPage => Math.max(prevPage-1, 1))

  const handleNextBtn = () => setCurrentPage(prevPage => Math.min(prevPage+1, transactions.length+1))
  return (
    <div class="main">
      <div class="head"><h1 class="hd">Transaction Management</h1></div>
      <div class="labels">
      <label>
        Select Month: 
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </label>

      <label>
        Select Per Page:
        <select
          value={perPage}
          onChange={e => setSelectedPerPage(e.target.value)}
        >
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </label>
      </div>
      <div class="inpt">
        <input type="text" value={search} onChange={handleInputChange} placeholder="Enter text" />
      </div>
      <Transactions data={transactions} m={selectedMonth} />
      <div>
        <p>Page Number {currentPage}</p>
        <div id="pagination">
          <button onClick={handlePrevBtn}>Previous</button>
          <span style={{margin: '0 20px'}}>{currentPage}</span>
          <button onClick={handleNextBtn}>Next</button>
        </div>
      </div>
      <Statistics data={statistics} m={selectedMonth} />
      <BarChartComponent data={barChart} m={selectedMonth} />
      <PieChartComponent data={pieChart} m={selectedMonth} />
    </div>
  )
}

export default MainComponent

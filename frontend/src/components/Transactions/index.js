import "./index.css"

const Transactions = ({data}) => (
    <div>
      <h2>Transactions</h2>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Id</th>
            <th>Month</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{each.id}</td>
              <td>{new Date(each.dateOfSale).getMonth()+1}</td>
              <td>{each.title}</td>
              <td>{each.description}</td>
              <td>{each.price}</td>
              <td>{each.category}</td>
              <td>{each.sold}</td>
              <td><img src={each.image} alt="img"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  
  export default Transactions
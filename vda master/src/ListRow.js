import React, {useState} from 'react'
import Axios from 'axios'

export const ListRow = (props) => {
  const [loading, setloading] = useState(false)
  const [cancelled, setcancelled] = useState(false)
  const { transaction } = props;

  const cancelTransaction = async () => {
    let confirm = window.confirm("Cancel the Transaction with refNo " + transaction.refNo + "?")
    if (confirm) {
      setloading(true)
      let res = await Axios.post("/admin/cancelTransaction", { refNo: transaction.refNo })
      if (res.data.status === "success") {
        setloading(false)
        setcancelled(true)
      }
    }
  }
  

  if(loading){
    return ( <tr aria-colspan={6} style={{textAlign: "center"}}><td>Cancelling...</td></tr> )
  }



  return (
    <tr>
      <td>{transaction.refNo}</td>
      <td>{transaction.rateId}</td>
      <td>{transaction.UserId}</td>
      <td>{transaction.totalRate}</td>
      <td>{transaction.baseRate}</td>
      <td>{transaction.currency}</td>
      <td>{transaction.providerId}</td>
      {cancelled? <td>Cancelled</td>:<td>{transaction.status}</td>}
      <td>
          {transaction.Commissions.map( (Commission) => (
              <tr>
              <td>{Commission.amount}</td>
              <td>{Commission.description}</td>
              <td>{Commission.type}</td>
              </tr>
          ))}
      </td>
      <td style={{border:"none !important", padding: "0px !important"}}>
          {transaction.Taxes.map( (Tax) => (
              <tr>
              <td>{Tax.amount}</td>
              <td>{Tax.description}</td>
              <td>{Tax.type}</td>
              </tr>
          ))}
      </td>
      <td>{transaction.refundable?"Yes":"No"}</td>
      <td>{transaction.depositRequired?"Yes":"No"}</td>
      <td>{transaction.guaranteeRequired?"Yes":"No"}</td>
      <td>{transaction.onlineCancellable?"Yes":"No"}</td>
      <td>{transaction.payAtHotel?"Yes":"No"}</td>
      <td>
      <i onClick={cancelTransaction} style={{cursor:'pointer'}} className="fa fa-trash-o" aria-hidden="true" />
      </td>
    </tr>
  )
}

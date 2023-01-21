
import "./CreditCard.css"
function CreditCard(props) {

    
  return (
    <div className="card">
       <div className="head">{props.type}</div>
       <div>{props.number}</div>
       <div>{props.expirationMonth}</div>
       <div>{props.expirationYear}</div>
       <div>{props.bank}</div>
       <div>{props.owner}</div>
       <div>{props.bgColor}</div>
       <div>{props.color}</div> 
    </div>
  
  )
}

export default CreditCard
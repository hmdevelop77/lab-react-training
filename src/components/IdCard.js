
import "./IdCard.css" 

function IdCard(props) {
  return (
    <div className="container">
      <div className="div-picture">
        <img src={props.picture} alt="pict" />
      </div>
      <div className="div-info">
      <p>Last name:{props.lastName}</p>       
      <p>First name: {props.firstName}</p>   
      <p>Gender: {props.gender}</p> 
      <p>Height: {props.height}</p> 
   
      <p>Birth: {props.birth}</p> 
      </div>
    </div>
  );
}

export default IdCard;

import './DriverCard.css';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="container">
      <img className="image" src={props.img} alt="profil" />
      <div>
        <h1 className="white">{props.name}</h1>
        <span className="white">{Rating(props.rating)}</span>
        <p className="white">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;

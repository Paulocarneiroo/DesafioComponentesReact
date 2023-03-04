import './styles.css';
import carImg from '../../assets/car.png';

const CardCar = () => {
  return (
    <div className="card-car">
      <img src={carImg} alt="CarImg" />
      <p>Lorem ipsum dolor</p>
    </div>

  )
}

export default CardCar;
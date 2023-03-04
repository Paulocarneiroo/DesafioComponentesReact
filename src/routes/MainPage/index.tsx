import './styles.css';
import HeaderCar from '../../components/HeaderCar';
import CardCar from '../../components/CardCar';
import Comments from '../../components/Comments';

const MainPage = () => {
  return (
    <>
      <HeaderCar />
      <main>
        <section className='catalog-container'>
          <h2>Venha nos visitar</h2>
          <div className='cards-container'>
            <CardCar />
            <CardCar />
          </div>
        </section>
        <section className='comments'>
          <h2>O que estão dizendo</h2>
          <div className='comments-container'>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-info">
          <p>@dscarrostop</p>
          <address>Rua da Pipoca, 150</address>
        </div>

      </footer>
    </>
  )
}

export default MainPage
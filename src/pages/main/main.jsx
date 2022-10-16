import Header from "../../components/header/header";
import About from "../../components/about/about";
import Btn from "../../components/btn/btn";
import PortfolioFoto from "../../components/portfolio_foto/portfolio_foto";
import Footer from "../../components/footer/footer";
import "./main.sass"

const Main = () => {
  
  return  (
    <div className="main">
    <Header/>
    <div className="subheader">
      <div className="container subheader__wrapper">
        <div className="subheader__img-edge">
          <img className="subheader__img" src="media/img/main/header/4.jpg" alt="" />
        </div>
        <div className="subheader__img-middle">
          <img className="subheader__img" src="media/img/main/header/5.jpg" alt="" />
        </div>
        <div className="subheader__img-center">
          <img className="subheader__img" src="media/img/main/header/2.jpg" alt="" />
        </div>
        <div className="subheader__img-middle">
          <img className="subheader__img" src="media/img/main/header/3.jpg" alt="" />
        </div>
        <div className="subheader__img-edge">
          <img className="subheader__img" src="media/img/main/header/1.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="center_container">
      <h1 className="name__title">ДИАНА СМИРНОВА</h1>
      <p className="name__subtitle">женский и мужской стилист</p>
    </div>
    <About/>
    <div className="center_container">
      <p className="about__bottom-text">Открывая передо мной свой гардероб, вы открываете частичку себя, взамен я отдаю вам все что знаю и умею, а главное - помогаю обрести себя через стиль
      </p>
    </div>
    <div className="about__footer">
      <div className="container">
        <Btn/>
      </div>
    </div>

  <section className="services">
    <div className="center_container">
      <h3 className="services__title">
        УСЛУГИ
      </h3>
      <div className="services__descr">
      </div>
    <Btn/>
    </div>
  </section>

  <section className="portfolio">
    <div className="center_container">
        <h3 className="portfolio__title">
          ПОРТФОЛИО
        </h3>
        <PortfolioFoto/>
    </div>
  </section>


  <section className="reviews">
  <div className="center_container">
    <h3 className="reviews__title">
      ОТЗЫВЫ
    </h3>
  <div className="reviews__carousel">
    <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_left" />
    <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_rigth" />
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        <p>Меня зовут Диана Смирнова. 
          Я - практикующий женский и мужской стилист. 
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/6.jpg" alt="" className="reviews__img" />
      </div>
    </div>
  </div>
  </div>
  </section>


  <section className="blog">
  <div className="center_container">
    <div className="blog__title">
      БЛОГ
    </div>
    <div className="blog__contents">
      <div className="blog__img"></div>
      <div className="blog__img"></div>
      <div className="blog__img"></div>
    </div>
    <Btn/>
  </div>
  </section>

  <Footer/>
    
  </div>
  )


}

export default Main;
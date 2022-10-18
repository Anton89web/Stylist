import About from "../../components/about/About";
import Btn from "../../components/btn/Btn";
import PortfolioFoto from "../../components/portfolio_foto/PortfolioFoto";
import { NavLink } from "react-router-dom";
import "./mainPage.sass"

const Main = () => {
  
  return  (
    <div className="main">
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
      <p className="name__subtitle">женский и мужской стилист
      <img className="name__eng" src="media/icons/about.svg" alt=""/>
      </p>
    </div>
    <About btn={true}/>
    <div className="center_container">
      <p className="about__bottom-text">
        <img className="about__name_eng" src="media/icons/name.svg" alt=""/>
        <img className="about__quotes" src="media/icons/,,.svg" alt=""/>
        Открывая передо мной свой гардероб, вы открываете частичку себя, взамен я отдаю вам все что знаю и умею, а главное - помогаю обрести себя через стиль
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
        <img className="services__eng" src="media/icons/services.svg" alt=""/>
      </div>
      <NavLink to="/services">
        <Btn/>
      </NavLink>
    
    </div>
  </section>

  <section className="portfolio">
    <div className="center_container">
        <h3 className="portfolio__title">
          ПОРТФОЛИО
          <img className="portfolio__eng" src="media/icons/portfolio.svg" alt=""/>
        </h3>
        <PortfolioFoto/>
    </div>
  </section>


  <section className="reviews">
  <div className="center_container">
    <h3 className="reviews__title">
      ОТЗЫВЫ
      <img className="reviews__eng" src="media/icons/reviews.svg" alt=""/>
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
    <h3 className="blog__title">
      БЛОГ
      <img className="blog__eng" src="media/icons/blog.svg" alt=""/>
    </h3>
    <div className="blog__contents">
      <div className="blog__img"></div>
      <div className="blog__img"></div>
      <div className="blog__img"></div>
    </div>
    <NavLink to="/blog">
      <Btn/>
    </NavLink>
  </div>
  </section> 
  </div>
  )


}

export default Main;
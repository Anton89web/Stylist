import About from "../../components/about/About";
import Btn from "../../components/btn/Btn";
import PortfolioFoto from "../../components/portfolio_foto/PortfolioFoto";
import { NavLink } from "react-router-dom";
import "./mainPage.sass"
import Carousel from "../../components/carousel/Carousel";

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
        <img className="services__eng" src="media/icons/services.svg" alt=""/>
      </h3>
      <div className="services__descr">
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
        <NavLink to="/portfolio">
          <Btn/>
        </NavLink>
    </div>
  </section>


  <section className="reviews">
  <div className="center_container">
    <h3 className="reviews__title">
      ОТЗЫВЫ
      <img className="reviews__eng" src="media/icons/reviews.svg" alt=""/>
    </h3>
  <div className="reviews__carousel">
    <Carousel />
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
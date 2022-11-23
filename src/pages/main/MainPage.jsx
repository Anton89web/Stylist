import About from "../../components/about/About";
import Btn from "../../components/btn/Btn";
import PortfolioFoto from "../../components/portfolio_foto/PortfolioFoto";
import { NavLink } from "react-router-dom";
import "./mainPage.sass"
import Carousel from "../../components/carousel/Carousel";
import BlogPage from "../blog/BlogPage";

const Main = () => {
// function scrollToContacts(){
//   window.scrollTo({
//   top: document.body.scrollHeight,
//   behavior: 'smooth'
// })}
  return  (
    <div className="main">
    <div className="subheader">
      <div className="container subheader__wrapper">
        <div className="subheader__img-edge">
          <img className="subheader__img" src="static/img/main/header/4.jpg" alt="" />
        </div>
        <div className="subheader__img-middle">
          <img className="subheader__img" src="static/img/main/header/5.jpg" alt="" />
        </div>
        <div className="subheader__img-center">
          <img className="subheader__img" src="static/img/main/header/2.jpg" alt="" />
        </div>
        <div className="subheader__img-middle">
          <img className="subheader__img" src="static/img/main/header/3.jpg" alt="" />
        </div>
        <div className="subheader__img-edge">
          <img className="subheader__img" src="static/img/main/header/1.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="center_container">
      <h1 className="name__title">ДИАНА СМИРНОВА</h1>
      <p className="name__subtitle">женский и мужской стилист
      <img className="name__eng" src="static/icons/about.svg" alt=""/>
      </p>
    </div>
    <About title={true} btn={true} sans={false}/>
    <div className="center_container">
      <p className="about__bottom-text">
        <img className="about__name_eng" src="static/icons/name.svg" alt=""/>
        <img className="about__quotes" src="static/icons/,,.svg" alt=""/>
        Открывая передо мной свой гардероб, вы открываете частичку себя, взамен я отдаю вам все что знаю и умею, а главное - помогаю обрести себя через стиль
        <img className="about__quotes_down" src="static/icons/,,.svg" alt=""/>
      </p>
    </div>

  <section className="services">
    <div className="center_container">
      <h3 className="services__title">
        УСЛУГИ
        <img className="services__eng" src="static/icons/services.svg" alt=""/>
      </h3>
      <p className="services__descr">
      Здесь вы можете ознакомиться с самыми популярными услугами. Данный перечень не является исчерпывающим. Возможны иные услуги исходя из вашего запроса, такие как разовая консультация, где вы можете задать мне любые вопросы о стиле;  точечный шопинг (подбор одной или нескольких вещей); дистанционное шопинг-сопровождение, когда вы присылаете мне фото/видео из магазина, а я консультирую вас насчёт покупки, проведение  мастер-классов и лекций и т.д.
      </p>
      <NavLink to="/services">
        <Btn/>
      </NavLink>
    </div>
  </section>

  <section className="portfolio">
    <div className="center_container">
        <h3 className="portfolio__title">
          ПОРТФОЛИО
          <img className="portfolio__eng" src="static/icons/portfolio.svg" alt=""/>
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
      <img className="reviews__eng" src="static/icons/reviews.svg" alt=""/>
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
      <img className="blog__eng" src="static/icons/blog.svg" alt=""/>
    </h3>
    <div className="blog__contents">
        <BlogPage main={true} pagination={true}/>
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
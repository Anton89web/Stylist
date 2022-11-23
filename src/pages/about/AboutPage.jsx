import "./aboutPage.sass"
import AboutIf from "../../components/about/AboutIf";
import About from "../../components/about/about";

const AboutPage = () => {
  const data = [
    { "id": "1",
      "if": "Замечаете, что шопинг приносит только стресс и отнимает ценное время",
      "img": "static/img/main/header/2.jpg"
    },
    {
      "id": "2",
      "if": "Боитесь выглядеть неуместно в обществе"
    },
    {
      "id": "3",
      "if": "Не понимаете, как подчеркнуть свой социальный статус с помощью одежды"
    },
    {
      "id": "4",
      "if": "Тратите деньги на одежду, которая потом \nне носится"
    },
    {
      "id": "5",
      "if": "Не умеете правильно сочетать одежду по цветам и моделям"
    },
    {
      "id": "6",
      "if": "Не знаете, что подходит вашему типу\n фигуры"
    },
    {
      "id": "7",
      "if": "Каждое утро не знаете что надеть"
    }
  ]

  return(
    <>
      <div className="about__header">
        <About img={data[0].img} />
        <h4 className="about__header_title">
          ЕСЛИ ВЫ
        </h4>
      </div>
      <div className="center_container">
      <div className="about__footer_items">
        {data.map((e, i) => (
          <AboutIf id={e.id} text={e.if} key={i}/>
        ) )}
      </div>
      <div className="about__bottom">
        <p className="footer__dscr">
          Пишите мне, и вы получите актуальный<br/>
          гардероб  без лишних вещей, который вам нравится,<br/>
          восторг и комплименты окружающих, энергию и отличное настроение.
        </p>
      </div>
      </div>
    </>
  )
}

export default AboutPage;

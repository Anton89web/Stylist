import "./aboutPage.sass"
import AboutIf from "../../components/about/AboutIf";
import {useEffect, useState} from "react";
import About from "../../components/about/About";

const AboutPage = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch("dataBase/about.json")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
          setLoading(true)
        },
        (error) => {
          alert(error);
        }
      )
  },[])
  return(
    loading?
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
    : "LOADING"
  )
}

export default AboutPage;

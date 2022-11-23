import Btn from "../btn/Btn";
import { NavLink } from "react-router-dom";

import "./about.sass"


const About = ({title, btn, list, img}) => {
  const font =  btn ?  "": "Open Sans";
  const size =  btn ?  "": "1.2em";
  return (
    <div className="center_container">
      <div className="about">
         {title? <h3 className="about__title">
          ОБО МНЕ
        </h3>:
        "" }
        <div className="about__descr">
          <img src={img? img : "static/img/main/header/6.jpg"} alt="" className="descr__img" />
          <div className="descr__text_wrapp" style={{fontFamily: `${font}`, fontSize: `${size}`}}>
            <p className="descr__text">
            Меня зовут Диана Смирнова.<br/>
            Я - практикующий женский и мужской стилист. Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена 
            Айрапетова, Self Made Studio, Леси Пятибратовой, Насти Ножиной.
            </p>
            <p className="descr__text">
            Помогаю своим клиентам транслировать свой внутренний мир через внешность, быстрее двигаться к намеченным результатам,  выглядеть стильно и актуально, экономя при этом время и деньги. Правильная одежда раскроет вашу естественную красоту, сделает ярче и эффектнее, уберет возраст и скроет нежелательные особенности.
            </p>
            {list ? list : ""}
            {btn ? 
              <NavLink to="/about" >
                <Btn mt={'60px'}/>
              </NavLink>
             : ""}
          </div>
        </div>

    </div>


    </div>
  )
}
export default About;
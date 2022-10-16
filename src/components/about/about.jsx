import Btn from "../btn/btn";

import "./about.sass"


const About = () => {
  return (
    <div className="center_container">
      <div className="about">
        <h3 className="about__title">
          ОБО МНЕ
        </h3>

        <div className="about__descr">
          <img src="media/img/main/header/6.jpg" alt="" className="descr__img" />
          <div className="descr__text_wrapp">
            <p className="descr__text">
            Меня зовут Диана Смирнова. 
            Я - практикующий женский и мужской стилист. Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена 
            Айрапетова, Self Made Studio, Леси Пятибратовой, Насти Ножиной.
            </p>
            <p className="descr__text">
            Помогаю своим клиентам транслировать свой внутренний мир через внешность, быстрее двигаться к намеченным результатам,  выглядеть стильно и актуально, экономя при этом время и деньги. Правильная одежда раскроет вашу естественную красоту, сделает ярче и эффектнее, уберет возраст и скроет нежелательные особенности.
            </p>
            <Btn mt={'100px'}/>
          </div>
        </div>

    </div>


    </div>
  )
}
export default About;
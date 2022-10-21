import {useState} from "react";


const Carousel = () =>{
  const [state, setState] = useState(0)
  function nextSlide(){
    state === slide.length-1 ?  setState(0) : setState(state + 1)
  }

  function prevSlide(){
    state === 0 ?  setState(slide.length-1) : setState(state - 1)
  }
  const slide = [
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №1
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/6.jpg" alt="" className="reviews__img " />
      </div>
    </div>,
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №2
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/5.jpg" alt="" className="reviews__img" />
      </div>
    </div>,
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №3
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/4.jpg" alt="" className="reviews__img" />
      </div>
    </div>,
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №4
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/3.jpg" alt="" className="reviews__img" />
      </div>
    </div>,
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №5
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/2.jpg" alt="" className="reviews__img" />
      </div>
    </div>,
    <div className="reviews__carousel_wrapp">
      <div className="reviews__text">
        №6
        <p>Меня зовут Диана Смирнова.
          Я - практикующий женский и мужской стилист.
          Выпускница Fashion-академии PSFA, участница многочисленных образовательных проектов  от топ стилистов Александра Рогова, Арсена.</p>
        <p>Айрапетова,  Self Made Studio, Леси Пятибратовой, Насти Ножиной.</p>
      </div>
      <div className="reviews__img_wrapp">
        <img src="media/img/main/header/1.jpg" alt="" className="reviews__img" />
      </div>
    </div>,

  ]
  return(
    <>
      <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_left" onClick={()=>prevSlide()}/>
      <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_rigth" onClick={()=>nextSlide()}/>
      {slide[state]}
    </>
  )
}

export default Carousel;
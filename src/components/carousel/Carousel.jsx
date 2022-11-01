import { useEffect } from "react";
import {useState} from "react";


const Carousel = () =>{
  const [state, setState] = useState(0)
  const [slide, setSlide] = useState()
  const [loading, setLoading] = useState(false)

useEffect(()=>{
fetch("dataBase/reviews.json")
.then(res => res.json())
.then((res)=> {
setLoading(true)  
setSlide(res)
console.log(res)},
(err)=> {alert(err)}
)},[])

  function nextSlide(){
    state === slide.length-1 ?  setState(0) : setState(state + 1)
  }

  function prevSlide(){
    state === 0 ?  setState(slide.length-1) : setState(state - 1)
  }

  
  return(
    loading ?
    <div className="reviews__carousel_wrapp">
    <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_left" onClick={()=>prevSlide()}/>
      <div className="reviews__img_wrapp">
        <img src={slide[state].review} alt="" className="reviews__img"/>
      </div>
      <img src="media/icons/shevron.svg" alt="" className="reviews__carousel_rigth" onClick={()=>nextSlide()}/>
    </div>
    : <h1>ЗАГРУЖАЕТСЯ</h1>
  )
}

export default Carousel;
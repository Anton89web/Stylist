import "./blog_card.sass"
import {useEffect, useState} from "react";


const BlogCard = ({ show, hidden, img, text, time}) => {


  return(
         <div >
      <div className="blog__card"  onClick={()=> show()}>
        <img className="blog__img" src={img} alt=""/>
        <div className="blog__text">{text.slice(0, 69) + "..."}</div>
        <div className="blog__data">{time}</div>
      </div>
      <div className="card__full">
        <div className="center_container">
            <img className="card__full_close" src="media/icons/cross.svg" alt="" onClick={()=>hidden()}/>
        <div className="card__img_wrapp" >
          <img src={img} alt="" className="card__img"/>
          </div>
          <p className="card__full_text">{text}</p>
        </div>
      </div>
         </div>
       )
}

export default BlogCard
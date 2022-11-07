import "./blog_card.sass"


const BlogCard = ({ show, hidden, img, text, time}) => {


  return(
         <div >
      <div className="blog__card"  onClick={()=> show()}>
        <img className="blog__img" src={img} alt=""/>
        <div className="blog__text">{text[0].slice(0, 69) + "..."}</div>
        <div className="blog__data">{time}</div>
      </div>
      <div className="card__full" onClick={e=>hidden(e)}>
        <div className="center_container">
            <img className="card__full_close" src="media/icons/cross.svg" alt="" onClick={e=>hidden(e)}/>
        <div className="card__img_wrapp" >
          <img src={img} alt="" className="card__img"/>
          </div>
          {text.map((p, i)=>(
            <p className="card__full_text" key={i}>{p}</p>
            ))}
        </div>
      </div>
         </div>
       )
}

export default BlogCard
import "./blog_card.sass"



const BlogCard = ({title, show, hidden, img, img_title, text, time}) => {
  const timeCreate = new Date(time).toLocaleDateString()
  return(
         <div >
      <div className="blog__card"  onClick={()=> show()}>
        <img className="blog__img" src={img_title} alt=""/>
        <div className="blog__text">{title}</div>
        <div className="blog__data">{timeCreate}</div>
      </div>
      <div className="card__full" onClick={e=>hidden(e)}>
        <div className="center_container">
            <img className="card__full_close" src="static/icons/cross.svg" alt="" onClick={e=>hidden(e)}/>
        <div className="card__img_wrapp" >
          <img src={img} alt="" className="card__img"/>
        </div >
         <div className="card__full_text">
          {text}
        </div> 
        </div>
      </div>
         </div>
       )
}

export default BlogCard
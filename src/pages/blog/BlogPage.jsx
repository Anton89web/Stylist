import "./blogPage.sass"
import BlogCard from "../../components/blog_card/BlogCard";
import {useEffect, useState} from "react";




const Blog = ({main}) =>{
  let aCards
  const[blog, setBlog] = useState();
  const[loading, setLoading] = useState(false)

  function showFull(i){
    const element = document.querySelectorAll('.card__full')[i]
    const html = document.querySelector("html")
    element.classList.add('show__full_card');
    element.style.top=`${html.scrollTop + 'px'}`
    // element.style.height=`${html.height +'px'}`
    html.style.overflow='hidden';
  }

  function hiddenFull(i){
    const element = document.querySelectorAll('.card__full')[i]
    const html = document.querySelector("html")
    element.classList.remove('show__full_card');
    element.style.top=`${'-150%'}`
    html.style.overflow=''
  }

  useEffect(() => {
    fetch("dataBase/blog.json")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true)
          aCards = (main? result.slice(0, 3) : result.slice(0, 6))
          setBlog(aCards)
        },
        (error) => {
          alert(error);
        }
      )
  },[])
  return (
    loading ?
    <div className="center_container">
     <div className="blog__grid">
       {blog.map((e , i) => (
  <BlogCard slice={false} key={i} text={e.text} img={e.img} time={e.time} show={()=>showFull(i)} hidden={()=>hiddenFull(i)}/>))}
     </div>
    </div>
      : <h1>ЗАГРУЖАЕТСЯ...</h1>
)
}



export default Blog;

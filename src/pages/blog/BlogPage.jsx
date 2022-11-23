import "./blogPage.sass"
import BlogCard from "../../components/blog_card/BlogCard";
import {useEffect, useState} from "react";




const Blog = ({main, pagination}) =>{
  const[blogs, setBlogs] = useState();
  const[loading, setLoading] = useState(false);
  const[page, setPage] = useState(1)
  const[lastIndex , setLast] = useState(6)
  const[firstIndex, setFirst] = useState(0)

  function showFull(i){
    const element = document.querySelectorAll('.card__full')[i]
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    element.classList.add('show__full_card');
    // element.style.cssText=`height: ${window.outerHeight+'px'}; top: ${html.scrollTop + 'px'};`
    element.style.top=`${html.scrollTop + 'px'}`
    body.style.overflow='hidden';
  }

  function hiddenFull(i, e){
    const element = document.querySelectorAll('.card__full')[i]
    const html = document.querySelector("html")
    const body = document.querySelector("body")

    if(e.target.classList.contains('card__full') ||
    e.target.classList.contains('card__full_close')){
      body.style.overflow='';
      element.classList.remove('show__full_card');
      element.style.top=`${'-150%'}`
      html.style.overflow=''
    }
    
  }

  function changePage(num){
    let i = num
    window.scrollTo(0, 0)
    if (num < 1) i = 1
    if (num > Math.ceil(blogs.length / 6)) i = num - 1
    setPage(i)
    setLast(i * 6)
    setFirst(i * 6 - 6)
  }

  useEffect(() => {
    fetch("https://dismirnova.ru/api/v1/blog/")
      .then(res => res.json())
      .then((result) => {
          setLoading(true)
          setBlogs(result)
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
       {(main? blogs.slice(0, 3) : blogs.slice(firstIndex, lastIndex)).map((e , i) => (
  <BlogCard key={i} title={e.title} text={e.content} img={e.photo_big} img_title={e.photo} time={e.time_create} show={()=>showFull(i)} hidden={(e)=>hiddenFull(i, e)}/>))}
     </div> 
{!pagination? 
 <nav className="pagination__wrapper" aria-label="Навигации по страницам">
  <ul className="pagination">
    <li  onClick={()=> changePage(page - 1)}>
      <span className="page-arrow"  aria-label="Предыдущая">
        <span aria-hidden="true">&laquo;</span>
      </span>
    </li>
    { blogs.slice(0, Math.ceil(blogs.length / 6)).map((e, i)=>(
      <li className={page === i+1 ? "page-item page-link_active" : "page-item"} onClick={()=> changePage(i+1)} key={i}><span className="page-link">{i+1}</span></li>
    ))}
    <li onClick={()=> changePage(page + 1)}>
      <span className="page-arrow"  aria-label="Следующая">
        <span aria-hidden="true">&raquo;</span>
      </span>
    </li>
  </ul>
</nav> : ""}
    </div>
      : <h1>ЗАГРУЖАЕТСЯ...</h1>
)
}

export default Blog;

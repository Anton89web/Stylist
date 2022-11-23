import PortfolioCard from "../../components/portfolio_card/PortfolioCard"
import "./portfolioPage.sass"
import React, {useEffect, useState} from "react"

const Portfolio = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0)
  useEffect(() => {
    fetch("https://dismirnova.ru/api/v1/portfolio/")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true)
          setState(result)
          changeCards(0)
        },
        (error) => {
          alert(error);
        },

      )
  },[])

  function changeCards(i) {
    document.querySelectorAll('.portfolio__categoria_link').forEach((e , index) => {
      index === i ? e.classList.add('active') :
      e.classList.remove('active')
    })
    setNum(i);
  }
  return (
    loading ?
    <section className="portfolio__categoria">
      <div className="center_container">
        <ul className="portfolio__categoria_links">
          {state.map((e, i) => i===0 ? 
           <li className="portfolio__categoria_link active" onClick={()=>changeCards(i) } key={i}>{e.title}</li>
           :
           <li className="portfolio__categoria_link " onClick={()=>changeCards(i) } key={i}>{e.title}</li>
           )
          }
        </ul>
        <div className="portfolio__categoria_cards">
 <PortfolioCard descr={state[num].description} foto={state[num]} />
        </div>
      </div>
    </section>
      : <h1>Загружается...</h1>
  )

}

export default Portfolio
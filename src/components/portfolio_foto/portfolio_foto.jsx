import Btn from "../btn/btn"
import "./portfolio_foto.sass"



const PortfolioFoto = ()=> {
  return (
    <div className="container_content">
        <div className="portfolio__grid">
          <div className="one">
            <img className="portfolio__img" src="media/img/main/portfolio/7.jpg" alt="" />
          </div>
          <div className="two">
            <img className="portfolio__img" src="media/img/main/portfolio/11.jpg" alt="" />
          </div>
          <div className="three">
            <img className="portfolio__img" src="media/img/main/portfolio/12.jpg" alt="" />
          </div>
          <div className="four">
              <img className="portfolio__img" src="media/img/main/portfolio/14.jpg" alt="" />
          </div>
          <div className="five">
              <img className="portfolio__img" src="media/img/main/portfolio/13.jpg" alt="" />
          </div>
          <div className="six">
            <img className="portfolio__img" src="media/img/main/portfolio/15.jpg" alt=""/>
          </div>
          <div className="seven">
              <img className="portfolio__img" src="media/img/main/portfolio/17.jpg" alt="" />
          </div>
          <div className="eight">
              <img className="portfolio__img" src="media/img/main/portfolio/18.jpg" alt="" />
          </div>
          <div className="nine">
              <img className="portfolio__img" src="media/img/main/portfolio/12.jpg" alt="" />
          </div>
        </div>
        <Btn/>
    </div>
  )
}

export default PortfolioFoto




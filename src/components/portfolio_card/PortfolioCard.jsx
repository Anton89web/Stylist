import "./portfolioCard.sass"


const PortfolioCard = ({title, subtitle, descr, foto}) => {
 return(
  <div className="portfolio__card">
    <p className="portfolio__card_descr">{descr}</p>
    <div className="portfolio__card_grid session">
      {foto.map((e, i) => <img className="portfolio__img" src={e} alt="" key={i}/>)}
    </div>
  </div>
 )
}

export default PortfolioCard;
import "./portfolioCard.sass"


const PortfolioCard = ({title, subtitle, descr, foto}) => {
 return(
  <div className="portfolio__card">
    <h3 className="portfolio__card_title">{title}</h3>
    {subtitle ? <h4 className="portfolio__card_subtitle">{subtitle}</h4> : ""}
    <p className="portfolio__card_descr">{descr}</p>
    <div className="portfolio__card_grid">
      {foto.map((e, i) => <img className="portfolio__img" src={e} alt="" key={i}/>)}
    </div>
  </div>
 )
}

export default PortfolioCard;
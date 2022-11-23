import "./portfolioCard.sass"


const PortfolioCard = ({descr, foto}) => {
  const arFoto = []
  for (let i = 1; i <= 16; i++) {
    if (foto['photo_'+i]){
      arFoto.push(foto['photo_'+i])
    } else {
      break
    }
  }
 return(
  <div className="portfolio__card">
    <p className="portfolio__card_descr">{descr}</p>
    <div className="portfolio__card_grid session">
      {arFoto.map((e, i) => <img className="portfolio__img" src={e} alt="" key={i}/>)}
    </div>
  </div>
 )
}

export default PortfolioCard;
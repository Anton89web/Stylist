import "./card_full.sass"


const CardFull = (img, text) =>{
  return (
    <div className="card__full">
      <div className="card__img_wrapp">
        <img src={img} alt="" className="card__img"/>
      </div>
      <p className="card__full_text">{text}</p>
    </div>
  )
}

export default CardFull
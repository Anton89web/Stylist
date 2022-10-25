import "./servise.sass"


const Service = ({img, title, descr}) => {
  return (
    <div>
      <div className="service">
        <div className="service__title_wrapper">
          <img className="service__title_img" src={img} alt=""/>
          <h5 className="service__title" >{title}
          </h5>
        </div>
        {/*<div className="service__descr hidden">*/}
        {/*  <div className="service__descr_close" onClick={()=>open(0)}>*/}
        {/*    <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>*/}
        {/*  </div>*/}
        {/*  <ul className="service__descr_ul">*/}
        {/*    <span>Я помогу вам решить такие проблемы как:</span>*/}
        {/*//     <li>- много вещей, нечего носить</li>*/}
        {/*//     <li>- сомневаюсь в актуальности той или иной вещи</li>*/}
        {/*    <li>- не понимаю, как сочетать цвета и стили</li>*/}
        {/*    <li>- не понимаю, как собирать гармоничные образы</li>*/}
        {/*    <li>- покупаю одно и то же, составляю одни и те же комплекты</li>*/}
        {/*  </ul>*/}

        {/*  <p className="service__descr_text">За один разбор прорабатывается один сезон - осень/зима или весна/лето. С аксессуарами, обувью и украшениями.*/}
        {/*    В подарок на 3 месяца online поддержка по поводу*/}
        {/*    составления комплектов и новых покупок.*/}
        {/*//   </p>*/}
        {/*//   <ul className="service__descr_ul">*/}
        {/*    <span>В результате:</span>*/}
        {/*    <li>Вы узнаете, какая одежда подходит под ваш тип фигуры, образ жизни, а от какой лучше избавиться и почему ее не стоит носить</li>*/}
        {/*    <li>Какие цвета и принты,  подчеркнут вашу индивидуальность</li>*/}
        {/*    <li>Получите фото комплектов</li>*/}
        {/*    <li>Список  вещей, которые надо купить  (примеры, без ссылок).Шопинг-лист со ссылками 2000 рублей.</li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        {/*// <div className="service__descr_price hidden">*/}
        {/*//   <div className="price__wrapper">*/}
        {/*//     <span className="price__condition">до 3 часов</span>*/}
        {/*    <span className="price">6 000 рублей</span>*/}
        {/*  </div>*/}
        {/*  <div className="price__wrapper">*/}
        {/*    <span className="price__condition">дополнительный час</span>*/}
        {/*    <span className="price">10 000 рублей</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div>
          <span className="service__subtitle">ПОДРОБНЕЕ</span>
          <img src="media/icons/arrow.svg" alt="" className="service__title_arrow"/>
        </div>
      </div>
    </div>
  );
};

export default Service;
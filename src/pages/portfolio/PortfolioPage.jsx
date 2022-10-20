import PortfolioCard from "../../components/portfolio_card/PortfolioCard"
import "./portfolioPage.sass"
import React, {useState} from  "react"

const Portfolio = () => {
  const aCards = [ {
      title: 'ЖЕНСКИЙ ШОПИНГ',
      descr: "Шопинг без разбора гардероба. Я проанализировала запрос клиента на основе заполненной анкеты. Основная задача - подобрать более актуальные и молодёжные образы, подчеркивающие природную красоту. Первое фото - одежда клиентки. Остальные образы новые. Обратите внимание, как с помощью только одежды, не меняя причёску и макияж, девушка засияла.",
      foto: [
        'media/img/main/portfolio/woman/6.jpg',
        'media/img/main/portfolio/woman/7.jpg',
        'media/img/main/portfolio/woman/8.jpg',
        'media/img/main/portfolio/woman/9.jpg',
        'media/img/main/portfolio/woman/10.jpg',
        'media/img/main/portfolio/woman/11.jpg',
        'media/img/main/portfolio/woman/12.jpg',
        'media/img/main/portfolio/woman/13.jpg',
      ]
    },
    { title: 'МУЖСКОЙ ШОПИНГ',
      descr: 'Все образы, включая обувь, собраны в одном магазине мужской одежды Katardi',
      foto: [
        'media/img/main/portfolio/men/14.jpg',
        'media/img/main/portfolio/men/15.jpg',
        'media/img/main/portfolio/men/16.jpg',
        'media/img/main/portfolio/men/17.jpg',
        'media/img/main/portfolio/men/18.jpg',
        'media/img/main/portfolio/men/19.jpg',
        'media/img/main/portfolio/men/20.jpg',
        'media/img/main/portfolio/men/21.jpg',
        'media/img/main/portfolio/men/22.jpg',
        'media/img/main/portfolio/men/23.jpg',
      ]
    },
    { title: 'СТИЛИЗАЦИЯ ФОТОСЕССИЙ',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iure id exercitationem veniam rerum. Quibusdam, tempora suscipit mollitia praesentium perferendis autem, doloremque culpa laudantium placeat totam expedita laborum magni ea.',
      foto: [
        'media/img/main/portfolio/men/14.jpg',
        'media/img/main/portfolio/men/15.jpg',
        'media/img/main/portfolio/men/16.jpg',
        'media/img/main/portfolio/men/17.jpg',
        'media/img/main/portfolio/men/18.jpg',
        'media/img/main/portfolio/men/19.jpg',
        'media/img/main/portfolio/men/20.jpg',
        'media/img/main/portfolio/men/21.jpg',
        'media/img/main/portfolio/men/22.jpg',
        'media/img/main/portfolio/men/23.jpg',
      ]
    },
    { title: 'ГАРДЕРОБ ПОД КЛЮЧ',
      subtitle: 'МУЖСКОЙ СТИЛЬ',
      descr: 'Образы для осенне-зимнего сезона после разбора гардероба и шопинга. Многие старые вещи, с которыми клиент планировал расстаться, удачно обыграли новыми вещами. Всего получилось около 100 комплектов (например с одними бежевыми брюками около 20).',
      foto: [
        'media/img/main/portfolio/men_style/35.jpg',
        'media/img/main/portfolio/men_style/36.jpg',
        'media/img/main/portfolio/men_style/37.jpg',
        'media/img/main/portfolio/men_style/38.jpg',
        'media/img/main/portfolio/men_style/39.jpg',
        'media/img/main/portfolio/men_style/40.jpg',
        'media/img/main/portfolio/men_style/41.jpg',
        'media/img/main/portfolio/men_style/42.jpg',
        'media/img/main/portfolio/men_style/43.jpg',
        'media/img/main/portfolio/men_style/44.jpg',
        'media/img/main/portfolio/men_style/45.jpg',
        'media/img/main/portfolio/men_style/46.jpg',
        'media/img/main/portfolio/men_style/47.jpg',
        'media/img/main/portfolio/men_style/48.jpg',
        'media/img/main/portfolio/men_style/49.jpg',
      ]
    },
    { title: 'РАЗБОР ГАРДЕРОБА',
      descr: 'Разбор гардероба Екатерины. Всё вещи отлично сочетаются между собой и подходят своей хозяйке. Почти ничего не убрали и запланировали к покупке. Было составлено более 30 комплектов в новой для клиентки комбинаторике, как она раньше не носила.',
      foto: [
        'media/img/main/portfolio/wardrobe/23.jpg',
        'media/img/main/portfolio/wardrobe/24.jpg',
        'media/img/main/portfolio/wardrobe/25.jpg',
        'media/img/main/portfolio/wardrobe/26.jpg',
        'media/img/main/portfolio/wardrobe/27.jpg',
        'media/img/main/portfolio/wardrobe/28.jpg',
        'media/img/main/portfolio/wardrobe/29.jpg',
        'media/img/main/portfolio/wardrobe/30.jpg',
        'media/img/main/portfolio/wardrobe/31.jpg',
        'media/img/main/portfolio/wardrobe/32.jpg',
        'media/img/main/portfolio/wardrobe/33.jpg',
        'media/img/main/portfolio/wardrobe/34.jpg',
      ]
    },
  ]

  const [state, setState] = useState(aCards[0]);

  function changeCards(value, e) {
    document.querySelectorAll('.portfolio__categoria_link').forEach(e=>{
      e.classList.remove('active')
    })
    e.currentTarget.classList.add('active');
    setState(value);
  }



  return (
    <section className="portfolio__categoria">
      <div className="center_container">
        <ul className="portfolio__categoria_links">
          <li className="portfolio__categoria_link active" onClick={(e)=>changeCards(aCards[0], e)}>ЖЕНСКИЙ ШОПИНГ</li>
          <li className="portfolio__categoria_link" onClick={(e)=>changeCards(aCards[1],e)}>МУЖСКОЙ ШОПИНГ</li>
          <li className="portfolio__categoria_link" onClick={(e)=>changeCards(aCards[2],e)}>СТИЛИЗАЦИЯ ФОТОСЕССИЙ</li>
          <li className="portfolio__categoria_link" onClick={(e)=>changeCards(aCards[3],e)}>ГАРДЕРОБ ПОД КЛЮЧ</li>
          <li className="portfolio__categoria_link" onClick={(e)=>changeCards(aCards[4],e)}>РАЗБОР ГАРДЕРОБА</li>
        </ul>
        <div className="portfolio__categoria_cards">
          <PortfolioCard title={state.title} subtitle={state.subtitle} descr={state.descr} foto={state.foto} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
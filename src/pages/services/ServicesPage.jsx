import "./servicesPage.sass"
import Service from "../../components/service/Service";
import {useEffect, useState} from "react";

const Services = () => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  function open(n){
  document.querySelectorAll('.service__descr')[n].classList.toggle('hidden');
  document.querySelectorAll('.service__descr_price')[n].classList.toggle('hidden');
  document.querySelector("html").classList.toggle('html_hidden')
  }

  useEffect(() => {
    fetch("dataBase/services.json")
      .then(res => res.json())
      .then(
        (result) => {
          setState(result)
          setLoading(true)
        },
        (error) => {
          alert(error);
        }
      )
  },[])
  return (
  <section className="services">
    <div className="center_container relative">
      <div className="service__grid">
        {loading? state.map((e, i)=>(
          <Service title={e.name} descr={e.descr} fnc={open} arg={i} key={i}/>
        ))
          : <h4>LOADING</h4>
        }
      </div>
    </div>
    <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(0)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <ul className="service__descr_ul">
            <span>Я помогу вам решить такие проблемы как:</span>
            <li>- много вещей, нечего носить</li>
            <li>- сомневаюсь в актуальности той или иной вещи</li>
            <li>- не понимаю, как сочетать цвета и стили</li>
            <li>- не понимаю, как собирать гармоничные образы</li>
            <li>- покупаю одно и то же, составляю одни и те же комплекты</li>
          </ul>

          <p className="service__descr_text">За один разбор прорабатывается один сезон - осень/зима или весна/лето. С аксессуарами, обувью и украшениями.
            В подарок на 3 месяца online поддержка по поводу
            составления комплектов и новых покупок.
          </p>
          <ul className="service__descr_ul">
            <span>В результате:</span>
            <li>Вы узнаете, какая одежда подходит под ваш тип фигуры, образ жизни, а от какой лучше избавиться и почему ее не стоит носить</li>
            <li>Какие цвета и принты,  подчеркнут вашу индивидуальность</li>
            <li>Получите фото комплектов</li>
            <li>Список  вещей, которые надо купить  (примеры, без ссылок).Шопинг-лист со ссылками 2000 рублей.</li>
          </ul>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price__condition">до 3 часов</span>
              <span className="price">6 000 рублей</span>
            </div>
            <div className="price__wrapper">
              <span className="price__condition">дополнительный час</span>
              <span className="price">10 000 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(1)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">Вы заполняете анкету или мы общаемся лично, я анализирую ваш запрос, после чего я делаю предварительный шопинг, чтобы заблаговременно собрать и подготовить комплекты для примерки, и сэкономить ваше время.
          </p>
          <p className="service__descr_text">Если какие-то вещи не подошли или не нашли подходящие, даю ссылки на вещи в онлайн магазинах.
            Вещи подбираются исходя из ваших задач, параметров фигуры и бюджета, предпочитаемых брендов, которые
            понравятся вам! Решение о покупке естественно
            принимает клиент, и мы обязательно подберем вариант, который вы одобрите.
          </p>
          <p className="service__descr_text">В подарок на 3 месяца online поддержка по поводу составления комплектов и новых покупок.
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">7 000 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(2)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">Включает в себя разбор гардероба, шопинг-сопровождение, после чего у вас дома я  составляю максимальное
            количество комплектов  из новых и старых вещей.
          </p>
          <p className="service__descr_text">В подарок на 3 месяца online поддержка по поводу составления комплектов и новых покупок.
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">10 000 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(3)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">Капсула составляется для конкретных целей, озвученных вами (вы заполняете анкету), и содержит до 20 вещей.
          </p>
          <p className="service__descr_text">
            По итогу вы получаете презентацию с готовой капсулой и вариантами комплектов. Все вещи с прямыми ссылками на сайты интернет магазинов.
          </p>
          <p className="service__descr_text">
            Желательно выкупить выбранные вещи в течение недели после отправки презентации (по истечении недели
            возможно части вещей уже не будет в наличии).
          </p>
          <p className="service__descr_text">
            Если после выкупа вещей, что-то не подошло, подбираем альтернативные варианты.
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">5 000 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(4)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">
            ONLINE СОПРОВОЖДЕНИЕ
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus ipsam corporis, ducimus magni numquam incidunt optio quam assumenda nesciunt rem facilis, enim provident nemo eum et tempore blanditiis ea.
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">2 000 рублей</span>
              <span className="price__condition">1 месяц</span>
            </div>
            <div className="price__wrapper">
              <span className="price">12 000 рублей</span>
              <span className="price__condition">12 месяцев</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(5)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">
            2 образа, подходящих вам и под локацию.
            Рекомендации по прическе и макияжу.
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">от 3 500 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(6)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">
            ОБРАЗ НА МЕРОПРИЯТИЕ
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam consequatur mollitia incidunt magni. Reprehenderit distinctio voluptate accusamus dolorum asperiores doloremque, non eligendi. Aut, a. Sed esse repellat in velit quidem!
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">Online от 3 500 рублей</span>
            </div>
            <div className="price__wrapper">
              <span className="price">Offline от 3 000 рублей</span>
            </div>
          </div>
        </div>

        <div className="service__descr hidden">
          <div className="service__descr_close" onClick={()=>open(7)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <p className="service__descr_text">Книга стиля является отличным помощником для людей, желающих найти свой стиль. Следуя индивидуальным
            советам, данным в книге стиля, можно научиться
            правильно преподносить себя, почувствовать уверенность в себе и обрести гармонию с собой.</p>
          <ul className="service__descr_ul">
            <span>Книга стиля содержит:</span>
            <li>- палитру цветов (оттенки, которые будут лучше всего гармонировать с естественными оттенками внешности);</li>
            <li>рекомендации по </li>
            <li>-сочетаниям цветов;</li>
            <li>-фасонам одежды;</li>
            <li>-пропорции в одежде;</li>
            <li>-обуви;</li>
            <li>-украшениям;</li>
            <li>-тканям (текстура, фактура и рисунок);</li>
            <li>-формулы составления комплектов;</li>
          </ul>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">7 000 рублей</span>
            </div>
        </div>
        </div>
  </section>
  )
}

export default Services;
import "./servicesPage.sass"
import Service from "../../components/service/Service";
import {useEffect, useState} from "react";

const Services = () => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const body = document.querySelector("body")
  const html = document.querySelector("html")


  function open(n){
  const arrDescr = document.querySelectorAll('.service__descr')
  const arrPrice = document.querySelectorAll('.service__descr_price')
  body.classList.add('html_hidden')
  arrDescr[n].classList.remove('hidden');
  arrPrice[n].classList.remove('hidden');
  arrDescr[n].style.top=`${html.scrollTop + 'px'}`
  }

  function close(n, e){
  const arrDescr = document.querySelectorAll('.service__descr')
  const arrPrice = document.querySelectorAll('.service__descr_price')
    if(e.target.classList.contains('service__descr') ||
    e.target.classList.contains('service__descr_svg')){
      body.classList.remove('html_hidden')
      arrDescr[n].classList.add('hidden')
      arrPrice[n].classList.add('hidden')
      arrDescr[n].style.top=`${'-150%'}`;
    }
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
    <div className="center_container relative" >
      <div className="service__grid">
      <img id="img" src="/media/img/main/service/1.jpg" alt="" />
        {loading? state.map((e, i)=>(
          <Service title={e.name} fnc={open} arg={i} key={i}/>
        ))
          : <h4>LOADING</h4>
        }
      </div>
    </div>
    
    {loading ?
        <div className="service__descr hidden" onClick={(e)=>close(0, e)}>
          <div className="service__descr_close" onClick={(e)=>close(0, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[0].name}
          </h3>
          <ul className="service__descr_ul">
          <span>{state[0].ul_title1}</span>
            {state[0].ul_li1.map((li, i) =>(
              <li key={i}>- {li}</li>
            ))}
          </ul>
         
          <p className="service__descr_text">
          {state[0].p}
          </p>
          <ul className="service__descr_ul">
            <span>{state[0].ul_title2}</span>
            {state[0].ul_li2.map((li, i) =>(
              <li key={i}>- {li}</li>
            ))}
          </ul>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price__condition">{state[0].price_text}</span>
              <span className="price">{state[0].price}</span>
            </div>
            <div className="price__wrapper">
              <span className="price__condition">{state[0].price2_text}</span>
              <span className="price">{state[0].price2}</span>
            </div>
          </div>
            
        </div>
      : <h1>Загружается</h1>
    }

    {loading ?
        <div className="service__descr hidden" onClick={(e)=>close(1, e)}>
          <div className="service__descr_close" onClick={(e)=>close(1, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[1].name}
          </h3>
          {state[1].p.map((p,i)=>(
          <p className="service__descr_text" key={i}>
            {p}
          </p>
          ))}
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">7 000 рублей</span>
            </div>
          </div>
        </div>
      : <h1>Загружается</h1>
    }
    
    {loading ? <div className="service__descr hidden" onClick={(e)=>close(2, e)}>
          <div className="service__descr_close" onClick={(e)=>close(2, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[2].name}
          </h3>
          {state[2].p.map((p,i)=>(
          <p className="service__descr_text" key={i}>
            {p}
          </p>
          ))}
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">{state[2].price}</span>
            </div>
          </div>
        </div>
    : <h1>Загружается</h1>}
        
    {loading? <div className="service__descr hidden" onClick={(e)=>close(3, e)}>
          <div className="service__descr_close" onClick={(e)=>close(3, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[3].name}
          </h3>
          {state[3].p.map((p,i)=>(
          <p className="service__descr_text" key={i}>
            {p}
          </p>
          ))}
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">{state[3].price}</span>
            </div>
          </div>
        </div> : <h1>Загружается</h1>
    }
        
      { loading ? 
      <div className="service__descr hidden" onClick={(e)=>close(4, e)}>
      <div className="service__descr_close" onClick={(e)=>close(4, e)}>
        <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
      </div>
      <h3 className="service__descr_title">
            {state[4].name}
          </h3>
      {state[4].p.map((p,i)=>(
        <p className="service__descr_text" key={i}>
          {p}
        </p>))
      }
      <div className="service__descr_price hidden">
        <div className="price__wrapper">
          <span className="price">{state[4].price}</span>
          <span className="price__condition">{state[4].price_text}</span>
        </div>
        <div className="price__wrapper">
          <span className="price">{state[4].price2}</span>
          <span className="price__condition">{state[4].price2_text}</span>
        </div>
      </div>
    </div> : <h1>Загружается</h1>
    }
        
        {loading? <div className="service__descr hidden" onClick={(e)=>close(5, e)}>
          <div className="service__descr_close" onClick={(e)=>close(5, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[5].name}
          </h3>
          <p className="service__descr_text">
          {state[5].p}
          </p>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">{state[5].price}</span>
            </div>
          </div>
        </div> : <h1>Загружается</h1>}
        
      {loading ? <div className="service__descr hidden" onClick={(e)=>close(6, e)}>
          <div className="service__descr_close" onClick={(e)=>close(6, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[6].name}
          </h3>
          
          {state[6].p.map((p, i)=>(
            <p className="service__descr_text" key={i}>{p}</p>
          ))}
          
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
            <span className="price">{state[6].price_text}&nbsp;</span>
              <span className="price">{state[6].price}</span>
            </div>
            <div className="price__wrapper">
            <span className="price">{state[6].price2_text}&nbsp;</span>
              <span className="price">{state[6].price2}</span>
            </div>
          </div>
        </div> :  <h1>Загружается</h1>}
        
    {loading ? <div className="service__descr hidden" onClick={(e)=>close(7, e)}>
          <div className="service__descr_close" onClick={(e)=>close(7, e)}>
            <img className="service__descr_svg" src="media/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {state[7].name}
          </h3>
          <p className="service__descr_text">
          {state[7].p}
          </p>
          <ul className="service__descr_ul">
            <span>{state[7].ul_title}</span>
           {state[7].ul_li.map((li, i)=>(
            <li key={i}>{li};</li>
           ))}
          </ul>
          <div className="service__descr_price hidden">
            <div className="price__wrapper">
              <span className="price">{state[7].price}</span>
            </div>
        </div>
        </div>  : <h1>Загружается</h1>}
        
  </section>
  )
}

export default Services;
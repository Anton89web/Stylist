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
  body.style.overflow='hidden';
  arrDescr[n].classList.remove('hidden');
  arrPrice[n].classList.remove('hidden');
  arrDescr[n].style.top=`${html.scrollTop + 'px'}`
  }

  function close(n, e){
  const arrDescr = document.querySelectorAll('.service__descr')
  const arrPrice = document.querySelectorAll('.service__descr_price')
    if(e.target.classList.contains('service__descr') ||
    e.target.classList.contains('service__descr_svg')){
      body.style.overflow='';
      arrDescr[n].classList.add('hidden')
      arrPrice[n].classList.add('hidden')
      arrDescr[n].style.top=`${'-150%'}`;
    }
  }


  useEffect(() => {
    fetch("https://dismirnova.ru/api/v1/services/")
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
      <img id="img" src="static/img/main/service/1.jpg" alt="" />
        {loading? state.map((e, i)=>(
          <Service title={e.title} fnc={open} arg={i} key={i}/>
        ))
          : <h4>Загружается...</h4>
        }
      </div>
    </div>
    
    {loading ?

      state.map((e, i) =>(
        <div className="service__descr hidden" onClick={(e)=>close(i, e)}>
          <div className="service__descr_close" onClick={(e)=>close(i, e)}>
            <img className="service__descr_svg" src="static/icons/cross.svg" alt=""/>
          </div>
          <h3 className="service__descr_title">
            {e.title}
          </h3>
          <div className="service__descr_text">
          {e.description}
          </div>
          <div className="service__descr_price hidden">
          {e.price.includes('  ')?
          <>
              <div className="price__wrapper">
              <span className="price__condition">{e.price.slice(0, e.price.indexOf('  '))}</span>
              <span className="price">{e.price.slice(e.price.indexOf('  '))}</span>
            </div>
            <div className="price__wrapper">
              <span className="price__condition">{e.price2.slice(0, e.price2.indexOf('  '))}</span>
              <span className="price">{e.price2.slice(e.price2.indexOf('  '))}</span>
            </div>
            </>  
            :
            <>
            <div className="price__wrapper">
              <span className="price">{e.price}</span>
            </div>
            <div className="price__wrapper">
              <span className="price">{e.price2}</span>
            </div>
            </>
            }
          </div>
            
        </div>
      ))
        
      : <h1>Загружается</h1>
    }
  </section>
  )
}

export default Services;
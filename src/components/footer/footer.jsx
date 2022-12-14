import Header from "../header/header";
import "./footer.sass"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="center_container">
        <h3 className="contacts__title">
          КОНТАКТЫ
          <img className="contacts__eng" src="static/icons/contacts.svg" alt=""/>
        </h3>
        <p className="contacts__subtitle">
          Свяжитесь со мной любым удобным для вас способом!
        </p>
        <a className="contacts__mail" href="mailto:sdiana070@gmail.com">sdiana070@gmail.com</a>
        <br/>
        <a className="contacts__tel" href="tel:+7 (906) 307 73 03">+7 (906) 307 73 03</a>
        <br />
        <a className="contacts__whatsapp" href="https://wa.me/79063077303">
          Написать в Whatsapp
        </a>
        <div className="social__wrapp">
          <a className="social__icon" href="https://instagram.com/vstile.di" target="_blank" rel="noreferrer">
            <img src="static/icons/insta.svg" alt="" />
          </a>
          <a className="social__icon" href="https://vk.com/style_sar" target="_blank" rel="noreferrer">
            <img src="static/icons/vk.svg" alt="" />
          </a>
        </div>
      </div>
      <Header burger={true}/>
    </footer>
  )
} 

export default Footer
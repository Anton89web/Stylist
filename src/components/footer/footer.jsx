import Header from "../header/header";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="center_container">
        <h3 className="contacts__title">
          КОНТАКТЫ
        </h3>
        <p className="contacts__subtitle">
          Свяжитесь со мной любым удобным для вас способом!
        </p>
        <a className="contacts__mail" href="mailto:sdiana070@gmail.com">sdiana070@gmail.com</a>
        <a className="contacts__tel" href="tel:+7 (906) 307 73 03">+7 (906) 307 73 03</a>
        <div className="social__wrapp">
          <a className="social__icon" href="#">
            <img src="media/icons/insta.svg" alt="" />
          </a>
          <a className="social__icon" href="#">
            <img src="media/icons/vk.svg" alt="" />
          </a>
        </div>
      </div>
      <Header/>
    </footer>
  )
} 

export default Footer
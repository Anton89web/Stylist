import { NavLink } from "react-router-dom";
import './header.sass'


const Header = ({burger}) => {
  function showMenu(){
    document.querySelector(".nav__links").classList.toggle("show_menu")
    const row = document.querySelectorAll(".burger__row")
    row[0].classList.toggle("row_top")
    row[1].classList.toggle("row_middle")
    row[2].classList.toggle("row_bottom")
  }
  function scrollToMenu(){
  window.scrollTo({
  top: document.body.scrollTop,
  behavior: 'smooth'
})}
  const setActive = ({isActive}) => isActive ? "active_link" : "nav__link";
  return (
    <div className="header">
      <div className="container">
        <ul className="nav__links">
          <li>
            <NavLink to='main' className={setActive} onClick={(e)=> showMenu()}>
              ГЛАВНАЯ СТРАНИЦА
            </NavLink>
          </li>
          <li >
            <NavLink  to="about" className={setActive} onClick={(e)=> showMenu()}>
              ОБО МНЕ
            </NavLink>
          </li>
          <li>
            <NavLink to="services" className={setActive} onClick={(e)=> showMenu()}>
              УСЛУГИ
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className={setActive} onClick={(e)=> showMenu()}>
              ПОРТФОЛИО
            </NavLink>
          </li>
          <li>
            <NavLink to="blog" className={setActive} onClick={(e)=> showMenu()}>
              БЛОГ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={setActive} onClick={(e)=> showMenu()}>
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
        {burger ? "" : <div className="burger"  onClick={()=> (showMenu(), scrollToMenu())}>
          <span className="burger__row"></span>
          <span className="burger__row"></span>
          <span className="burger__row"></span>
        </div>}
      </div>
    </div>
  )
}

export default Header;
import { NavLink } from "react-router-dom";
import './header.sass'


const Header = () => {
  const setActive = ({isActive}) => isActive ? "active_link" : "nav__link";
  return (
    <div className="header">
      <div className="container">
        <ul className="nav__links">
          <li>
            <NavLink to="main" className={setActive}>
              ГЛАВНАЯ СТРАНИЦА
            </NavLink>
          </li>
          <li >
            <NavLink  to="about" className={setActive}>
              ОБО МНЕ
            </NavLink>
          </li>
          <li>
            <NavLink to="services" className={setActive}>
              УСЛУГА
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className={setActive}>
              ПОРТФОЛИО
            </NavLink>
          </li>
          <li>
            <NavLink to="blog" className={setActive}>
              БЛОГ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={setActive}>
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
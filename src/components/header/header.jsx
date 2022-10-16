import './header.sass'


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <ul className="nav__links">
          <li className="nav__link">
            <a>ГЛАВНАЯ СТАНИЦА</a>
          </li>
          <li className="nav__link">
            <a>ОБО МНЕ</a>
          </li>
          <li className="nav__link">
            <a>УСЛУГИ</a>
          </li>
          <li className="nav__link">
            <a>ПОРТФОЛИО</a>
          </li>
          <li className="nav__link">
            <a>БЛОГ</a>
          </li>
          <li className="nav__link">
            <a>КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
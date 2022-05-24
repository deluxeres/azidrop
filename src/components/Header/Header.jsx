import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import userProfile from '../../Assets/images/Header/user.png'
import headerLogo from '../../Assets/images/Header/logo.png'
 
function Header() {
  return (
    <div className="header">
      <div className="container">
      <div className="header__menu">
              <div className="header__left">
                <div className="header__logo">
                    <Link to="/">
                    <img src={headerLogo} alt="logotype"/>
                      <span className="header__logotype">AziDrop</span>
                    </Link>
                </div>
                <div className="header__link">
                    <nav>
                      <ul>
                        <li>
                          <Link className="headerMenu__link" to="/cases">Кейсы</Link>
                        </li>
                        <li>
                        <Link className="headerMenu__link" to="/cases">Тестовая страница</Link>
                        </li>
                        <li>
                          <Link className="headerMenu__link" to="/cases">Страница</Link>
                        </li>
                      </ul>
                    </nav>
                </div>
              </div>
              <div className="header__right">
                  <div className="header-profile">
                    <span className="header-profile__name">LindseyOwsen</span>
                    <div className="header-profile__user">
                        <div className="header-profile__img">
                          <img src={userProfile} alt="user"/>
                        </div>
                        <div className="header-profile__counter">
                          <span>3</span>
                        </div>
                    </div>
                    <div className="header-profile__balance">
                      <span>5,56 $</span>
                    </div>
                    <button className="header-profile__deposit">Пополнить</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header
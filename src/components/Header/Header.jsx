import React, {useState} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import {Input, Text} from '@chakra-ui/react'
import userProfile from '../../Assets/images/Header/user.png'
import headerLogo from '../../Assets/images/Header/logo.png'
 
function Header() {

  const [show, setShow] = useState(false)

  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

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
                          <Link className="headerMenu__link" to="/contracts">Контракты</Link>
                        </li>
                        <li>
                        <Link className="headerMenu__link" to="/cases">FAQ</Link>
                        </li>
                        <li>
                          <Link className="headerMenu__link" to="/cases">Ежедневный бонус</Link>
                        </li>
                      </ul>
                    </nav>
                </div>
              </div>
              <div className="header__right">
                  <div className="header-profile">
                    <span className="header-profile__name">admin</span>
                    <div className="header-profile__user">
                        <div className="header-profile__img">
                          <img src={userProfile} alt="user"/>
                        </div>
                        <div className="header-profile__counter">
                          <span>3</span>
                        </div>
                    </div>
                    <div className="header-profile__balance">
                      <span>0,00 Р</span>
                    </div>
                    <button onClick={() => setShow(!show)} className="header-profile__deposit">Пополнить</button>
                  </div>
              </div>
            {show &&
              <div className="pay-popup">
                <div className="popup-modal">
                    <div className="popup-modal__container">
                        <button className="popup-modal__btn" onClick={() => setShow(!show)}><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="23px" height="23px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg></button>
                        <div className="popup-modal__title">
                          <p>Пополнение баланса</p>
                        </div>
                        <div className="popup-modal__sum">
                          <Text color="white" mb='8px' mt="15px">К оплате: {value} руб.</Text>
                          <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='Введите сумму пополнения'
                            size='sm'
                          />
                        </div>
                        <div className="popup-modal__limit">
                            <img src="https://forcedrop.app/public/img/icon_attention.svg?v=2" alt='limit'/>
                            <span>Минимальная сумма: 80 RUB</span>
                        </div>
                        <button className="popup-modal__pay">Пополнить счет</button>
                    </div>
                </div>
              </div>
            }
          </div>
      </div>
    </div>
  )
}

export default Header
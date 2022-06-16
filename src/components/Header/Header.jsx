import React, { useState } from "react";
import "./header.scss";
import contractImg from "../../Assets/images/Header/contracts.png"
import battleImg from "../../Assets/images/Header/battle.png"
import upgradeImg from "../../Assets/images/Header/upgrade.png"
import bonusImg from "../../Assets/images/Header/bonus.png"
import { Link } from "react-router-dom";
import { Input, Text } from "@chakra-ui/react";

function Header() {
  const [show, setShow] = useState(false);

  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);


  return (
    <div className="header-section">
      <div className="header">
        <div className="container">
          <div className="header__menu">
            <div className="header__right">
              <Link to="/profile" className="header-profile">
                <div className="header__right-profile">
                  <div className="header-profile__user">
                    <div className="header-profile__img">
                      <img
                        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/69/6944253d1584dbae9258919e300c2734dd94b035_full.jpg"
                        alt="user"
                      />
                    </div>
                  </div>  
                  <div className="header-profile__block">
                    <span className="header-profile__name">admin</span>
                    <div className="header-profile__balance">
                      <span>0.00 Р</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShow(!show)}
                  className="header-profile__deposit"
                >
                  Пополнить
                </button>
              </Link>
            </div>
            <div className="header__left">
              <div className="header__link">
                <nav>
                  <ul>
                    <li>
                      <Link className="headerMenu__link" to="/contracts">
                        <div className="header-svg">
                          <img src={contractImg} alt="link"/>
                        </div>
                        Контракты
                      </Link>
                    </li>
                    <li>
                      <Link className="headerMenu__link" to="/cases">
                        <div className="header-svg">
                          <img src={battleImg} alt="link"/>
                        </div>
                        Сражения
                      </Link>
                    </li>
                    <li>
                      <Link className="headerMenu__link" to="/dailybonus">
                        <div className="header-svg">
                          <img src={upgradeImg} alt="link"/>
                        </div>
                        Upgrade
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <Link to="/bonus" className="header__menu-btn">Бонусы</Link>
            {show && (
              <div className="pay-popup">
                <div className="popup-modal">
                  <div className="popup-modal__container">
                    <button
                      className="popup-modal__btn"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="23px"
                        height="23px"
                      >
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                      </svg>
                    </button>
                    <div className="popup-modal__title">
                      <p>Пополнение баланса</p>
                    </div>
                    <div className="popup-wrapper">
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/cards.e2f19d4d.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/qiwi.78b0a233.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/youmoney.ed9a1d75.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/alfabank.22ba2811.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/ecopayz.5840fd41.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/tron.81a8c177.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/sberbank.c77a6642.svg"
                          alt="card"
                        />
                      </div>
                      <div className="tab-card">
                        <img
                          src="https://ggdrop.gg/static/media/bitcoin.4660a169.svg"
                          alt="card"
                        />
                      </div>
                    </div>
                    <div className="popup-modal__sum">
                      <Text color="white" mb="20px" mt="15px">
                        К оплате: {value} руб.
                      </Text>
                      <Input
                        value={value}
                        onChange={handleChange}
                        placeholder="Введите сумму пополнения"
                        size="sm"
                      />
                    </div>
                    <div className="popup-modal__sum">
                      <input
                        placeholder="FREE#234235"
                        size="sm"
                      />
                    </div>
                    <button className="popup-modal__pay">Пополнить счет</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

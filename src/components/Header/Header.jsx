import React, { useState } from "react";
import "./header.scss";
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
              {/* <div className="header__logo">
                <Link to="/">
                  <img src={headerLogo} alt="logotype" />
                  <span className="header__logotype">AziDrop</span>
                </Link>
              </div> */}
              <div className="header__link">
                <nav>
                  <ul>
                    <li>
                      <Link className="headerMenu__link" to="/contracts">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="45"
                          viewBox="0 0 15 17"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5 0.041748L0 13.0321H1.99509L7.49991 3.4975L13.0047 13.0321H15L7.5 0.041748ZM2.30376 16.0632L7.55376 6.96995L12.8038 16.0632H2.30376ZM5.30376 14.3312L7.55376 10.4341L9.80376 14.3312H5.30376Z"
                            fill="url(#paint0_linear)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="24.375"
                              y1="-20.0934"
                              x2="-0.220872"
                              y2="19.4016"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FC4743" />
                              <stop offset="1" stopColor="#FFE910" />
                            </linearGradient>
                          </defs>
                        </svg> */}
                        Контракты
                      </Link>
                    </li>
                    <li>
                      <Link className="headerMenu__link" to="/cases">
                        Сражения
                      </Link>
                    </li>
                    <li>
                      <Link className="headerMenu__link" to="/dailybonus">
                        Ежедневный бонус
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header__menu-btn"></div>
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

import React from "react";
import "./Dailybonus.scss";
import {Link} from "react-router-dom";

function Dailybonus() {
  return (
    <div className="dailybonus">
      <div className="container">
        <div className="bonus-wrapper">
          <div className="bonus-section">
            <span className="bonus-section-text">
              Получайте свой ежедневный бонус простым кликом на кнопку!
            </span>
            <div className="bonus-form">
              <div className="bonus-code">
                <input placeholder="Секретный код" />
                <button></button>
              </div>
            </div>
            <div className="bonus-info">
              <div className="bonus-info__top">
                <div className="bonus-info__icon"></div>
                <div className="bonus-info__text">
                  У вас есть неиспользованные бонусы, бесплатные кейсы, скидка
                  на кейс или дропы из бесплатного кейса, полученного из
                  ежедневного бонуса. При следующем получении бонуса предыдущие{" "}
                  <b>БОНУСЫ СГОРАЮТ</b>, используйте их своевременно
                </div>
                <div className="bonus-info__btn">
                  <Link to="/profile">Ваши бонусы</Link>
                </div>
              </div>
            </div>
            <div className="bonus-how-work">
              <div className="bonus-work__wrapper">
                <div className="bonus-work__item">
                  <div className="bonus-work__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="182"
                      height="106"
                      viewBox="0 0 182 106"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="180"
                        height="104"
                        rx="13"
                        stroke="#37316B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 28C21 22.4772 25.4772 18 31 18H151C156.523 18 161 22.4772 161 28V48C158.239 48 156 50.2386 156 53C156 55.7614 158.239 58 161 58V78C161 83.5229 156.523 88 151 88H31C25.4772 88 21 83.5229 21 78V58C23.7614 58 26 55.7614 26 53C26 50.2386 23.7614 48 21 48V28Z"
                        fill="#2D285F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33 22H72V23H33C29.134 23 26 26.134 26 30V44H25V30C25 25.5817 28.5817 22 33 22ZM149 23H110V22H149C153.418 22 157 25.5817 157 30V44H156V30C156 26.134 152.866 23 149 23ZM25 62V76C25 80.4183 28.5817 84 33 84H82V83H33C29.134 83 26 79.866 26 76V62H25ZM100 83V84H149C153.418 84 157 80.4183 157 76V62H156V76C156 79.866 152.866 83 149 83H100Z"
                        fill="#45417A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.1988 28.1818C92.1988 28.8345 91.6621 29.3636 91.0001 29.3636C90.338 29.3636 89.8013 28.8345 89.8013 28.1818C89.8013 27.5291 90.338 27 91.0001 27C91.6621 27 92.1988 27.5291 92.1988 28.1818ZM92.1988 77.8182C92.1988 78.4709 91.6621 79 91.0001 79C90.338 79 89.8013 78.4709 89.8013 77.8182C89.8013 77.1655 90.338 76.6364 91.0001 76.6364C91.6621 76.6364 92.1988 77.1655 92.1988 77.8182ZM72.3515 69.7134C72.8197 69.2519 73.5787 69.2519 74.0468 69.7134C74.515 70.1749 74.515 70.9232 74.0468 71.3848C73.5787 71.8463 72.8197 71.8463 72.3515 71.3848C71.8834 70.9232 71.8834 70.1749 72.3515 69.7134ZM107.954 34.6152C108.422 34.1537 109.181 34.1537 109.649 34.6152C110.117 35.0767 110.117 35.825 109.649 36.2865C109.181 36.7481 108.422 36.7481 107.954 36.2865C107.485 35.825 107.485 35.0767 107.954 34.6152ZM74.0464 36.2867C74.5146 35.8252 74.5146 35.0769 74.0464 34.6154C73.5783 34.1538 72.8193 34.1538 72.3511 34.6154C71.883 35.0769 71.883 35.8252 72.3511 36.2867C72.8193 36.7482 73.5783 36.7482 74.0464 36.2867ZM109.648 71.3849C110.117 70.9234 110.117 70.1751 109.648 69.7136C109.18 69.2521 108.421 69.2521 107.953 69.7136C107.485 70.1751 107.485 70.9234 107.953 71.3849C108.421 71.8464 109.18 71.8464 109.648 71.3849Z"
                        fill="#45417A"
                      />
                      <circle cx="91" cy="79" r="3" fill="#45417A" />
                      <circle cx="91" cy="27" r="3" fill="#9E5CF5" />
                      <path
                        d="M100.912 19.0227C105.438 24.5132 104.328 32.028 98.9878 36.4298C93.6481 40.8316 86.0595 40.4874 81.5335 34.9969C80.1898 33.379 79.2585 31.4594 78.8196 29.4026C78.3806 27.3459 78.4471 25.2133 79.0133 23.1879L82.9482 24.6273C82.3096 27.1427 82.7842 29.9338 84.5413 32.0654C87.4699 35.6181 92.8697 36.0488 96.3255 33.2001C99.7812 30.3514 100.389 24.9686 97.4601 21.4159C95.7118 19.2951 93.0822 18.2986 90.5019 18.4366L90.4915 21.736L83.0136 17.0515L90.5496 10.8394L90.5259 14.2762C92.5042 14.2245 94.4681 14.6252 96.268 15.4477C98.0679 16.2703 99.6562 17.4931 100.912 19.0227Z"
                        fill="#9E5CF5"
                      />
                    </svg>
                    <div className="bonus-item__title">24 часа</div>
                  </div>
                  <div className="bonus-item__text">
                    Спустя это время вы получите еще один бонус
                  </div>
                </div>
                <div className="bonus-work__item">
                  <div className="bonus-work__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="182"
                      height="106"
                      viewBox="0 0 182 106"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="180"
                        height="104"
                        rx="13"
                        stroke="#37316B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 28C21 22.4772 25.4772 18 31 18H151C156.523 18 161 22.4772 161 28V48C158.239 48 156 50.2386 156 53C156 55.7614 158.239 58 161 58V78C161 83.5229 156.523 88 151 88H31C25.4772 88 21 83.5229 21 78V58C23.7614 58 26 55.7614 26 53C26 50.2386 23.7614 48 21 48V28Z"
                        fill="#2D285F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33 22H72V23H33C29.134 23 26 26.134 26 30V44H25V30C25 25.5817 28.5817 22 33 22ZM149 23H110V22H149C153.418 22 157 25.5817 157 30V44H156V30C156 26.134 152.866 23 149 23ZM25 62V76C25 80.4183 28.5817 84 33 84H82V83H33C29.134 83 26 79.866 26 76V62H25ZM100 83V84H149C153.418 84 157 80.4183 157 76V62H156V76C156 79.866 152.866 83 149 83H100Z"
                        fill="#45417A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.1988 28.1818C92.1988 28.8345 91.6621 29.3636 91.0001 29.3636C90.338 29.3636 89.8013 28.8345 89.8013 28.1818C89.8013 27.5291 90.338 27 91.0001 27C91.6621 27 92.1988 27.5291 92.1988 28.1818ZM92.1988 77.8182C92.1988 78.4709 91.6621 79 91.0001 79C90.338 79 89.8013 78.4709 89.8013 77.8182C89.8013 77.1655 90.338 76.6364 91.0001 76.6364C91.6621 76.6364 92.1988 77.1655 92.1988 77.8182ZM72.3515 69.7134C72.8197 69.2519 73.5787 69.2519 74.0468 69.7134C74.515 70.1749 74.515 70.9232 74.0468 71.3848C73.5787 71.8463 72.8197 71.8463 72.3515 71.3848C71.8834 70.9232 71.8834 70.1749 72.3515 69.7134ZM107.954 34.6152C108.422 34.1537 109.181 34.1537 109.649 34.6152C110.117 35.0767 110.117 35.825 109.649 36.2865C109.181 36.7481 108.422 36.7481 107.954 36.2865C107.485 35.825 107.485 35.0767 107.954 34.6152ZM74.0464 36.2867C74.5146 35.8252 74.5146 35.0769 74.0464 34.6154C73.5783 34.1538 72.8193 34.1538 72.3511 34.6154C71.883 35.0769 71.883 35.8252 72.3511 36.2867C72.8193 36.7482 73.5783 36.7482 74.0464 36.2867ZM109.648 71.3849C110.117 70.9234 110.117 70.1751 109.648 69.7136C109.18 69.2521 108.421 69.2521 107.953 69.7136C107.485 70.1751 107.485 70.9234 107.953 71.3849C108.421 71.8464 109.18 71.8464 109.648 71.3849Z"
                        fill="#45417A"
                      />
                      <circle cx="91" cy="79" r="3" fill="#45417A" />
                      <circle cx="91" cy="27" r="3" fill="#9E5CF5" />
                      <path
                        d="M100.912 19.0227C105.438 24.5132 104.328 32.028 98.9878 36.4298C93.6481 40.8316 86.0595 40.4874 81.5335 34.9969C80.1898 33.379 79.2585 31.4594 78.8196 29.4026C78.3806 27.3459 78.4471 25.2133 79.0133 23.1879L82.9482 24.6273C82.3096 27.1427 82.7842 29.9338 84.5413 32.0654C87.4699 35.6181 92.8697 36.0488 96.3255 33.2001C99.7812 30.3514 100.389 24.9686 97.4601 21.4159C95.7118 19.2951 93.0822 18.2986 90.5019 18.4366L90.4915 21.736L83.0136 17.0515L90.5496 10.8394L90.5259 14.2762C92.5042 14.2245 94.4681 14.6252 96.268 15.4477C98.0679 16.2703 99.6562 17.4931 100.912 19.0227Z"
                        fill="#9E5CF5"
                      />
                    </svg>
                    <div className="bonus-item__title">24 часа</div>
                  </div>
                  <div className="bonus-item__text">
                    Использовать промокоды на получение бонуса можно только один
                    раз за данный период
                  </div>
                </div>
                <div className="bonus-work__item">
                  <div className="bonus-work__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="182"
                      height="106"
                      viewBox="0 0 182 106"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="180"
                        height="104"
                        rx="13"
                        stroke="#37316B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 28C21 22.4772 25.4772 18 31 18H151C156.523 18 161 22.4772 161 28V48C158.239 48 156 50.2386 156 53C156 55.7614 158.239 58 161 58V78C161 83.5229 156.523 88 151 88H31C25.4772 88 21 83.5229 21 78V58C23.7614 58 26 55.7614 26 53C26 50.2386 23.7614 48 21 48V28Z"
                        fill="#2D285F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33 22H72V23H33C29.134 23 26 26.134 26 30V44H25V30C25 25.5817 28.5817 22 33 22ZM149 23H110V22H149C153.418 22 157 25.5817 157 30V44H156V30C156 26.134 152.866 23 149 23ZM25 62V76C25 80.4183 28.5817 84 33 84H82V83H33C29.134 83 26 79.866 26 76V62H25ZM100 83V84H149C153.418 84 157 80.4183 157 76V62H156V76C156 79.866 152.866 83 149 83H100Z"
                        fill="#45417A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.1988 28.1818C92.1988 28.8345 91.6621 29.3636 91.0001 29.3636C90.338 29.3636 89.8013 28.8345 89.8013 28.1818C89.8013 27.5291 90.338 27 91.0001 27C91.6621 27 92.1988 27.5291 92.1988 28.1818ZM92.1988 77.8182C92.1988 78.4709 91.6621 79 91.0001 79C90.338 79 89.8013 78.4709 89.8013 77.8182C89.8013 77.1655 90.338 76.6364 91.0001 76.6364C91.6621 76.6364 92.1988 77.1655 92.1988 77.8182ZM72.3515 69.7134C72.8197 69.2519 73.5787 69.2519 74.0468 69.7134C74.515 70.1749 74.515 70.9232 74.0468 71.3848C73.5787 71.8463 72.8197 71.8463 72.3515 71.3848C71.8834 70.9232 71.8834 70.1749 72.3515 69.7134ZM107.954 34.6152C108.422 34.1537 109.181 34.1537 109.649 34.6152C110.117 35.0767 110.117 35.825 109.649 36.2865C109.181 36.7481 108.422 36.7481 107.954 36.2865C107.485 35.825 107.485 35.0767 107.954 34.6152ZM74.0464 36.2867C74.5146 35.8252 74.5146 35.0769 74.0464 34.6154C73.5783 34.1538 72.8193 34.1538 72.3511 34.6154C71.883 35.0769 71.883 35.8252 72.3511 36.2867C72.8193 36.7482 73.5783 36.7482 74.0464 36.2867ZM109.648 71.3849C110.117 70.9234 110.117 70.1751 109.648 69.7136C109.18 69.2521 108.421 69.2521 107.953 69.7136C107.485 70.1751 107.485 70.9234 107.953 71.3849C108.421 71.8464 109.18 71.8464 109.648 71.3849Z"
                        fill="#45417A"
                      />
                      <circle cx="91" cy="79" r="3" fill="#45417A" />
                      <circle cx="91" cy="27" r="3" fill="#9E5CF5" />
                      <path
                        d="M100.912 19.0227C105.438 24.5132 104.328 32.028 98.9878 36.4298C93.6481 40.8316 86.0595 40.4874 81.5335 34.9969C80.1898 33.379 79.2585 31.4594 78.8196 29.4026C78.3806 27.3459 78.4471 25.2133 79.0133 23.1879L82.9482 24.6273C82.3096 27.1427 82.7842 29.9338 84.5413 32.0654C87.4699 35.6181 92.8697 36.0488 96.3255 33.2001C99.7812 30.3514 100.389 24.9686 97.4601 21.4159C95.7118 19.2951 93.0822 18.2986 90.5019 18.4366L90.4915 21.736L83.0136 17.0515L90.5496 10.8394L90.5259 14.2762C92.5042 14.2245 94.4681 14.6252 96.268 15.4477C98.0679 16.2703 99.6562 17.4931 100.912 19.0227Z"
                        fill="#9E5CF5"
                      />
                    </svg>
                    <div className="bonus-item__title">ВАШИ БОНУСЫ</div>
                  </div>
                  <div className="bonus-item__text">
                    Используйте свой прошлый бонус в профиле, иначе он будет
                    заменён новым
                  </div>
                </div>
                <div className="bonus-work__item">
                  <div className="bonus-work__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="182"
                      height="106"
                      viewBox="0 0 182 106"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="180"
                        height="104"
                        rx="13"
                        stroke="#37316B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 28C21 22.4772 25.4772 18 31 18H151C156.523 18 161 22.4772 161 28V48C158.239 48 156 50.2386 156 53C156 55.7614 158.239 58 161 58V78C161 83.5229 156.523 88 151 88H31C25.4772 88 21 83.5229 21 78V58C23.7614 58 26 55.7614 26 53C26 50.2386 23.7614 48 21 48V28Z"
                        fill="#2D285F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33 22H72V23H33C29.134 23 26 26.134 26 30V44H25V30C25 25.5817 28.5817 22 33 22ZM149 23H110V22H149C153.418 22 157 25.5817 157 30V44H156V30C156 26.134 152.866 23 149 23ZM25 62V76C25 80.4183 28.5817 84 33 84H82V83H33C29.134 83 26 79.866 26 76V62H25ZM100 83V84H149C153.418 84 157 80.4183 157 76V62H156V76C156 79.866 152.866 83 149 83H100Z"
                        fill="#45417A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.1988 28.1818C92.1988 28.8345 91.6621 29.3636 91.0001 29.3636C90.338 29.3636 89.8013 28.8345 89.8013 28.1818C89.8013 27.5291 90.338 27 91.0001 27C91.6621 27 92.1988 27.5291 92.1988 28.1818ZM92.1988 77.8182C92.1988 78.4709 91.6621 79 91.0001 79C90.338 79 89.8013 78.4709 89.8013 77.8182C89.8013 77.1655 90.338 76.6364 91.0001 76.6364C91.6621 76.6364 92.1988 77.1655 92.1988 77.8182ZM72.3515 69.7134C72.8197 69.2519 73.5787 69.2519 74.0468 69.7134C74.515 70.1749 74.515 70.9232 74.0468 71.3848C73.5787 71.8463 72.8197 71.8463 72.3515 71.3848C71.8834 70.9232 71.8834 70.1749 72.3515 69.7134ZM107.954 34.6152C108.422 34.1537 109.181 34.1537 109.649 34.6152C110.117 35.0767 110.117 35.825 109.649 36.2865C109.181 36.7481 108.422 36.7481 107.954 36.2865C107.485 35.825 107.485 35.0767 107.954 34.6152ZM74.0464 36.2867C74.5146 35.8252 74.5146 35.0769 74.0464 34.6154C73.5783 34.1538 72.8193 34.1538 72.3511 34.6154C71.883 35.0769 71.883 35.8252 72.3511 36.2867C72.8193 36.7482 73.5783 36.7482 74.0464 36.2867ZM109.648 71.3849C110.117 70.9234 110.117 70.1751 109.648 69.7136C109.18 69.2521 108.421 69.2521 107.953 69.7136C107.485 70.1751 107.485 70.9234 107.953 71.3849C108.421 71.8464 109.18 71.8464 109.648 71.3849Z"
                        fill="#45417A"
                      />
                      <circle cx="91" cy="79" r="3" fill="#45417A" />
                      <circle cx="91" cy="27" r="3" fill="#9E5CF5" />
                      <path
                        d="M100.912 19.0227C105.438 24.5132 104.328 32.028 98.9878 36.4298C93.6481 40.8316 86.0595 40.4874 81.5335 34.9969C80.1898 33.379 79.2585 31.4594 78.8196 29.4026C78.3806 27.3459 78.4471 25.2133 79.0133 23.1879L82.9482 24.6273C82.3096 27.1427 82.7842 29.9338 84.5413 32.0654C87.4699 35.6181 92.8697 36.0488 96.3255 33.2001C99.7812 30.3514 100.389 24.9686 97.4601 21.4159C95.7118 19.2951 93.0822 18.2986 90.5019 18.4366L90.4915 21.736L83.0136 17.0515L90.5496 10.8394L90.5259 14.2762C92.5042 14.2245 94.4681 14.6252 96.268 15.4477C98.0679 16.2703 99.6562 17.4931 100.912 19.0227Z"
                        fill="#9E5CF5"
                      />
                    </svg>
                    <div className="bonus-item__title">1000.00Р</div>
                  </div>
                  <div className="bonus-item__text">
                    Пополните баланс на данную сумму за одну транзакцию и
                    получите дополнительный бонус
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dailybonus;

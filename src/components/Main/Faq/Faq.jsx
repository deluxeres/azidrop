import React from "react";
import "./Faq.scss";
import { Link } from "react-router-dom"
import Statictic from "../Statictic/Statictic"

function Faq() {
  return (
    <div className="faq">
      <div className="container">
        <div className="faq-section">
          <span className="faq-section__title">Часто задаваемые вопросы</span>
          <div className="faq-wrapper">
            <div className="faq-items">
              <div className="faq-item">
                  <div className="faq-item__title">
                      <span>Я открыл кейс, но вещь не приходит, в чем проблема?</span>
                  </div>
                  <div className="faq-item__text">
                      <span><Link  className="faq-item__link" to="/profile">Зайдите в свой профиль</Link> и кликните по ссылке 'ЗАБРАТЬ' на интересующем вас предмете.</span>
                  </div>
              </div>
              <div className="faq-item">
                  <div className="faq-item__title">
                      <span>Пополнил счет, а средства не пришли, почему?</span>
                  </div>
                  <div className="faq-item__text">
                      <span>Средства могут прийти не сразу - подождите 1 час. Если не пришли в течение часа - напишите нам на почту <Link className="faq-item__link" to="/">(support@azidrop.ru)</Link>, указав подробные данные платежа.</span>
                  </div>
              </div>
              <div className="faq-item">
                  <div className="faq-item__title">
                      <span>У меня есть баланс на Steam аккаунте, а тут они не отображаются, почему?</span>
                  </div>
                  <div className="faq-item__text">
                      <span>Баланс Steam не действуют на этом сайте. Пополнять баланс необходимо отдельно.</span>
                  </div>
              </div>
              <div className="faq-item">
                  <div className="faq-item__title">
                      <span>Не могу зайти на сайт через Steam, не грузится страница с кейсами, реклама посреди страницы, да и вообще сайт очень сильно лагает, что делать?</span>
                  </div>
                  <div className="faq-item__text">
                      <span>Чаще всего проблема кроется либо в антивирусе, который блокирует соединение с сайтом, либо в расширениях для браузера, которые показывают рекламу, и, возможно, также блокируют соединение с сайтом. Попробуйте отключить антивирус и удалить подозрительные расширения в браузере. Рекомендуемый для просмотра сайта браузер - Google Chrome.</span>
                  </div>
              </div>
              <div className="faq-item">
                  <div className="faq-item__title">
                      <span>Бонус за адрес сайта в нике Steam?</span>
                  </div>
                  <div className="faq-item__text">
                      <span>Вы можете получить +10% от пополняемой суммы на баланс, если укажете адрес FORCEDROP.GG в свой ник в Steam! Подробности: после указания адреса сайта в никнейме Steam Вы должны выйти из профиля на сайте (сделать релогин) и зайти снова. Должно пройти 24 часа с момента указания Вами адреса сайта в нике Steam. После чего Вы можете пополнять баланс и бонус добавится автоматически после пополнения. Бонус за адрес сайта в нике суммируется с другими бонусами, например промокодами. Если Вы ввели промокод на +25% при пополнении и у Вас указан адрес сайта в нике, то Вы уже получите +35% от пополняемой суммы сверху на баланс сайта!</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Statictic />
      </div>
    </div>
  );
}

export default Faq;

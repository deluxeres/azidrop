import React, { useEffect, useState } from "react";
import "./Faq.scss";
import { Link } from "react-router-dom";
import Statictic from "../Statictic/Statictic";
import { useGetLoyalityQuery, useGetSettingsQuery} from "../../../app/services/caseApi";

function Faq() {
  const { data, isLoading } = useGetLoyalityQuery();
  const setData = useGetSettingsQuery();

  console.log(setData)

  return isLoading ? null : (
    <div className="faq">
      <div className="container">
        <div className="faq-section">
          <span className="faq-section__title">Часто задаваемые вопросы</span>
          <div className="faq-wrapper">
            <div className="faq-items">
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>
                    Я открыл кейс, но вещь не приходит, в чем проблема?
                  </span>
                </div>
                <div className="faq-item__text">
                  <span>
                    <Link className="faq-item__link" to="/profile">
                      Зайдите в свой профиль
                    </Link>{" "}
                    и кликните по ссылке 'ЗАБРАТЬ' на интересующем вас предмете.
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>
                    После пополнения баланса деньги не поступили на счет
                  </span>
                </div>
                <div className="faq-item__text">
                  <span>
                    Средства могут прийти не сразу, если спустя час деньги не
                    поступили на счет - напишите нам на почту{" "}
                    <Link className="faq-item__link" to="/">
                      ({setData.data.email})
                    </Link>
                    , и предоставьте реквизиты платежа.{" "}
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>
                  Не получается вывести вещи в steam. 
                  </span>
                </div>
                <div className="faq-item__text">
                  <span>
                  Если у Вас возникли проблемы с выводом выигрыша, Вам следует обратиться к нам на почту {setData.data.email}
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>Пополнить счет с помощью скинов</span>
                </div>
                <div className="faq-item__text">
                  <span>
                    Нажмите на кнопку «Пополнить». Далее выберите способ оплаты:
                    «Skinsback». Минимальная сумма для пополнения вещами CS:GO
                    194р DOTA2 65р
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>
                    У меня есть баланс на Steam аккаунте, а тут они не
                    отображаются
                  </span>
                </div>
                <div className="faq-item__text">
                  <span>
                    Баланс Steam не действуют на этом сайте. Пополнять баланс
                    необходимо отдельно
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>
                    Не могу зайти на сайт через Steam, не грузится страница с
                    кейсами, реклама посреди страницы, да и вообще сайт очень
                    сильно лагает, что делать?
                  </span>
                </div>
                <div className="faq-item__text">
                  <span>
                    Чаще всего проблема кроется либо в антивирусе, который
                    блокирует соединение с сайтом, либо в расширениях для
                    браузера, которые показывают рекламу, и, возможно, также
                    блокируют соединение с сайтом. Попробуйте отключить
                    антивирус и удалить подозрительные расширения в браузере.
                    Рекомендуемый для просмотра сайта браузер - Google Chrome.
                  </span>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <span>Бонус за адрес сайта в нике Steam</span>
                </div>
                <div className="faq-item__text">
                  <span>
                    Вы можете получить +10% от пополняемой суммы на баланс, если
                    укажете адрес <strong>{data.nameLoyalty.pattern}</strong> в своем нике Steam. После того,
                    как вы указали адрес сайта в Steam-никнейме, вы должны выйти
                    из профиля на нашем и снова зайти. Должно пройти 24 часа
                    после того, как Вы указали адрес сайта в Steam-нике, после
                    чего вы можете пополнить счет и бонус сработает
                    автоматически.
                  </span>
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

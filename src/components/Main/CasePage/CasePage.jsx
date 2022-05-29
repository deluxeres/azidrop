import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bumble1 from "../../../Assets/images/bumble.png";
import bumble2 from "../../../Assets/images/bumble2.png";
import "./CasePage.scss";
import db from "../../../DataBase/Live.json";
import caseItem from "../../../DataBase/CaseItems.json";
import Statictic from "../Statictic/Statictic"

function CasePage(props) {
  const [caseElem, setCaseElem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setCaseElem(db["cases"].filter((item) => item.id === +id));

    db["cases"].forEach((item) => {
      if (item.id === +id) {
        setCaseElem(item);
      }
    });
  }, []);

  console.log();

  return (
    <div className="case-page" key={caseElem.id}>
      <div className="container">
        <div className="case-wrapper">
          <div className="case-wrapper-container">
            <div className="case-mystery">
              <span className="case-mystery__price">
                Стоимость кейса{" "}
                <span className="case-mystery__sum">{caseElem.price} Р</span>
              </span>
              <span className="case-mystery__text">
                Открывай и испытывай удачу
              </span>
            </div>
            <div className="case__container">
              <div className="case__innerName">
                <span></span>
              </div>
              <div className="case__name">
                <span>{caseElem.name}</span>
              </div>
              <div className="case__image">
                <img src={caseElem.image} alt="case" />
              </div>
              <button>Прокрутить</button>
            </div>
          </div>
          <div className="wrapper-bumble__1">
            <img src={bumble1} alt="bumble" />
          </div>
          <div className="wrapper-bumble__2">
            <img src={bumble2} alt="bumble" />
          </div>
        </div>
        <div className="case-content">
          <span className="case-content__title">Содержимое кейса</span>
          <div className="case-content__wrapper">
            {caseItem.map((itemGun) => {
              return (
                <div className="case-content__item" key={itemGun.id}>
                <div className="case-badge">
                  <span className={itemGun.badge}></span>
                </div>
                  <div className="case-item__img">
                    <img src={itemGun.itemImg} alt="itemGun" />
                  </div>
                  <span className="case-item__name">{itemGun.ItemName}</span>
                </div>
              );
            })}
          </div>
        </div>
        <Statictic />
      </div>
    </div>
  );
}

export default CasePage;

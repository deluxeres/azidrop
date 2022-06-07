import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import bumble1 from "../../../Assets/images/bumble.png";
import bumble2 from "../../../Assets/images/bumble2.png";
import "./CasePage.scss";
import db from "../../../DataBase/Live.json";
import caseItem from "../../../DataBase/CaseItems.json";
import Statictic from "../Statictic/Statictic"
import { useDispatch } from 'react-redux';
import { openCasePopup } from '../../../app/popupSlice';
import CaseSpinner from '../../CaseSpinner/CaseSpinner';

function CasePage(props) {
  const [caseElem, setCaseElem] = useState({});
  const [isCaseSpin, setCaseSpin] = useState(false);
  const [ts, tSt] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setCaseElem(db["cases"].filter((item) => item.id === +id));

    db["cases"].forEach((item) => {
      if (item.id === +id) {
        setCaseElem(item);
      }
    });
  }, []);

  console.log();

  const spinCase = function () {
    setCaseSpin(true);
  }

  const quickOpen = function () {
    dispatch(openCasePopup({

    }));
  }

  const getRandomId = function () {
    return new Promise((resolve, reject) => {
      const min = 1;
      const max = 16;
      setTimeout(function () {
        resolve(Math.floor(Math.random() * (max - min + 1)) + min);
      }, 1000);
    });
  }

  return (
    <div className="case-page" key={caseElem.id}>
      <div className="container">
        <div className="case-wrapper" id="caseWrap">
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

              {!isCaseSpin &&
                <>
                  <div className="case__image">
                    <img src={caseElem.image} alt="case" />
                  </div>
                  <div className="case-buttons">
                    <div className="case-buttons__item">
                      <button onClick={spinCase}>Прокрутить за {caseElem.price} Р</button>
                    </div>
                    <div className="case-buttons__item">
                      <button onClick={quickOpen}>Открыть быстро</button>
                    </div>
                  </div>
                </>
              }

              {isCaseSpin && <CaseSpinner data={caseItem} getRandomId={getRandomId} />}

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
                <div className="case-content__item" key={itemGun.CaseId}>
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

import React, { useEffect, useReducer, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import bumble1 from "../../../Assets/images/bumble.png";
import bumble2 from "../../../Assets/images/bumble2.png";
import "./CasePage.scss";
import db from "../../../DataBase/Live.json";
import caseItem from "../../../DataBase/CaseItems.json";
import Statictic from "../Statictic/Statictic"
import { useDispatch, useSelector } from 'react-redux';
import { openCasePopup } from '../../../app/popupSlice';
import CaseSpinner from '../../CaseSpinner/CaseSpinner';
import { isCaseSpin, setCaseSpin } from '../../../app/caseSlice';

const getRandomId = function (delay = 0) {
  return new Promise((resolve, reject) => {
    const min = 1;
    const max = 16;
    setTimeout(function () {
      resolve(Math.floor(Math.random() * (max - min + 1)) + min);
    }, delay);
  });
}

function CasePage(props) {
  const [caseElem, setCaseElem] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const isSpin = useSelector(isCaseSpin);
  const [isQuickOpening, setQuickOpen] = useState(false);

  useEffect(() => {
    setCaseElem(db["cases"].filter((item) => item.id === +id));

    db["cases"].forEach((item) => {
      if (item.id === +id) {
        setCaseElem(item);
      }
    });
  }, []);

  const spinCase = function () {
    dispatch(setCaseSpin(true));
  }

  const quickOpen = async function () {
    setQuickOpen(true);

    const id = await getRandomId();

    for (const item of caseItem) {
      if (item.CaseId === id) {

        dispatch(openCasePopup({
          title: item.ItemName,
          img: item.itemImg,
          text: item.itemPrice + ' P',
        }));

        setQuickOpen(false);

        break;
      }
    }
  }

  const getRandomIdForSpin = () => getRandomId(1100);

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

              {!isSpin &&
                <>
                  <div className="case__image">
                    <img src={caseElem.image} alt="case" />
                  </div>
                  <div className="case-buttons">
                    <div className="case-buttons__item">
                      <button onClick={spinCase}>Прокрутить за {caseElem.price} Р</button>
                    </div>
                    <div className="case-buttons__item">
                      <button onClick={quickOpen} disabled={isQuickOpening}>Открыть быстро</button>
                    </div>
                  </div>
                </>
              }

              {isSpin && <CaseSpinner data={caseItem} getRandomId={getRandomIdForSpin} />}

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

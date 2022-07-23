import React, { useEffect, useReducer, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import bumble1 from "../../../Assets/images/bumble.png";
import bumble2 from "../../../Assets/images/bumble2.png";
import "./CasePage.scss";
import db from "../../../DataBase/Live.json";
import caseItem from "../../../DataBase/CaseItems.json";
import Statictic from "../Statictic/Statictic"
import { useDispatch, useSelector } from 'react-redux';
import CaseSpinner from '../../CaseSpinner/CaseSpinner';
import { isCaseSpin, setCaseSpin } from '../../../app/caseSlice';
import OpenedCase from '../../OpenedCase/OpenedCase';
import { useGetCategoriesQuery } from '../../../app/services/caseApi';
import { apiHost } from '../../../app/services/baseQueries';
import { useOpenCaseMutation, useSellSkinMutation } from '../../../app/services/userApi';
import { getBadgeClass, getColorClass } from '../../../functions/getBadge';
import { OpenCase } from '../../../app/services/openCase';
import { openErrorAlert } from '../../../app/alertSlice';

function CasePage() {
  const [openedCaseState, setOpenedCaseState] = useState({ isOpened: false, data: {} });
  const { id } = useParams();
  const dispatch = useDispatch();
  const isSpin = useSelector(isCaseSpin);
  const [isQuickOpening, setQuickOpen] = useState(false);
  const { data, isLoading } = useGetCategoriesQuery();
  const [sellSkinMutation, resultSellSkin] = useSellSkinMutation();
  const wonSkin = useRef(null);

  useEffect(() => {
    if (resultSellSkin.data && resultSellSkin.data.error) {
      dispatch(openErrorAlert(resultSellSkin.data.error));
    }
  }, [resultSellSkin]);

  let caseElem = null;

  if (data) {
    for (const category of data) {
      for (const item of category.cases) {
        if (+item.id === +id) {
          caseElem = item;
        }
      }
    }
  }

  const spinCase = async function () {
    const res = await OpenCase(caseElem.id);

    if (res.data.error) {
      dispatch(openErrorAlert(res.data.error));
      return null;
    }

    wonSkin.current = res.data;

    dispatch(setCaseSpin(true));
  }

  const quickOpen = async function () {
    setQuickOpen(true);

    const res = await OpenCase(caseElem.id);

    if (res.data.error) {
      dispatch(openErrorAlert(res.data.error));
      setQuickOpen(false);
      return;
    }

    const item = res.data;

    dispatch(setCaseSpin(false));

    setOpenedCaseState({
      isOpened: true,
      data: item
    });

    setQuickOpen(false);
  }

  const getRandomIdForSpin = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(wonSkin.current);
      }, 2500);
    });
  }

  const onStopSpinner = async function (skin) {
    dispatch(setCaseSpin(false));

    setOpenedCaseState({
      isOpened: true,
      data: skin
    });
  }

  const tryAgain = function () {
    setOpenedCaseState({
      isOpened: false
    });
  }

  const sellSkin = function (id) {
    sellSkinMutation({ id });

    setOpenedCaseState({
      isOpened: false
    });
  }

  let skins = !!caseElem && JSON.parse(JSON.stringify(caseElem.skins));

  skins = !!skins && skins.map(item => {
    const col = {
      orange: 1,
      red: 2,
      purple: 3,
      maline: 4,
      blue: 5,
      bluelight: 6,
      silver: 7,
    };

    item.sortIndex = col[getColorClass(item.rarity)];

    return item;
  });

  !!skins && skins.sort((a, b) => a.sortIndex - b.sortIndex);

  return (isLoading || !caseElem) ? null : (
    <div className="case-page">
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
                <span>Кейс: {caseElem.name}</span>
              </div>

              {!isSpin && !openedCaseState.isOpened &&
                <>
                  <div className="case__image">
                    <img src={caseElem.img.replace('localhost', apiHost)} alt="case" />
                  </div>
                  <div className="case-buttons">
                    <div className="case-button__spin">
                      <button onClick={spinCase}>Прокрутить за {caseElem.price} Р</button>
                    </div>
                    <div className="case-button__quick">
                      <button onClick={quickOpen} disabled={isQuickOpening}>Открыть быстро</button>
                    </div>
                  </div>
                </>
              }

              {isSpin &&
                <CaseSpinner
                  data={caseElem.skins}
                  getRandomId={getRandomIdForSpin}
                  onStop={onStopSpinner}
                />
              }

              {openedCaseState.isOpened &&
                <OpenedCase data={openedCaseState.data} tryAgain={tryAgain} sellSkin={sellSkin} />
              }

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
            {skins.map((itemGun) => {
              const badge = getBadgeClass(itemGun.rarity);

              return (
                <div className="case-content__item" key={itemGun.id}>
                  <div className="case-badge">
                    <span className={badge}></span>
                  </div>
                  <div className="case-item__img">
                    <img src={itemGun.img} alt="itemGun" />
                  </div>
                  <span className="case-item__name">{itemGun.name}</span>
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

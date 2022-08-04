import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import bumble1 from "../../../Assets/images/bumble.png";
import bumble2 from "../../../Assets/images/bumble2.png";
import "./CasePage.scss";
import Statictic from "../Statictic/Statictic"
import { useDispatch, useSelector } from 'react-redux';
import CaseSpinner from '../../CaseSpinner/CaseSpinner';
import { isCaseSpin, setCaseSpin } from '../../../app/caseSlice';
import OpenedCase from '../../OpenedCase/OpenedCase';
import { useGetFreeCaseQuery } from '../../../app/services/caseApi';
import { apiHost, authLink } from '../../../app/services/baseQueries';
import { useGetUserDataQuery, useSellSkinMutation } from '../../../app/services/userApi';
import { getBadgeClass, getColorClass } from '../../../functions/getBadge';
import { OpenFreeCase } from '../../../app/services/openCase';
import { openErrorAlert } from '../../../app/alertSlice';
import { isUserLogin } from '../../../app/userSlice';

function CasePage() {
  const [openedCaseState, setOpenedCaseState] = useState({ isOpened: false, data: {} });
  const { id } = useParams();
  const dispatch = useDispatch();
  const isSpin = useSelector(isCaseSpin);
  const [isQuickOpening, setQuickOpen] = useState(false);
  const { data: freeCases, isLoading } = useGetFreeCaseQuery();
  const { data: user } = useGetUserDataQuery();
  const [sellSkinMutation, resultSellSkin] = useSellSkinMutation();
  const wonSkin = useRef(null);
  const isLogin = useSelector(isUserLogin);
  const available = useRef(false);

  const data = !!freeCases && freeCases.items;

  useEffect(() => {
    if (resultSellSkin.data && resultSellSkin.data.error) {
      dispatch(openErrorAlert(resultSellSkin.data.error));
    }
  }, [resultSellSkin]);

  let caseElem = null;

  if (data) {
    for (const item of data) {
      if ('free-' + item.id === id) {
        caseElem = item;
      }
    }
  }

  useEffect(() => {
    if (user && caseElem) {
      if (user.lastPaymentSum > caseElem.price) {
        available.current = true;
      }
    }
  }, [user, data, caseElem]);

  const spinCase = async function () {
    let res = await OpenFreeCase(caseElem.id);

    if (res.data.error) {
      dispatch(openErrorAlert(res.data.error));
      return null;
    }

    wonSkin.current = res.data;

    dispatch(setCaseSpin(true));
  }

  const quickOpen = async function () {
    setQuickOpen(true);

    let res = await OpenFreeCase(caseElem.id);

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
      orange: 7,
      red: 6,
      purple: 5,
      maline: 4,
      blue: 3,
      bluelight: 2,
      silver: 1,
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
            {/* <div className="case-mystery">
              <span className="case-mystery__price">
                Стоимость кейса{" "}
                <span className="case-mystery__sum">{caseElem.price} Р</span>
              </span>
              <span className="case-mystery__text">
                Открывай и испытывай удачу
              </span>
            </div> */}
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

                  {(!available.current && isLogin) &&
                    <div className="case-free">
                      <span className="case-free__splash">🧡</span>
                      <div className="case-free__info">
                        <span className="case-free__info-title">Чтобы открыть этот кейс вам необходимо</span>
                        <span className="case-free__info-text">Пополнение баланса за последние 24 часа<br /> не менее, чем на <span className="case-free-count">{caseElem.price} Р</span></span>
                        <span className="case-free__info-text">За последние 24 часа вы пополнили баланс на <span className="case-free-count">{!!user && user.lastPaymentSum} Р</span></span>
                      </div>
                    </div>
                  }

                  {(available.current && isLogin) &&
                    <div className="case-buttons">
                      <div className="case-button__spin">
                        <button onClick={spinCase}>Прокрутить за {caseElem.price} Р</button>
                      </div>
                      <div className="case-button__quick">
                        <button onClick={quickOpen} disabled={isQuickOpening}>Открыть быстро</button>
                      </div>
                    </div>
                  }

                  {!isLogin &&
                    <a href={authLink} className="header__profile-login" style={{ margin: 0 }}>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17">
                          <path fill="#FFF" d="M25.9049778,4.83497778 C25.9049778,6.26048889 24.7448444,7.41657778 23.3140444,7.41657778 C21.8816889,7.41657778 20.7224889,6.26048889 20.7224889,4.83497778 C20.7224889,3.40946667 21.8823111,2.25368889 23.3140444,2.25368889 C24.7448444,2.25368889 25.9049778,3.40946667 25.9049778,4.83497778 Z M24.8608889,9.19675556 L21.7230222,11.8704444 C21.7569333,12.0838667 21.7799556,12.3007111 21.7799556,12.5231556 C21.7799556,14.7992444 19.9276,16.6447556 17.6434222,16.6447556 C15.6728444,16.6447556 14.0273778,15.2715111 13.6104889,13.4340889 L5.85417778,10.8123556 C5.24128889,11.2759111 4.47937778,11.5546667 3.65057778,11.5546667 C1.63457778,11.5543556 0,9.92537778 0,7.91684444 C0,5.90862222 1.63457778,4.28057778 3.65057778,4.28057778 C5.38408889,4.28057778 6.832,5.48457778 7.20564444,7.09768889 L14.6981333,9.63044444 C15.428,8.89342222 16.4344444,8.43142222 17.5497778,8.40653333 L18.6719556,5.00795556 C18.6685333,4.94044444 18.6616889,4.87386667 18.6616889,4.80573333 C18.6616889,2.23751111 20.7523556,0.155555556 23.3308444,0.155555556 C25.9090222,0.155555556 28,2.23751111 28,4.80573333 C28,6.8404 26.6868,8.5652 24.8608889,9.19675556 Z M5.94595556,6.67208889 C5.50977778,5.88995556 4.67257778,5.36013333 3.71093333,5.36013333 C2.29911111,5.36013333 1.15453333,6.50035556 1.15453333,7.90657778 C1.15453333,9.3128 2.29911111,10.4527111 3.71093333,10.4527111 C3.97195556,10.4527111 4.22333333,10.4138222 4.4604,10.3413333 L3.24582222,9.93097778 C2.26706667,9.40893333 1.89871111,8.19528889 2.42293333,7.22026667 C2.94746667,6.24586667 4.16577778,5.87937778 5.1436,6.40142222 L5.94595556,6.67208889 Z M19.6896,4.81693333 C19.6896,6.81177778 21.3129778,8.42893333 23.3156,8.42893333 C25.3182222,8.42893333 26.9425333,6.81177778 26.9425333,4.81693333 C26.9425333,2.82115556 25.3179111,1.204 23.3156,1.204 C21.3129778,1.204 19.6896,2.82115556 19.6896,4.81693333 Z M19.7611556,12.8765778 C19.7611556,11.3580444 18.5251111,10.1263556 17.0006667,10.1263556 C16.7866222,10.1263556 16.5800444,10.1531111 16.3803111,10.1985333 L17.9231111,10.7199556 C18.9015556,11.2426222 19.2689778,12.4559556 18.7450667,13.4300444 C18.2208444,14.406 17.0025333,14.7715556 16.0247111,14.2498222 L14.3621333,13.6876444 C14.7093333,14.8104444 15.7593333,15.6264889 17.0006667,15.6264889 C18.5251111,15.6268 19.7611556,14.3951111 19.7611556,12.8765778 Z" />
                        </svg>
                        Войти через Steam
                      </button>
                    </a>
                  }
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
                  <span className="case-item__name">{itemGun.short_name}</span>
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

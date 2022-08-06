import React, { useEffect } from "react";
import "./ProfileDrop.scss";
import { Link } from "react-router-dom"
import { Tabs, Tab, TabPanel, TabList, TabPanels } from "@chakra-ui/react"
import { useSellSkinMutation, useWithdrawSkinMutation } from '../../../../app/services/userApi';
import { getBadgeClass } from '../../../../functions/getBadge';
import { useDispatch } from 'react-redux';
import { openErrorAlert, openSuccessAlert } from '../../../../app/alertSlice';

const SkinItem = (props) => {
  const skin = props.skin;

  const sell = () => {
    props.sellSkin(props.id);
  }

  const withdraw = () => {
    props.withdrawSkin(props.id);
  }

  const badge = getBadgeClass(props.rarity, skin.short_name);

  return (
    <div className="drop-item">
      <div className="drop-badge">
        <span className={badge}></span>
      </div>
      <div className="drop-item__img">
        <img src={skin.img} alt="itemGun" />
      </div>
      <span className="drop-item__name">{skin.short_name}</span>

      <div className="drop-price">
        <span className="drop-item-price">{skin.price} Р</span>
      </div>

      <div className="drop-hover">
        <button className="drop-sell" onClick={sell}>Продать</button>
        <button className="drop-take" onClick={withdraw}>Вывести</button>
      </div>
    </div>
  );
}

function ProfileDrop(props) {
  const dispatch = useDispatch();
  const [sellSkinMutation, resultSellSkin] = useSellSkinMutation();
  const [withdrawSkinMutation, resultWithdrawSkin] = useWithdrawSkinMutation();

  useEffect(() => {
    if (resultSellSkin.data && resultSellSkin.data.error) {
      dispatch(openErrorAlert(resultSellSkin.data.error));
    } else if (resultSellSkin.data) {
      dispatch(openSuccessAlert('Успех'));
    }
  }, [resultSellSkin]);

  useEffect(() => {
    if (resultWithdrawSkin.data && resultWithdrawSkin.data.error) {
      dispatch(openErrorAlert(resultWithdrawSkin.data.error));
    } else if (resultSellSkin.data) {
      dispatch(openSuccessAlert('Успех'));
    }
  }, [resultWithdrawSkin]);

  const withdraw = (id) => {
    if (props.data.steam_trade_link) {
      withdrawSkinMutation({ id });
    } else {
      props.alertClick('Укажите Trade-URL');
    }
  }

  let skins = [];

  if (props.data && props.data.skins) {
    skins = props.data && props.data.skins.map((item) => (
      <SkinItem
        sellSkin={(id) => sellSkinMutation({ id })}
        withdrawSkin={withdraw}
        {...item}
        key={item.id}
      />
    ));
  }

  const handleCopy = () => {
    console.log('copied');
  }

  const [open, setOpen] = React.useState(false);

  const alertClick = () => {
    setOpen(true);
  };

  const alertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="profile-drop">
      <div className="container">
        <div className="profile-tab">
          <Tabs variant="unstyled">
            <TabList className="drop-tablist">
              <Tab className="drop-tab" _selected={{ color: "white", bg: "#000016" }}>Мой дроп</Tab>
              <Tab className="drop-tab" _selected={{ color: "white", bg: "#000016" }}>Контракты</Tab>
              <Tab className="drop-tab" _selected={{ color: "white", bg: "#000016" }}>Апгрейды</Tab>
            </TabList>
            <TabPanels className="drop-tabpanels">
              <TabPanel className="drop-tabpanel">
                {skins.length > 0 &&
                  <div className="profile-inventory">
                    <div className="inventory-wrapper">
                      {skins}
                    </div>
                  </div>
                }

                {skins.length === 0 &&
                  <>
                    <div className="drop-tab-img">
                      <svg width="150px" height="150px" viewBox="0 0 127 126" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".7" filter="url(#call-to-action-a)"><circle cx="63.5" cy="63" r="13" fill="#C4C4C4"></circle></g><path opacity=".1" fillRule="evenodd" clipRule="evenodd" d="m56.16 63.07 3.41-3.41-5.12-5.13 5.12-5.12L56.16 46l-5.12 5.12L45.92 46l-3.42 3.41 5.12 5.12-5.12 5.13 3.41 3.4 5.13-5.11 5.12 5.12Z" fill="#9F9F9F"></path><g filter="url(#call-to-action-b)"><path d="M70.75 71h-1.19l-.42-.4a9.75 9.75 0 1 0-1.05 1.05l.41.41v1.19l7.5 7.48 2.23-2.23-7.48-7.5Zm-9 0a6.74 6.74 0 1 1 0-13.5 6.74 6.74 0 1 1 0 13.5Z" fill="#797979"></path></g><path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M83.57 48.41 82.16 47l-2.12 2.12L77.9 47l-1.41 1.41 2.12 2.13-2.12 2.12 1.41 1.41 2.13-2.12 2.12 2.12 1.41-1.41-2.12-2.12 2.12-2.13Z" fill="#9F9F9F"></path><path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M52.57 80.01 51.56 79l-1.52 1.52L48.5 79l-1.01 1.01 1.52 1.53-1.52 1.52 1.01 1.01 1.53-1.52 1.52 1.52 1.01-1.01-1.52-1.52L52.57 80Z" fill="#9F9F9F"></path><defs><filter id="call-to-action-a" x=".5" y="0" width="126" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_44_33205"></feGaussianBlur></filter><filter id="call-to-action-b" x="42" y="50.5" width="46.23" height="46.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_44_33205"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_44_33205" result="shape"></feBlend></filter></defs></svg>
                    </div>
                    <span className="drop-tab-title">Ваш инвентарь пуст</span>
                    <p>Перейдите на главную и откройте кейсы.</p>
                    <Link to="/">Перейти к кейсам</Link>
                  </>
                }
              </TabPanel>

              <TabPanel className="drop-tabpanel">
                <div className="drop-tab-img">
                  <svg width="150px" height="150px" viewBox="0 0 127 126" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".7" filter="url(#call-to-action-a)"><circle cx="63.5" cy="63" r="13" fill="#C4C4C4"></circle></g><path opacity=".1" fillRule="evenodd" clipRule="evenodd" d="m56.16 63.07 3.41-3.41-5.12-5.13 5.12-5.12L56.16 46l-5.12 5.12L45.92 46l-3.42 3.41 5.12 5.12-5.12 5.13 3.41 3.4 5.13-5.11 5.12 5.12Z" fill="#9F9F9F"></path><g filter="url(#call-to-action-b)"><path d="M70.75 71h-1.19l-.42-.4a9.75 9.75 0 1 0-1.05 1.05l.41.41v1.19l7.5 7.48 2.23-2.23-7.48-7.5Zm-9 0a6.74 6.74 0 1 1 0-13.5 6.74 6.74 0 1 1 0 13.5Z" fill="#797979"></path></g><path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M83.57 48.41 82.16 47l-2.12 2.12L77.9 47l-1.41 1.41 2.12 2.13-2.12 2.12 1.41 1.41 2.13-2.12 2.12 2.12 1.41-1.41-2.12-2.12 2.12-2.13Z" fill="#9F9F9F"></path><path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M52.57 80.01 51.56 79l-1.52 1.52L48.5 79l-1.01 1.01 1.52 1.53-1.52 1.52 1.01 1.01 1.53-1.52 1.52 1.52 1.01-1.01-1.52-1.52L52.57 80Z" fill="#9F9F9F"></path><defs><filter id="call-to-action-a" x=".5" y="0" width="126" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_44_33205"></feGaussianBlur></filter><filter id="call-to-action-b" x="42" y="50.5" width="46.23" height="46.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_44_33205"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_44_33205" result="shape"></feBlend></filter></defs></svg>
                </div>
                <span className="drop-tab-title">Ваш инвентарь пуст</span>
                <p>Перейдите на главную и откройте кейсы.</p>
                <Link to="/">Перейти к контрактам</Link>
              </TabPanel>
              <TabPanel className="drop-tabpanel">
                <div className="drop-tab-img">
                  <svg width="150px" height="150px" viewBox="0 0 127 126" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".7" filter="url(#call-to-action-a)"><circle cx="63.5" cy="63" r="13" fill="#C4C4C4"></circle></g><path opacity=".1" fillRule="evenodd" clipRule="evenodd" d="m56.16 63.07 3.41-3.41-5.12-5.13 5.12-5.12L56.16 46l-5.12 5.12L45.92 46l-3.42 3.41 5.12 5.12-5.12 5.13 3.41 3.4 5.13-5.11 5.12 5.12Z" fill="#9F9F9F"></path><g filter="url(#call-to-action-b)"><path d="M70.75 71h-1.19l-.42-.4a9.75 9.75 0 1 0-1.05 1.05l.41.41v1.19l7.5 7.48 2.23-2.23-7.48-7.5Zm-9 0a6.74 6.74 0 1 1 0-13.5 6.74 6.74 0 1 1 0 13.5Z" fill="#797979"></path></g><path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M83.57 48.41 82.16 47l-2.12 2.12L77.9 47l-1.41 1.41 2.12 2.13-2.12 2.12 1.41 1.41 2.13-2.12 2.12 2.12 1.41-1.41-2.12-2.12 2.12-2.13Z" fill="#9F9F9F"></path><path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M52.57 80.01 51.56 79l-1.52 1.52L48.5 79l-1.01 1.01 1.52 1.53-1.52 1.52 1.01 1.01 1.53-1.52 1.52 1.52 1.01-1.01-1.52-1.52L52.57 80Z" fill="#9F9F9F"></path><defs><filter id="call-to-action-a" x=".5" y="0" width="126" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_44_33205"></feGaussianBlur></filter><filter id="call-to-action-b" x="42" y="50.5" width="46.23" height="46.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_44_33205"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_44_33205" result="shape"></feBlend></filter></defs></svg>
                </div>
                <span className="drop-tab-title">Ваш инвентарь пуст</span>
                <p>Перейдите на главную и откройте кейсы.</p>
                <Link to="/">Перейти к апгрейдам</Link>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProfileDrop;

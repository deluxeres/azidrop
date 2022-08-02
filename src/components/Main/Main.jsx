import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainCases from './MainCases/MainCases';
import db from '../../DataBase/Live.json'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Main.scss'
import Statictic from "../Main/Statictic/Statictic"
import { useGetLoyalityQuery } from '../../app/services/caseApi';

function Home() {

  const { data: promoData } = useGetLoyalityQuery();
  const paymentBonus = promoData && promoData.paymentBonus;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
    <div className="main">
      <div className="container">
        <div className="promo-banner">

          {!!paymentBonus &&
            <div className="promo">
              <span className="promo-title">Бонус к сумме пополнения<span className="promo-procent">{paymentBonus.value}<span>%</span></span></span>
              <div className="promo-section">
                <div className="promo-block">
                  <div className="promo-block-badge"></div>
                  <CopyToClipboard text={paymentBonus.promocode} onCopy={handleCopy}>
                    <div className="promo-block__code" onClick={alertClick}>
                      <span>{paymentBonus.promocode}</span>
                    </div>
                  </CopyToClipboard>
                  <CopyToClipboard text={paymentBonus.promocode} onCopy={handleCopy}>
                    <div className="promo-block__code" onClick={alertClick}>
                      <button className="promo-block__copy">Скопировать</button>
                    </div>
                  </CopyToClipboard>
                </div>
                <div className="promo-block-info">
                  <div className="promo-block-info__title">Осталось</div>
                  <div className="promo-block-info__limit">
                    <span className="promo-limit-used">{paymentBonus.currentCount}</span>
                    <span className="promo-limit-count">из</span>
                    <span className="promo-limit-count">{paymentBonus.maxCount}</span>
                  </div>
                </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={alertClose}>
                  <Alert onClose={alertClose} severity="success" sx={{ width: '100%' }}>
                    Промокод {paymentBonus.promocode} скопирован
                  </Alert>
                </Snackbar>
              </div>
            </div>
          }
        </div>
        <MainCases />
        <Statictic />
      </div>
    </div>
  )
}

export default Home
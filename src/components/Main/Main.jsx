import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainCases from './MainCases/MainCases';
import db from '../../DataBase/Live.json'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Main.scss'
import Statictic from "../Main/Statictic/Statictic"

function Home() {

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

        {db['promo'].map((promoBase) => {
            return (
          <div className="promo" key={promoBase.id}>
            <span className="promo-title">Бонус к сумме пополнения<span className="promo-procent">{promoBase.procent}<span>%</span></span></span>
            <div className="promo-section">
              <div className="promo-block">
                <div className="promo-block-badge"></div>
                  <CopyToClipboard text={promoBase.promocode} onCopy={handleCopy}>
                    <div className="promo-block__code" onClick={alertClick}>
                        <span>{promoBase.promocode}</span>
                    </div>
                  </CopyToClipboard>
                  <button className="promo-block__copy">Скопировать</button>
                </div>
                <div className="promo-block-info">
                  <div className="promo-block-info__title">Осталось</div>
                  <div className="promo-block-info__limit">
                    <span className="promo-limit-used">{promoBase.limit}</span>
                    <span className="promo-limit-count">из</span>
                    <span className="promo-limit-count">{promoBase.limitLast}</span>
                  </div>
                </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={alertClose}>
                  <Alert onClose={alertClose} severity="success" sx={{ width: '100%' }}>
                    Промокод {promoBase.promocode} скопирован
                  </Alert>
                </Snackbar>
            </div>
          </div>
          );
        })}
        </div>
        <MainCases />
        <Statictic />
      </div>
    </div>
  )
}

export default Home
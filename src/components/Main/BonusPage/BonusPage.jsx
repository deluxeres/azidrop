import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './BonusPage.scss'
import freeImg from "../../../Assets/images/free.png"
import BonusBlock from "../BonusPrize/Bonus"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function promoCopy() {
  console.log("copied");
}

function BonusPage() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
    <div className="bonus">
      <div className="container">
        <div className="bonus-block">
          <span className="bonus-block__title">Бонусная система</span>

          <div className="bonus-banner">
            <div className="bonus-banner__container">
              <div className="bonus-banner__text">
                <p>Free bonus</p>
                <span onClick={alertClick}>Используйте домен 
                <CopyToClipboard text="azidrop.com" onCopy={promoCopy} className="bonusCopy">
                   <strong>azidrop.com</strong>
                </CopyToClipboard>
                 в нике Steam и через 24 часа получайте бонус к любому пополнению +10%</span>
              </div>
              <div className="bonus-banner__img">
                <img src={freeImg} alt="bonus"/>
              </div>
            </div>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={alertClose}>
                  <Alert onClose={alertClose} severity="success" sx={{ width: '100%' }}>
                    Вы скопировали домен azidrop.com
                  </Alert>
          </Snackbar>

          {/* <div class="bonus-banner">
							<div class="bonus-banner__left">
								<div class="bonus-banner__icon"></div>
							</div>
							<div class="bonus-banner__right">
								<div class="bonus-banner__intro"></div>
									<div class="bonus-banner__text">Используйте домен forcedrop.app в нике Steam и через 24 часа получайте бонус к любому пополнению +10%</div>	
							</div>
						</div> */}


          <BonusBlock />
          {/* <div className="bonus-block__wrapper">
            <div className="bonus-card">
              <div className="bonus-card__img"><img src="https://forcedrop.app/public/img/bonus/bonus-group-vk.png?v=4" alt='bonus'/></div>
              <div class="bonus-card__title">Подписаться на группу VK</div>
              <span className="bonus-card__price">6₽</span>
              <button>Получить бонус</button>
            </div>
            <div className="bonus-card">
              <div className="bonus-card__img"><img src="https://forcedrop.app/public/img/bonus/bonus-telegram.png?v=4" alt='bonus'/></div>
              <div class="bonus-card__title">Подписаться на Telegram</div>
              <span className="bonus-card__price">6₽</span>
              <button>Получить бонус</button>
            </div>
            <div className="bonus-card">
              <div className="bonus-card__img"><img src="https://forcedrop.app/public/img/bonus/bonus-youtube.png?v=4" alt='bonus'/></div>
              <div class="bonus-card__title">Подписаться на YouTube</div>
              <span className="bonus-card__price">6₽</span>
              <button>Получить бонус</button>
            </div>
            <div className="bonus-card">
              <div className="bonus-card__img"><img src="https://forcedrop.app/public/img/bonus/bonus-tiktok.png?v=4" alt='bonus'/></div>
              <div class="bonus-card__title">Подписаться на TikTok</div>
              <span className="bonus-card__price">6₽</span>
              <button>Получить бонус</button>
            </div>
          </div> */}
          <p className="bonus-block__text">Вам необходимо иметь хотя бы одно пополнение на 150 ₽, с момента запуска данной системы, чтобы получить бонус за подписки на социальные сети. Если Вы уже подписаны, то нажмите кнопку получения бонуса. Бонус за подписку выдается один раз.</p>
        </div>
      </div>
    </div>
  )
}

export default BonusPage
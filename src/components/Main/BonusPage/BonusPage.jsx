import React from 'react'
import './BonusPage.scss'

function BonusPage() {
  return (
    <div className="bonus">
      <div className="container">
        <div className="bonus-block">
          <span className="bonus-block__title">Бонусная система</span>

          <div class="bonus-banner">
							<div class="bonus-banner__left">
								<div class="bonus-banner__icon"></div>
							</div>
							<div class="bonus-banner__right">
								<div class="bonus-banner__intro"></div>
									<div class="bonus-banner__text">Используйте домен forcedrop.app в нике Steam и через 24 часа получайте бонус к любому пополнению +10%</div>	
							</div>
						</div>

          <div className="bonus-block__wrapper">
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
          </div>
          <p className="bonus-block__text">Вам необходимо иметь хотя бы одно пополнение на 150 ₽, с момента запуска данной системы, чтобы получить бонус за подписки на социальные сети. Если Вы уже подписаны, то нажмите кнопку получения бонуса. Бонус за подписку выдается один раз.</p>
        </div>
      </div>
    </div>
  )
}

export default BonusPage
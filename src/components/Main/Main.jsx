import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainCases from './MainCases/MainCases';
import db from '../../DataBase/Live.json'
import './Main.scss'

function Home() {

  const handleCopy = () => {
    console.log('copied');
  }

  return (
    <div className="main">
      <div className="container">
        <div className="promo-banner">

        {db['promo'].map((promoBase) => {
            return (
          <div className="promo">
            <span className="promo-title">Бонус к сумме пополнения<span className="promo-procent">{promoBase.procent}<span>%</span></span></span>
            <div className="promo-section">
              <div className="promo-block">
                  <CopyToClipboard text={promoBase.promocode} onCopy={handleCopy}>
                    <div className="promo-block__code">
                        <span>{promoBase.promocode}</span>
                    </div>
                  </CopyToClipboard>
                  <button className="promo-block__copy">Скопировать</button>
                </div>
                <div className="promo-block-info">
                  <div className="promo-block-info__title">Осталось</div>
                  <div className="promo-block-info__limit">
                    <span className="promo-limit-used">{promoBase.limit}</span>
                    <span>из</span>
                    <span>{promoBase.limitLast}</span>
                  </div>
                </div>
            </div>
          </div>
          );
        })}
        </div>
        <MainCases />
      </div>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainCases from './MainCases/MainCases';
import './Main.scss'

function Home() {

  const copyText = "C98A0B35-1209-41AC-BA21";

  const handleCopy = () => {
    console.log('copied');
  }

  return (
    <div className="main">
      <div className="container">
        <div className="promo-banner">
          <div className="promo">
            <span className="promo-title">Бонус к сумме пополнения<span className="promo-procent">35%</span></span>
            <div className="promo-section">
              <div className="promo-block">
                  <CopyToClipboard text={copyText} onCopy={handleCopy}>
                    <div className="promo-block__code">
                        <span>{copyText}</span>
                    </div>
                  </CopyToClipboard>
                  <button className="promo-block__copy">Скопировать</button>
                </div>
                <div className="promo-block-info">
                  <div className="promo-block-info__title">Осталось</div>
                  <div className="promo-block-info__limit">
                    <span className="promo-limit-used">3310</span>
                    <span>из</span>
                    <span>3310</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <MainCases />
      </div>
    </div>
  )
}

export default Home
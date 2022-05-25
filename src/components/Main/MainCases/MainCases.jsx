import React from 'react'
import './MainCases.scss'

function MainCases() {
  return (
    <div className="main-wrapper">
        <div className="cases">
            <div className="case-item">
                <div className="case">
                    <div className="case-card">
                        <div className="case-card-hover"></div>
                        <div className="case-card__img">
                            <img src="https://images.steamcdn.io/forcedrop/cases/new_milspec.png" alt='case-card'/>
                        </div>
                        <div className="case-card__info">
                            <span className="case-card_name">Армейское</span>
                            <span className="case-card_price">30р</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case-item">
                <div className="case">
                    <div className="case-card">
                        <div className="case-card-hover"></div>
                        <div className="case-card__img">
                            <img src="https://images.steamcdn.io/forcedrop/cases/sprngcaseee.png" alt='case-card'/>
                        </div>
                        <div className="case-card__info">
                            <span className="case-card_name">Buy Round</span>
                            <span className="case-card_price">129р</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case-item">
                <div className="case">
                    <div className="case-card">
                        <div className="case-card-hover"></div>
                        <div className="case-card__img">
                            <img src="https://images.steamcdn.io/forcedrop/cases/travis.png" alt='case-card'/>
                        </div>
                        <div className="case-card__info">
                            <span className="case-card_name">Travis Scott</span>
                            <span className="case-card_price">300р</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case-item">
                <div className="case">
                    <div className="case-card">
                        <div className="case-card-hover"></div>
                        <div className="case-card__img">
                            <img src="https://images.steamcdn.io/forcedrop/cases/ytcase121.png" alt='case-card'/>
                        </div>
                        <div className="case-card__info">
                            <span className="case-card_name">YouTube</span>
                            <span className="case-card_price">575р</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCases
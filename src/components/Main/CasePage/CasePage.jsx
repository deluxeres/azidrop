import React from 'react'
import './CasePage.scss'

function CasePage(props) {

  return (
    <div className="case-page">
      <div className="container">
        <div className="case-wrapper">
          <div className="case">
            <div className="case__innerName">
              <span></span>
            </div>
            <div className="case__name">
              <span>Армейское</span>
            </div>
            <div className="case__image">
              <img src="https://images.steamcdn.io/forcedrop/cases/new_milspec.png" alt="case" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasePage
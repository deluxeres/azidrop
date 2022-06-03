import React from 'react'
import "./HeaderTop.scss"
import { Link } from "react-router-dom"

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container-top">
        <div className="header-top__link">
          <nav>
            <ul>
              <li>
                <Link to="/bonus-prize">Призы за пополнения</Link>
              </li>
              <li>
                <Link to="/bonus">Бонусная система</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
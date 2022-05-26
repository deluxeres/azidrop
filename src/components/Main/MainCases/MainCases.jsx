import React from "react";
import { Link } from 'react-router-dom';
import "./MainCases.scss";
import db from "../../../DataBase/Live.json";

function MainCases(props) {

  return (
    <div className="main-wrapper">
      <div className="cases">
        {db["cases"].map((caseDb) => {
          return (
            <Link to={`casePage/${caseDb.id}`} className="case-item" key={caseDb.id}>
              <div className="case">
                <div className="case-card">
                  <div className="case-card-hover"></div>
                  <div className="case-card__img">
                    <img src={caseDb.image} alt="case-card"/>
                  </div>
                  <div className="case-card__info">
                    <span className="case-card_name">{caseDb.name}</span>
                    <span className="case-card_price">{caseDb.price}р</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MainCases;

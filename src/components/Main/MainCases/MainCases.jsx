import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import "./MainCases.scss";
import db from "../../../DataBase/Live.json";
import { setCurrentCase } from "../reducer/reducer"

function MainCases(cases) {

  // const history = useNavigate();
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch(setCurrentCase(cases));
  //   history.push(`/app/${db["cases"].id}`);
  // };

  return (
    <div className="main-wrapper">
      <div className="cases">
        {db["cases"].map((caseDb) => {
          return (
            <div className="case-item" key={caseDb.id}>
              <div className="case">
                <div className="case-card">
                  <div className="case-card-hover"></div>
                  <div className="case-card__img">
                    <img src={caseDb.image} alt="case-card" />
                  </div>
                  <div className="case-card__info">
                    <span className="case-card_name">{caseDb.name}</span>
                    <span className="case-card_price">{caseDb.price}р</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// to={'/casePage' + caseDb.id}

export default MainCases;

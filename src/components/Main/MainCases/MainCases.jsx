import React from "react";
import { Link } from 'react-router-dom';
import "./MainCases.scss";
import db from "../../../DataBase/Live.json";

const Case = function (props) {
  return (
    <Link to={`casePage/${props.id}`} className="case-item" key={props.id}>
      <div className="case">
        <div className="case-card">
          <div className="case-card-hover"></div>
          <div className="case-card__img">
            <img src={props.image} alt="case-card" />
          </div>
          <div className="case-card__info">
            <span className="case-card_name">{props.name}</span>
            <span className="case-card_price">{props.price}р</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const Category = function (props) {
  const items = props.items.map(item => <Case {...item} key={item.id} />);

  return (
    <div className="cases-category">
      <div className="cases-category__title">
        {props.catTitle}
      </div>
      <div className="cases">
        {items}
      </div>
    </div>
  );
}

function MainCases() {
  const categories = db["cases"].map(cat => <Category {...cat} key={cat.catId} />);

  return (
    <div className="main-wrapper">
      {categories}
    </div>
  );
}

export default MainCases;

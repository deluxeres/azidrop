import React from "react";
import { Link } from 'react-router-dom';
import "./MainCases.scss";
import db from "../../../DataBase/Live.json";
import { useGetCategoriesQuery } from '../../../app/services/caseApi';
import { apiHost } from '../../../app/services/baseQueries';

const Case = function (props) {
  return (
    <Link to={`casePage/${props.id}`} className="case-item">
      <div className="case">
        <div className="case-card">
          <div className="case-card-hover"></div>
          <div className="case-card__img">
            <img src={props.img.replace('localhost', apiHost)} alt="case-card" />
          </div>
          <div className="case-card__info">
            <span className="case-card_name">{props.name}</span>
            <span className="case-card_price">{props.price} ₽</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const Category = function (props) {
  const items = props.cases.map(item => <Case {...item} key={item.id} />);

  return (
    <div className="cases-category">
      <div className="cases-category__title">
        {props.name}
      </div>
      <div className="cases">
        {items}
      </div>
    </div>
  );
}

function MainCases() {
  const { data, isLoading } = useGetCategoriesQuery();

  const categories = data && data.map(cat => <Category {...cat} key={cat.id} />);

  return isLoading ? null : (
    <div className="main-wrapper">
      {categories}
    </div>
  );
}

export default MainCases;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainCases.scss";
import db from "../../../DataBase/Live.json";
import { useGetCategoriesQuery, useGetFreeCaseQuery } from "../../../app/services/caseApi";
import { apiHost } from "../../../app/services/baseQueries";

const Case = function (props) {
  return (
    <Link to={`casePage/${props.catId === 45545654654 ? 'free-' + props.id : props.id}`} className="case-item">
      <div className="case">
        <div className="case-card">
          {/* <div className="case-card-limit">
            <span className="case-card-limit__count">214</span>
            <span className="case-card-limit__separator">/</span>
            <span className="case-card-limit__inner">1000</span>
          </div> */}
          <div className="case-card-hover"></div>
          <div className="case-card__img">
            <img
              src={props.img.replace("localhost", apiHost)}
              alt="case-card"
            />
          </div>
          <div className="case-card__info">
            <span className="case-card_name">{props.name}</span>
            {props.catId !== 45545654654 &&
            <span className="case-card_price">{props.price} ₽</span>
            }
          </div>
        </div>
      </div>
    </Link>
  );
};

const Category = function (props) {
  const items = props.cases.map((item) => <Case catId={props.catId} {...item} key={item.id} />);

  return (
    <div className="cases-category">
      <div className="cases-category__title">{props.name}</div>
      <div className="cases">{items}</div>
    </div>
  );
};

function MainCases() {
  const { data: cats, isLoading } = useGetCategoriesQuery();
  const { data: freeCases } = useGetFreeCaseQuery();

  const data = !!cats && JSON.parse(JSON.stringify(cats));

  !!data && data.unshift({
    id: 45545654654,
    name: 'Бесплатные кейсы',
    cases: (!!freeCases && freeCases.items) || [],
  });

  const categories = !!data && data.map((cat) => <Category catId={cat.id} {...cat} key={cat.id} />);

  return isLoading ? null : <div className="main-wrapper">{categories}</div>;
}

export default MainCases;

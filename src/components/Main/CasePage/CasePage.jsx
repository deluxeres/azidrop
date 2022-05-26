import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import db from "../../../DataBase/Live.json";
import './CasePage.scss';

function CasePage(props) {
  const [caseElem, setCaseElem] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    setCaseElem(db["cases"].filter(item => item.id === +id));

    db["cases"].forEach(item => {
      if (item.id === +id) {
        setCaseElem(item);
      }
    })
  }, []);

  console.log();

  return (
    <div className="case-page">
      <div className="container">
        <div className="case-wrapper">
          <div className="case">
            <div className="case__innerName">
              <span></span>
            </div>
            <div className="case__name">
              <span>{caseElem.name}</span>
            </div>
            <div className="case__image">
              <img src={caseElem.image} alt="case" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasePage
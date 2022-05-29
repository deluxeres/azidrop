import React from "react";
import "./Statictic.scss";

function Statictic() {
  return (
    <div className="statictic">
      <div className="stat-block">
        <div className="stat-info">
          <div className="stat-info__cases">
            <p>461 273 164</p>
            <span>ОТКРЫТО КЕЙСОВ</span>
          </div>
          <div className="stat-info__contracts">
            <p>461 323 </p>
            <span>КОНТРАКТОВ</span>
          </div>
          <div className="stat-info__players">
            <p>461 273 164</p>
            <span>ИГРОКОВ</span>
          </div>
          <div className="stat-info__online">
            <p>12323</p>
            <span>ОНЛАЙН</span>
          </div>
        </div>
        <div className="stat-img">
          <img
            src="https://ggdrop.gg/static/media/character.2823bbed.png"
            alt="stat"
          />
        </div>
      </div>
    </div>
  );
}

export default Statictic;

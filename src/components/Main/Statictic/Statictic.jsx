import React from "react";
import { useGetStatisticsQuery } from '../../../app/services/caseApi';
import "./Statictic.scss";

function Statictic() {
  const {data, isLoading} = useGetStatisticsQuery();

  return isLoading ? null : (
    <div className="statictic">
      <div className="stat-block">
        <div className="stat-info">
          <div className="stat-info__cases">
            <p>{data.case}</p>
            <span>КЕЙСОВ</span>
          </div>
          {/* <div className="stat-info__contracts">
            <p>461 323 </p>
            <span>КОНТРАКТОВ</span>
          </div> */}
          <div className="stat-info__players">
            <p>{data.user}</p>
            <span>ИГРОКОВ</span>
          </div>
          {/* <div className="stat-info__online">
            <p>0</p>
            <span>ОНЛАЙН</span>
          </div> */}
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

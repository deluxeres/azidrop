import React from "react";
import "./PayAlert.scss";

function PayAlert() {

  return (
    <div className="payalert">
      <div className="container">
        <div className="row">
            <div className="pay-status">
                <p>Ошибка</p>
                <span>Оплата не найдена, подождите немного, мы подкрутим гайки</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PayAlert;

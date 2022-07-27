import { Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import './Popup.scss';

function PayPopup(props) {
  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);

  const close = function () {
    props.close();
  }

  return (
    <div className="pay-popup">
      <div className="popup-modal">
        <div className="popup-modal__container">
          <button
            className="popup-modal__btn"
            onClick={close}
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="23px"
              height="23px"
            >
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
            </svg>
          </button>
          <div className="popup-modal__title">
            <p>Пополнение баланса</p>
          </div>
          <div className="popup-wrapper">
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/cards.e2f19d4d.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/qiwi.78b0a233.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/youmoney.ed9a1d75.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/alfabank.22ba2811.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/ecopayz.5840fd41.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/tron.81a8c177.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/sberbank.c77a6642.svg"
                alt="card"
              />
            </div>
            <div className="tab-card">
              <img
                src="https://ggdrop.gg/static/media/skinsback.a0b3ba26.svg"
                alt="card"
              />
            </div>
          </div>
          <div className="popup-modal__sum">
            <Text color="white" mb="20px" mt="15px">
              К оплате: {value} руб.
            </Text>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="Введите сумму пополнения"
              size="sm"
            />
          </div>
          <div className="popup-modal__sum">
            <input
              placeholder="FREE#234235"
              size="sm"
            />
          </div>
          <button className="popup-modal__pay">Пополнить счет</button>
        </div>
      </div>
    </div>
  );
}

export default PayPopup;

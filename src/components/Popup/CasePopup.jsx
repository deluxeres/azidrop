import { useDispatch } from 'react-redux';
import { setCaseSpin } from '../../app/caseSlice';
import './Popup.scss';

function CasePopup(props) {
  const dispatch = useDispatch();

  const close = function () {
    props.close();
    dispatch(setCaseSpin(false));
  }

  return (
    <div className="popup__window">
      <div className="popup__inner">
        {/* <button className="js-popup-close popup-close-btn" onClick={props.close}></button> */}

        <div className="popup__title">{props.title}</div>

        <div className="popup__img">
          <img src={props.img} alt="caseItem" />
        </div>

        <div className="popup__text">{props.text}</div>

        {/* {props.text && <div className="popup__sub-title">{props.text}</div>} */}

        <div className="popup-buttons">
          <div className="popup-buttons__item">
            <button onClick={close} className="popup__btn">Попробовать ещё</button>
          </div>
          <div className="popup-buttons__item">
            <button onClick={close} className="popup__btn">Забрать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasePopup;

import './Popup.scss';

function CasePopup(props) {
  return (
    <div className="popup__window">
      <div className="popup__inner">
        {/* <button className="js-popup-close popup-close-btn" onClick={props.close}></button> */}

        <div className="popup__title">{props.title}</div>

        {props.text && <div className="popup__sub-title">{props.text}</div>}

        <div className="popup-buttons">
          <div className="popup-buttons__item">
            <button onClick={props.close}>Попробовать ещё</button>
          </div>
          <div className="popup-buttons__item">
            <button onClick={props.close}>Забрать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasePopup;

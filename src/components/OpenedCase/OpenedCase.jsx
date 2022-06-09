import { Link } from 'react-router-dom';
import "./OpenedCase.scss";

export default function OpenedCase(props) {
    return (
        <div className="opened-case">
            <div className="opened-case__txt">
                Ваш выигрыш
            </div>
            <div className="opened-case__title">
                {props.data.ItemName}
            </div>
            <div className={"case__image " + props.data.badge}>
                <img src={props.data.itemImg} alt="item" />
            </div>
            <div className="opened-case__price">
                {props.data.itemPrice} P
            </div>
            <div className="opened-case__txt">
                Вы можете забрать этот предмет <Link to="/profile">в профиле</Link>
            </div>
            <div className="case-buttons">
                <div className="case-buttons__item">
                    <button onClick={props.tryAgain}>Попробовать ещё</button>
                </div>
                <div className="case-buttons__item">
                    <button onClick={props.take}>Забрать</button>
                </div>
            </div>
        </div>

    );
}
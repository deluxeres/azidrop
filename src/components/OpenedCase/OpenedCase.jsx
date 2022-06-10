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
                <div className="case-button__spin">
                    <button onClick={props.tryAgain}>Попробовать ещё</button>
                </div>
                <div className="case-button__quick">
                    <button onClick={props.take}>Продать за {props.data.itemPrice}₽</button>
                </div>
            </div>
        </div>

    );
}
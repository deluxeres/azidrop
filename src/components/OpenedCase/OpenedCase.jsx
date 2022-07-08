import { Link } from 'react-router-dom';
import "./OpenedCase.scss";

export default function OpenedCase(props) {
    const id = props.data.id;
    const skin = props.data.skin;

    return (
        <div className="opened-case">
            <div className="opened-case__txt">
                Ваш выигрыш
            </div>
            <div className="opened-case__title">
                {skin.name}
            </div>
            <div className={"case__image " + skin.badge}>
                <img src={skin.img} alt="item" />
            </div>
            <div className="opened-case__price">
                {skin.price} P
            </div>
            <div className="opened-case__txt">
                Вы можете забрать этот предмет <Link to="/profile">в профиле</Link>
            </div>
            <div className="case-buttons">
                <div className="case-button__spin">
                    <button onClick={props.tryAgain}>Попробовать ещё</button>
                </div>
                <div className="case-button__quick">
                    <button onClick={() => props.sellSkin(id)}>Продать за {skin.price}₽</button>
                </div>
            </div>
        </div>

    );
}
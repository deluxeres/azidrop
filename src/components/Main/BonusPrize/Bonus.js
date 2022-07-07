import React from 'react';
import { useGetPayWinnerQuery } from '../../../app/services/caseApi';

const PrizeItem = function (props) {
    return (
        <div className="prize-item">
            <div className="prize-item-container">
                <div className="prize-item__subtitle">Уровень</div>
                <div className="prize-item__price">
                    <span>{props.payment_gift.min}Р - {props.payment_gift.max}Р</span>
                </div>
                <div className="prize-item__winner">
                    <div className="prize-item__win">Победитель</div>
                    <div className="prize-item__img">
                        <img src={props.winner.img} alt='winner' />
                    </div>
                    <div className="prize-item__userName">{props.winner.name}</div>
                </div>
                <div className="prize-item__drop">
                    <div className="item-drop-img">
                        <img src={props.payment_gift.skin.img} alt={props.payment_gift.skin.name} />
                    </div>
                    <div className="prize-item__btn">
                        <span>{props.payment_gift.skin.price}Р</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Bonus = () => {
    const { data: winnersData, isLoading } = useGetPayWinnerQuery();
    const prizeItems = winnersData && winnersData.map(item => <PrizeItem {...item} key={item.id} />)

    return isLoading ? null : (
        <div className="prize-board-wrapper">
            <div className="prize-board">
                {prizeItems}
            </div>
        </div>
    );
}

export default Bonus;

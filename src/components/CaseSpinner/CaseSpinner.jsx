import css from "./CaseSpinner.module.scss";
import { useEffect, useRef } from 'react';
import { openCasePopup } from '../../app/popupSlice';
import { useDispatch } from 'react-redux';
import Animate from './CaseSpinnerAnimation';

const Item = function (props) {
    return (
        <div className={css.spinerInner__item} data-id={props.CaseId}>
            <div className={css.spinerInner__card + " case-content__item"}>
                <div className="case-badge">
                    <span className={props.badge}></span>
                </div>
                <div className="case-item__img">
                    <img src={props.itemImg} alt="itemGun" />
                </div>
                <span className="case-item__name">{props.ItemName}</span>
            </div>
        </div>
    );
}

export default function CaseSpinner(props) {
    const spinerInnerRef = useRef();
    const prevScroll = useRef(0);
    const lastId = useRef();
    const dispatch = useDispatch();

    const caseOpen = function (id) {
        for (const item of props.data) {
            if (item.CaseId === id) {

                dispatch(openCasePopup({
                    title: item.ItemName,
                    img: item.itemImg,
                    text: item.itemPrice + ' P',
                }));

                break;
            }
        }
    }

    let multiplyData = [];

    for (let i = 0; i < 21; i++) {
        multiplyData = multiplyData.concat(props.data);
    }

    const items = multiplyData.map((it, i) => <Item {...it} key={i} />);

    useEffect(() => {
        if (lastId.current === undefined) {
            lastId.current = null;

            const spin = async function () {
                const itemElems = spinerInnerRef.current.querySelectorAll('.' + css.spinerInner__item);
                const itemElemsArr = [];
                let scrolled = 0;

                for (const item of itemElems) {
                    itemElemsArr.push({
                        id: item.getAttribute('data-id'),
                        left: item.getBoundingClientRect().left + prevScroll.current - (window.innerWidth / 2) + (item.offsetWidth / 2)
                    });
                }

                const anim = Animate({
                    from: prevScroll.current,
                    duration: 1000,
                    amountPerDuration: 1000
                }, (progress) => {
                    scrolled = progress;
                    spinerInnerRef.current.style.transform = 'translateX(-' + progress + 'px)';
                }, () => {
                    setTimeout(() => {
                        caseOpen(lastId.current);
                    }, 500);
                });

                const id = await props.getRandomId();

                lastId.current = id;

                for (const item of itemElemsArr) {
                    if (item.id == id && item.left - 3000 > scrolled) {
                        anim.stop(item.left);
                        break;
                    }
                }
            }

            setTimeout(spin, 300);
        }
    }, []);

    return (
        <>
            <div className={css.spiner}>
                <div ref={spinerInnerRef} className={css.spinerInner}>
                    {items}
                </div>
            </div>
            <div className={css.arrow}></div>
        </>
    );
}
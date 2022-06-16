import css from "./CaseSpinner.module.scss";
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Animate from './CaseSpinnerAnimation';
import sound from './../../Assets/spinner.mp3';

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
    const spinerRef = useRef();
    const spinerInnerRef = useRef();
    const soundRef = useRef();
    const prevScroll = useRef(0);
    const lastId = useRef();
    const dispatch = useDispatch();

    const onStop = function (id) {
        props.onStop(id);
    }

    let multiplyData = [];

    for (let i = 0; i < 21; i++) {
        multiplyData = multiplyData.concat(props.data);
    }

    const items = multiplyData.map((it, i) => <Item {...it} key={i} />);

    useEffect(() => {
        const allLinks = document.querySelectorAll('a');

        for (const link of allLinks) {
            link.setAttribute('data-disabled', 'disabled');
        }

        if (lastId.current === undefined) {
            lastId.current = null;

            const spin = async function () {
                const itemElems = spinerInnerRef.current.querySelectorAll('.' + css.spinerInner__item);
                const itemElemsArr = [];
                let scrolled = 0;

                for (const item of itemElems) {
                    itemElemsArr.push({
                        id: item.getAttribute('data-id'),
                        left: item.getBoundingClientRect().left - spinerRef.current.getBoundingClientRect().left + prevScroll.current - (spinerRef.current.offsetWidth / 2) + (item.offsetWidth / 2)
                    });
                }

                const anim = Animate({
                    from: prevScroll.current,
                    duration: 700,
                    amountPerDuration: 1000
                }, (progress) => {
                    scrolled = progress;
                    spinerInnerRef.current.style.transform = 'translateX(-' + progress + 'px)';
                }, () => {
                    setTimeout(() => {
                        for (const link of allLinks) {
                            link.removeAttribute('data-disabled');
                        }

                        onStop(lastId.current);
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

            soundRef.current.play();
        }
    }, []);

    return (
        <>
            <div className={css.spinerWrap}>
                <div ref={spinerRef} className={css.spiner}>
                    <div ref={spinerInnerRef} className={css.spinerInner}>
                        {items}
                    </div>
                </div>
                <div className={css.spinerWrap__arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.041748L0 13.0321H1.99509L7.49991 3.4975L13.0047 13.0321H15L7.5 0.041748ZM2.30376 16.0632L7.55376 6.96995L12.8038 16.0632H2.30376ZM5.30376 14.3312L7.55376 10.4341L9.80376 14.3312H5.30376Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="24.375" y1="-20.0934" x2="-0.220872" y2="19.4016" gradientUnits="userSpaceOnUse"><stop stopColor="#FC4743"></stop><stop offset="1" stopColor="#FFE910"></stop></linearGradient></defs></svg>
                </div>
                <div className={css.spinerWrap__arrow + ' ' + css.spinerWrap__arrow_bot}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.041748L0 13.0321H1.99509L7.49991 3.4975L13.0047 13.0321H15L7.5 0.041748ZM2.30376 16.0632L7.55376 6.96995L12.8038 16.0632H2.30376ZM5.30376 14.3312L7.55376 10.4341L9.80376 14.3312H5.30376Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="24.375" y1="-20.0934" x2="-0.220872" y2="19.4016" gradientUnits="userSpaceOnUse"><stop stopColor="#FC4743"></stop><stop offset="1" stopColor="#FFE910"></stop></linearGradient></defs></svg>
                </div>
            </div>
            <audio ref={soundRef} src={sound}></audio>
        </>
    );
}

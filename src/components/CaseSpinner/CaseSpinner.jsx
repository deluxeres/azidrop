import css from "./CaseSpinner.module.scss";
import { useEffect, useRef } from 'react';
import { openCasePopup } from '../../app/popupSlice';
import { useDispatch } from 'react-redux';

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

const animate = function ({ from, to, duration, ease, infinite, amountPerDuration }, draw, complete) {
    const start = performance.now();

    let endTimeFraction = 0,
        endAnimateTo,
        currentAnimateTo,
        stop = false,
        currentTimeFraction;

    if (infinite) {
        requestAnimationFrame(function anim(time) {
            let timeFraction = (time - start) / duration;

            if (timeFraction < 1) {
                let progress = easing(timeFraction, 'easeInQuad');

                const animateTo = from + (amountPerDuration * progress);

                currentAnimateTo = animateTo;
                currentTimeFraction = timeFraction;

                draw(animateTo);

            } else if (stop) {
                endTimeFraction = timeFraction - currentTimeFraction;

                if (endTimeFraction > 1) {
                    endTimeFraction = 1;
                }

                let progress = easing(endTimeFraction, 'easeOutQuad');

                const animateTo = currentAnimateTo + ((endAnimateTo - currentAnimateTo) * progress);

                draw(animateTo);

            } else {
                let progress = timeFraction;

                const animateTo = from + (amountPerDuration * progress * 2);

                currentAnimateTo = animateTo;
                currentTimeFraction = timeFraction;

                draw(animateTo);

                if (endAnimateTo && endAnimateTo - animateTo <= amountPerDuration) {
                    stop = true;
                }
            }

            if (endTimeFraction < 1) {
                requestAnimationFrame(anim);
            } else {
                if (complete !== undefined) {
                    complete();
                }
            }
        });

    } else {
        requestAnimationFrame(function anim(time) {
            let timeFraction = (time - start) / duration;

            if (timeFraction > 1) {
                timeFraction = 1;
            }

            let progress = timeFraction;

            if (ease) {
                progress = easing(timeFraction, ease);
            }

            const animateTo = from + ((to - from) * progress);

            draw(animateTo);

            if (timeFraction < 1) {
                requestAnimationFrame(anim);
            } else {
                if (complete !== undefined) {
                    complete();
                }
            }
        });
    }

    return {
        stop: function (val) {
            endAnimateTo = val;
        }
    };
}

function easing(timeFraction, ease) {
    switch (ease) {
        case 'easeInQuad':
            return quad(timeFraction);

        case 'easeOutQuad':
            return 1 - quad(1 - timeFraction);

        case 'easeInOutQuad':
            if (timeFraction <= 0.5) {
                return quad(2 * timeFraction) / 2;
            } else {
                return (2 - quad(2 * (1 - timeFraction))) / 2;
            }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
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
                    text: item.ItemName
                }));

                break;
            }
        }
    }

    let multiplyData = [];

    for (let i = 0; i < 33; i++) {
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

                const an = animate({
                    from: prevScroll.current,
                    duration: 1000,
                    infinite: true,
                    amountPerDuration: 1000
                }, (progress) => {
                    scrolled = progress;
                    spinerInnerRef.current.style.transform = 'translateX(-' + progress + 'px)';
                }, () => {
                    setTimeout(() => {
                        caseOpen(lastId.current);
                    }, 500);
                    // for (const item of itemElemsArr) {
                    //     if (item.id == lastId && item.left > window.innerWidth) {
                    //         spinerInnerRef.current.style.transform = 'translateX(-' + item.left + 'px)';
                    //         prevScroll.current = item.left;
                    //         break;
                    //     }
                    // }
                });

                const id = await props.getRandomId();

                lastId.current = id;

                for (const item of itemElemsArr) {
                    if (item.id == id && item.left - 3000 > scrolled) {
                        an.stop(item.left);
                        console.log(item);
                        break;
                    }
                }

                console.log(id);
            }

            setTimeout(spin, 500);
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
            {/* <button className={css.btn} onClick={spin}>Крутить</button> */}
        </>
    );
}
import './Popup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, selectMessage, selectVisible } from '../../app/popupSlice';
import { useEffect } from 'react';
import CasePopup from './CasePopup';
import PayPopup from './PayPopup';

let winScrollTop = 0;

const fixBody = function (st) {
    const headerElem = document.getElementById('header');

    if (st && !document.body.classList.contains('popup-is-opened')) {
        winScrollTop = window.pageYOffset;

        const offset = window.innerWidth - document.documentElement.clientWidth;

        document.body.classList.add('popup-is-opened');

        if (headerElem) {
            headerElem.style.transition = '0s';
            headerElem.style.right = offset + 'px';
        }

        document.body.style.right = offset + 'px';

        document.body.style.top = -winScrollTop + 'px';
    } else if (!st) {
        if (headerElem) {
            headerElem.style.right = '';
            setTimeout(function () {
                headerElem.style.transition = '';
            }, 321);
        }

        document.body.classList.remove('popup-is-opened');

        window.scrollTo(0, winScrollTop);
    }
};

function Popup() {
    const dispatch = useDispatch();
    const visiblePopupName = useSelector(selectVisible);
    const message = useSelector(selectMessage);

    const close = () => {
        dispatch(closePopup());
    };

    let visiblePopup = null;

    switch (visiblePopupName) {
        case 'CasePopup':
            visiblePopup = <CasePopup close={close} {...message} />;
            break;

        case 'PayPopup':
            visiblePopup = <PayPopup close={close} />;
            break;

        default:
            visiblePopup = null;
            break;
    }

    useEffect(function () {
        if (visiblePopupName !== 'PayPopup') {
            if (visiblePopup) {
                fixBody(true);
            } else {
                fixBody(false);
            }
        }

    }, [visiblePopupName]);

    if (visiblePopupName === 'PayPopup') {
        return visiblePopup;
    }

    return <>{visiblePopup && <div className="popup">{visiblePopup}</div>}</>;
}

export default Popup;

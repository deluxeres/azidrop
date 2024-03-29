import React from "react";
import "./HeaderTop.scss";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";


function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container-top">
        <div className="header-top-burger">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              className='burgerButton'
            />
            <MenuList className="burgerList">
              <MenuItem className="burgerLink">
                <Link to="/bonus-prize">Призы за пополнения</Link>
              </MenuItem>
              <MenuItem className="burgerLink">
                <Link to="/bonus">Бонусная система</Link>
              </MenuItem>
              <MenuItem className="burgerLink">
              <Link to="/faq">FAQ</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="header-top__link">
          <nav>
            <ul>
              <li>
                <Link to="/bonus-prize">Призы за пополнения</Link>
              </li>
              <li>
                <Link to="/bonus">Бонусная система</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-social">
        <div className="header-online">
          <div className="online-general-bar">
            <div className="online-bar"></div>
          </div>
          <span>{Math.floor(110 + 10 * Math.random())}</span>
        </div>
          <a href="https://vk.com/club214414714" target="_blanc" rel="noopener">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 22 22"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.2637 3.2637C2 4.5313 2 6.5675 2 10.625v.7858c0 4.0337 0 6.0654 1.2637 7.3255C4.5313 20 6.5675 20 10.625 20h.9249c3.9415.0003 5.9409.0004 7.1863-1.2487C20 17.4838 20 15.4475 20 11.375v-.7858c0-4.0337 0-6.0654-1.2638-7.3255C17.4688 2 15.4325 2 11.375 2h-.7858C6.5555 2 4.5238 2 3.2637 3.2637Zm1.7738 4.2039c.0975 4.6874 2.4375 7.4999 6.54 7.4999l.2325.0075v-2.6775a3.7013 3.7013 0 0 1 3.105 2.6775h2.1375a5.9226 5.9226 0 0 0-3.0825-3.75 5.7145 5.7145 0 0 0 2.625-3.75H14.66c-.42 1.485-1.665 2.835-2.85 2.9625V7.4751H9.875v5.1824c-1.2-.315-2.715-1.755-2.7825-5.19h-2.055Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
          {/* <a href="https://twitter.com/" target="_blanc" rel="noopener">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 40 40"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.763 5.7339a1.233 1.233 0 0 0-.5744-.2614 1.2449 1.2449 0 0 0-.6308.055C30.1972 7.781 10.6372 14.8323 2.641 17.6679a1.2136 1.2136 0 0 0-.6076.4511 1.1792 1.1792 0 0 0-.2146.718c.0085.2555.1004.501.2622.7014.1618.2004.3849.3452.6364.4117 3.5868 1.0235 8.2928 2.4592 8.2928 2.4592s2.1999 6.3754 3.3477 9.6242a1.287 1.287 0 0 0 .3468.5309c.1586.1458.3517.2509.5618.3053.2149.0542.4401.0552.6555.0028a1.3489 1.3489 0 0 0 .5784-.3035 3602.2176 3602.2176 0 0 1 4.6867-4.2537s5.4136 3.8121 8.4839 5.906c.2409.1651.519.2714.8103.309.2913.0376.5873.0057.8635-.0926a1.7368 1.7368 0 0 0 .7085-.4732 1.688 1.688 0 0 0 .3916-.7473c1.32-5.9435 4.5146-20.9764 5.7102-26.3848a1.0857 1.0857 0 0 0-.0367-.6042 1.1032 1.1032 0 0 0-.3554-.4942Zm-6.2363 5.4649L16.0985 24.5594l-.5641 5.0991-2.5444-8.0562s11.5257-7.0707 18.0202-11.0518a.4481.4481 0 0 1 .305-.0587.4423.4423 0 0 1 .2687.1532.393.393 0 0 1 .0857.2879.3983.3983 0 0 1-.1429.2659Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
          <a href="https://twitter.com/" target="_blanc" rel="noopener">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 22 22"
            >
              <path
                d="M20.5879 6.1907c-.2305-.8566-.906-1.532-1.7627-1.7626C17.2601 4 10.9997 4 10.9997 4s-6.2601 0-7.8252.4119c-.8402.2304-1.5322.9223-1.7627 1.7788C1 7.7553 1 11 1 11s0 3.2611.412 4.8093c.2306.8565.906 1.5318 1.7627 1.7625C4.7561 18 11 18 11 18s6.2601 0 7.8252-.4119c.8568-.2305 1.5322-.9058 1.7629-1.7623.4118-1.5647.4118-4.8093.4118-4.8093s.0164-3.2613-.412-4.8258ZM9.0065 13.9976V8.0024L14.2125 11l-5.2058 2.9976Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
          <a href="https://twitter.com/" target="_blanc" rel="noopener">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 22 22"
            >
              <path
                d="M16.3711 2H5.6287C3.6247 2 2 3.6247 2 5.6288v10.7424C2 18.3753 3.6246 20 5.6287 20h10.7424c2.0042 0 3.6288-1.6247 3.6288-3.6288V5.6288C19.9999 3.6247 18.3753 2 16.3711 2Zm-.224 7.8527h-.0018a3.182 3.182 0 0 1-.2957.015 3.211 3.211 0 0 1-2.6866-1.452v4.9445c0 2.0183-1.6362 3.6544-3.6545 3.6544-2.0182 0-3.6544-1.6361-3.6544-3.6544s1.6361-3.6545 3.6544-3.6545c.0382 0 .0759.0018.1134.004.0376.0024.075.0052.1125.0073v1.8014c-.075-.009-.1488-.0227-.2259-.0227-1.03 0-1.8648.8352-1.8648 1.8648 0 1.0296.8352 1.8648 1.8648 1.8648 1.0296 0 1.9401-.8116 1.9401-1.842l.018-8.3974h1.7229c.1625 1.545 1.4082 2.7518 2.9576 2.865v2.0018Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

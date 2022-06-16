import React from "react";
import "./HeaderLive.scss";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import liveGuns from "../../../DataBase/Live.json";
import { Link } from "react-router-dom";
// import headerLogo from "../../../Assets/images/Header/logo.png";
import headerLogo from "../../../Assets/images/Header/logotype.png";

function HeaderLive() {
  return (
    <div className="header-live">
      <div className="LiveContainer">
        <div className="header-lent">
        <div className="header__logo">
            <Link to="/">
                <img src={headerLogo} alt="logotype" />
            </Link>
          </div>
          <div className="live-tabs">
            <Tabs variant="unstyled" className="tab-live">
              <div className="tab-list__left">
                <TabList className="tabLive__list">
                  <Tab
                    _selected={{ color: "#000000", bg: "#ffffff" }}
                    className="tab-btn"
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.67C19.9368 7.48709 19.822 7.32643 19.6693 7.2075C19.5167 7.08858 19.3328 7.0165 19.14 7L13.45 6.17L10.9 1C10.8181 0.830929 10.6903 0.688342 10.5311 0.588574C10.3719 0.488805 10.1879 0.43589 10 0.43589C9.81214 0.43589 9.62809 0.488805 9.46891 0.588574C9.30974 0.688342 9.18189 0.830929 9.1 1L6.55 6.16L0.86 7C0.674923 7.02631 0.500924 7.10396 0.357751 7.22416C0.214577 7.34435 0.10796 7.50227 0.0500003 7.68C-0.0030547 7.85367 -0.00781576 8.03852 0.0362281 8.21469C0.0802719 8.39087 0.171458 8.55173 0.3 8.68L4.43 12.68L3.43 18.36C3.3943 18.5475 3.41299 18.7413 3.48387 18.9185C3.55475 19.0956 3.67485 19.2489 3.83 19.36C3.98122 19.4681 4.15957 19.5319 4.34505 19.5443C4.53052 19.5567 4.71577 19.5171 4.88 19.43L10 16.76L15.1 19.44C15.2403 19.5192 15.3989 19.5605 15.56 19.56C15.7718 19.5608 15.9784 19.4942 16.15 19.37C16.3051 19.2589 16.4252 19.1056 16.4961 18.9285C16.567 18.7513 16.5857 18.5575 16.55 18.37L15.55 12.69L19.68 8.69C19.8244 8.56768 19.9311 8.4069 19.9877 8.22635C20.0444 8.04579 20.0486 7.85287 20 7.67ZM13.85 11.67C13.7327 11.7834 13.645 11.9238 13.5944 12.079C13.5439 12.2341 13.5321 12.3992 13.56 12.56L14.28 16.75L10.52 14.75C10.3753 14.673 10.2139 14.6327 10.05 14.6327C9.88608 14.6327 9.72468 14.673 9.58 14.75L5.82 16.75L6.54 12.56C6.56794 12.3992 6.55611 12.2341 6.50557 12.079C6.45502 11.9238 6.36728 11.7834 6.25 11.67L3.25 8.67L7.46 8.06C7.622 8.03747 7.776 7.97554 7.9085 7.87965C8.041 7.78376 8.14796 7.65684 8.22 7.51L10 3.7L11.88 7.52C11.952 7.66684 12.059 7.79376 12.1915 7.88965C12.324 7.98554 12.478 8.04747 12.64 8.07L16.85 8.68L13.85 11.67Z"
                        fill="#000"
                      />
                    </svg>
                  </Tab>
                  <Tab
                    _selected={{ color: "#000000", bg: "#ffffff" }}
                    className="tab-btn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C7.43639 0.00731219 4.97349 0.998914 3.12 2.77V1C3.12 0.734784 3.01464 0.48043 2.82711 0.292893C2.63957 0.105357 2.38522 0 2.12 0C1.85478 0 1.60043 0.105357 1.41289 0.292893C1.22536 0.48043 1.12 0.734784 1.12 1V5.5C1.12 5.76522 1.22536 6.01957 1.41289 6.20711C1.60043 6.39464 1.85478 6.5 2.12 6.5H6.62C6.88522 6.5 7.13957 6.39464 7.32711 6.20711C7.51464 6.01957 7.62 5.76522 7.62 5.5C7.62 5.23478 7.51464 4.98043 7.32711 4.79289C7.13957 4.60536 6.88522 4.5 6.62 4.5H4.22C5.50578 3.15636 7.21951 2.30265 9.06653 2.08567C10.9136 1.86868 12.7785 2.30198 14.3407 3.31104C15.9028 4.32011 17.0646 5.84191 17.6263 7.61479C18.188 9.38767 18.1145 11.3009 17.4184 13.0254C16.7223 14.7499 15.4472 16.1781 13.8122 17.0643C12.1772 17.9505 10.2845 18.2394 8.45956 17.8813C6.63463 17.5232 4.99147 16.5405 3.81259 15.1022C2.63372 13.6638 1.99279 11.8597 2 10C2 9.73478 1.89464 9.48043 1.70711 9.29289C1.51957 9.10536 1.26522 9 1 9C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 11.9778 0.58649 13.9112 1.6853 15.5557C2.78412 17.2002 4.3459 18.4819 6.17317 19.2388C8.00043 19.9957 10.0111 20.1937 11.9509 19.8079C13.8907 19.422 15.6725 18.4696 17.0711 17.0711C18.4696 15.6725 19.422 13.8907 19.8079 11.9509C20.1937 10.0111 19.9957 8.00043 19.2388 6.17317C18.4819 4.3459 17.2002 2.78412 15.5557 1.6853C13.9112 0.58649 11.9778 0 10 0ZM10 6C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7V10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11H12C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9H11V7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6Z"
                        fill="#000"
                      />
                    </svg>
                  </Tab>
                </TabList>
              </div>
              <div className="tab-list__right">
                <TabPanels>
                  <TabPanel>
                    <div className="live-top">
                      <div className="live-top__container">
                        {liveGuns['live'].reverse().map((gun) => {
                          return (
                            <div className="live-card__card" key={gun.id}>
                              {/* <div className="live-card__name">
                                <span>{gun.name}</span>
                              </div> */}
                              <div className="live-card__line">
                                <span className={gun.line}></span>
                              </div>

                              <div className="live-card__badge">
                                <span className={gun.badge}></span>
                              </div>

                              <div className="live-card__img">
                                <img src={gun.imageUrl} alt="gun" />
                              </div>
                              {/* <div className="live-card__tag">
                                <span className={gun.badge}></span>
                              </div> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="live-top">
                      <div className="live-top__container">
                        {liveGuns['live'].map((gun) => {
                          return (
                            <div className="live-card__card" key={gun.id}>
                              {/* <div className="live-card__name">
                                <span>{gun.name}</span>
                              </div> */}
                              <div className="live-card__line">
                                <span className={gun.line}></span>
                              </div>

                              <div className="live-card__badge">
                                <span className={gun.badge}></span>
                              </div>

                              <div className="live-card__img">
                                <img src={gun.imageUrl} alt="gun" />
                              </div>
                              {/* <div className="live-card__tag">
                                <span className={gun.badge}></span>
                              </div> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLive;

import React from 'react'
import "./BonusPrize.scss"
import { Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function BonusPrize() {
  return (
    <div className="bonus-prize">
        <div className="container">
            <div className="prize-section">
                <span className="prize-title">Призы за пополнения</span>

                <div className="prize-board-wrapper">
                    <div className="prize-board">
                        <div className="prize-item">
                            <div className="prize-item-container">
                                <div className="prize-item__subtitle">Уровень</div>
                                <div className="prize-item__price">
                                    <span>500.00Р - 1500.00Р</span>
                                </div>
                                <div className="prize-item__winner">
                                    <div className="prize-item__win">Победитель</div>
                                    <div className="prize-item__img">
                                        <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9b/9bacefd28f8e9ae2f65fee14a05bc0466f19d345_full.jpg' alt='winner'/>
                                    </div>
                                    <div className="prize-item__userName">-_-AnArChIsT-_-</div>
                                </div>
                                <div className="prize-item__drop">
                                    <div className="item-drop-img">
                                        <img src='https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI/267fx200f/image.png' alt='drop'/>
                                    </div>
                                    <div className="prize-item__btn">
                                        <span>965.46Р</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prize-item">
                            <div className="prize-item-container">
                                <div className="prize-item__subtitle">Уровень</div>
                                <div className="prize-item__price">
                                    <span>500.00Р - 1500.00Р</span>
                                </div>
                                <div className="prize-item__winner">
                                    <div className="prize-item__win">Победитель</div>
                                    <div className="prize-item__img">
                                        <img src='https://avatars.akamai.steamstatic.com/009ee8b43b97f87dc748467358f3f03248aa3ddc_full.jpg' alt='winner'/>
                                    </div>
                                    <div className="prize-item__userName">⫷ ΓΣ𝓗𝓡 ⫸</div>
                                </div>
                                <div className="prize-item__drop">
                                    <div className="item-drop-img">
                                        <img src='https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPv9NLPF2GgE7MEk3e-ZoNmgjAXnqEdtNWn7JISRJAQ5MFHT-1W-xuq9g5-07cvXiSw0SeFYhWE/267fx200f/image.png' alt='drop'/>
                                    </div>
                                    <div className="prize-item__btn">
                                        <span>965.46Р</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prize-item">
                            <div className="prize-item-container">
                                <div className="prize-item__subtitle">Уровень</div>
                                <div className="prize-item__price">
                                    <span>500.00Р - 1500.00Р</span>
                                </div>
                                <div className="prize-item__winner">
                                    <div className="prize-item__win">Победитель</div>
                                    <div className="prize-item__img">
                                        <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9b/9bacefd28f8e9ae2f65fee14a05bc0466f19d345_full.jpg' alt='winner'/>
                                    </div>
                                    <div className="prize-item__userName">-_-AnArChIsT-_-</div>
                                </div>
                                <div className="prize-item__drop">
                                    <div className="item-drop-img">
                                        <img src='https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI/267fx200f/image.png' alt='drop'/>
                                    </div>
                                    <div className="prize-item__btn">
                                        <span>965.46Р</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prizes-faq">
                        <span className="prizes-faq-title">FAQ</span>
                        <Accordion allowToggle="true" className="prizes-accord">
                        <AccordionItem className="accord-block">
                            <h2>
                            <AccordionButton className="faq-btn">
                                <Box flex='1' textAlign='left' className="accord-title">
                                Как принять участие?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} className="faq-text">
                            Для участия необходимо пополнить баланс на сумму соответствующую одному из уровней.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem className="accord-block">
                            <h2>
                            <AccordionButton className="faq-btn">
                                <Box flex='1' textAlign='left' className="accord-title">
                                Как определяется победитель?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} className="faq-text">
                            В каждом из уровней случайным образом определяется по 1 победителю.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem className="accord-block">
                            <h2>
                            <AccordionButton className="faq-btn">
                                <Box flex='1' textAlign='left' className="accord-title">
                                Когда определяется победитель?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} className="faq-text">
                            Победители определяются автоматически в конце розыгрыша.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem className="accord-block">
                            <h2>
                            <AccordionButton className="faq-btn">
                                <Box flex='1' textAlign='left' className="accord-title">
                                Я победил! Как забрать приз?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} className="faq-text">
                            Выигранный предмет появится на странице вашего профиля и вы сразу сможете его вывести.
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BonusPrize
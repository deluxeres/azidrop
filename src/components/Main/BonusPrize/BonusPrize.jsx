import React from 'react'
import "./BonusPrize.scss"
import Bonus from "./Bonus"
import { Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function BonusPrize() {
    return (
        <div className="bonus-prize">
            <div className="container">
                <div className="prize-section">
                    <span className="prize-title">Призы за пополнения</span>

                    <Bonus />

                    <div className="prizes-faq">
                        <span className="prizes-faq-title">FAQ</span>
                        <Accordion allowToggle="true" className="prizes-accord">
                            <AccordionItem className="accord-block">
                                <h2>
                                    <AccordionButton className="faq-btn">
                                        <Box flex='1' textAlign='left' className="accord-title">
                                            Как принять участие в розыгрыше?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="faq-text">
                                            Для участия вам необходимо пополнить баланс на сумму, соответствующую одному из трех уровней розыгрыша. Пока работает таймер, ваши пополнения суммируются неограниченное количество раз. Пополнив счет более чем на 1500р вы примете участие во всех трех розыгрышах и сможете испытать удачу в борьбе за них
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
                                         В каждом из уровней розыгрыша случайным образом определяется по одному счастливчику
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
                                            Победители определяются автоматически по истечению времени на таймере. 
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className="accord-block">
                                <h2>
                                    <AccordionButton className="faq-btn">
                                        <Box flex='1' textAlign='left' className="accord-title">
                                            Как забрать приз?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className="faq-text">
                                        Предмет появится на странице вашего профиля после чего вы сможете его вывести.
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
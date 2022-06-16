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
import React, {useState} from 'react'
import Statictic from "../Statictic/Statictic"
import "./ProfilePage.scss"
import { Link } from "react-router-dom"
import {Input, Text} from '@chakra-ui/react'
import ProfileDrop from './ProfileDrop/ProfileDrop'

function ProfilePage() {

  const [show, setShow] = useState(false)

  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <div className="profile">
      <div className="container">
        <div className="btn-back">
          <Link to="/">
          <svg width="20px" height="20px" viewBox="0 0 21 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM21 7H1v2h20V7z" fill="#838383"></path></svg>
          На главную</Link>
        </div>
        <div className="profile-block">
          <div className="profile-block-left">
            <div className="profile-general">
                <div className="profile-general-user">
                  <div className="profile-general-block">
                    <div className="profile-user">
                      <img src="https://cdn.cases4real.cc/fit?width=55&height=55&url=https%3A%2F%2Favatars.akamai.steamstatic.com%2Fd4e93690f8c87d8fe2f731e6aa2eb7895e1f33d1_full.jpg" alt='user'/>
                    </div>
                    <div className="profile-user-info"> 
                      <span className="profile-name">User213213</span>
                      <span className="profile-balance">1000 Р</span>
                    </div>
                  </div>
                  <div className="profile-main">
                    <button onClick={() => setShow(!show)} className="profile-main__pay"><span>+</span>Пополнить</button>
                  </div>
                </div>
              </div>
              <div className="profile-trade">
                  <div className="profile-trade-block">
                    <span>Trade URL</span>
                    <a href="https://steamcommunity.com">Где взять ссылку для обмена?</a>
                  </div>
                  <div className="profile-trade-wrapper">
                    <div className="profile-trade-text"><svg width="25px" height="25px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#icon-shared-chain-a)" fill="#606062"><path d="M18.627 1.373a4.688 4.688 0 0 0-6.63 0L8.08 5.29c-1.893 1.893-1.718 4.91 0 6.629.288.287.606.522.942.715l.716-.715c.469-.47.303-1.018.295-1.413a2.265 2.265 0 0 1-.295-.245c-.882-.881-.922-2.393 0-3.314l3.917-3.918a2.346 2.346 0 0 1 3.315 0c.914.914.914 2.4 0 3.315l-2.59 2.59c.075.414.524 1.395.293 3.014.012-.01.025-.018.036-.03l3.918-3.917a4.688 4.688 0 0 0 0-6.629Z"></path><path d="M12.223 7.777a4.459 4.459 0 0 0-.942-.715l-.715.715c-.469.469-.304 1.017-.295 1.413.103.072.203.151.295.244.882.882.921 2.393 0 3.314L6.345 16.97c-.914.914-2.4.914-3.315 0a2.346 2.346 0 0 1 0-3.315l2.893-2.893c-.074-.415-.524-1.396-.293-3.015-.011.011-.025.018-.036.03l-4.221 4.22a4.688 4.688 0 0 0 6.629 6.63l4.221-4.221c1.859-1.859 1.757-4.873 0-6.63Z"></path></g><defs><clipPath id="icon-shared-chain-a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg></div>
                    <input type="text" placeholder="Введите Trade URL"/>
                  </div>
                </div>
              <div className="profile-info-stat">
                <div className="profile-stat-block">
                  <div className="profile-stat-img">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(promo-counter-lock-a)"><path d="M19.2 9.6H8.4V6.1c0-1.8 1.2-3.3 2.9-3.7A3.7 3.7 0 0 1 15.6 6 1.2 1.2 0 0 0 18 6a6 6 0 0 0-6.6-6A6.2 6.2 0 0 0 6 6.3v3.3H4.8c-.6 0-1.2.5-1.2 1.2v12c0 .6.6 1.2 1.2 1.2h14.4c.7 0 1.2-.6 1.2-1.2v-12c0-.7-.5-1.2-1.2-1.2Zm-6 8v1.6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-1.6a2.5 2.5 0 0 1-1.2-2c0-1.5 1.4-2.6 3-2.3.8.3 1.6 1 1.8 1.8.2 1.1-.4 2-1.2 2.5Z" fill="#EFBB0A"></path></g><defs><clipPath id="promo-counter-lock-a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                  </div>
                  <div>
                    <span className="profile-stat__balance">0</span>
                    <span className="profile-stat__cases">Открыто кейсов</span>
                  </div>
                </div>
                <div className="profile-stat-block">
                  <div className="profile-stat-img">
                    <svg width="25px" height="25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#contract-shared-clip)"><path fillRule="evenodd" clipRule="evenodd" d="M5.83 1.33A3.17 3.17 0 002.67 4.5V14H2.5a1.83 1.83 0 01-1.83-1.83V1.83C.67.83 1.49 0 2.5 0h7.67c.83 0 1.53.57 1.75 1.33H5.83zm0 1.34h7.67c1.01 0 1.83.82 1.83 1.83v9.67c0 1-.82 1.83-1.83 1.83H5.83A1.83 1.83 0 014 14.17V4.5c0-1.01.82-1.83 1.83-1.83zM7.17 14h5a.5.5 0 000-1h-5a.5.5 0 000 1zm0-2.67h5a.5.5 0 000-1h-5a.5.5 0 000 1zm0-2.33h5a.5.5 0 000-1h-5a.5.5 0 000 1zm0-2.67h5a.5.5 0 000-1h-5a.5.5 0 000 1z" fill="#EFBB0A"></path></g><defs><clipPath id="contract-shared-clip"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>
                  </div>
                  <div>
                    <span className="profile-stat__balance">0</span>
                    <span className="profile-stat__cases">Открыто кейсов</span>
                  </div>
                </div>
                <div className="profile-stat-block">
                  <div className="profile-stat-img">
                    <svg width="25px" height="25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 000 16A8 8 0 008 0zm0 14.45a6.46 6.46 0 11.01-12.92A6.46 6.46 0 018 14.45z" fill="#EFBB0A"></path><path d="M8 3.87L4.24 7.63h2.99v4.5h1.54v-4.5h3L8 3.87z" fill="#EFBB0A"></path></svg>
                  </div>
                  <div>
                    <span className="profile-stat__balance">0</span>
                    <span className="profile-stat__cases">Открыто кейсов</span>
                  </div>
                </div>
              </div>
            </div>
          <div className="profile-block-right">
            <div className="profile-skills">
              <div className="profile-skill-block">
                <span className="profile-block-title">Лучший скин</span>
                <div className="profile-skill-img">
                  <img src='https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/100fx74f/image.png' alt='drop'/>
                </div>
                <Link className="profile-skill-btn" to="/">К кейсам</Link>
              </div>
              <div className="profile-skill-block">
                <span className="profile-block-title">Лучший апгрейд</span>
                <div className="profile-skill-img">
                  <img src='https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/100fx74f/image.png' alt='drop'/>
                </div>
                <Link className="profile-skill-btn" to="/">К апгрейдам</Link>
              </div>
              <div className="profile-skill-block">
                <span className="profile-block-title">Лучший контракт</span>
                <div className="profile-skill-img">
                  <img src='https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/100fx74f/image.png' alt='drop'/>
                </div>
                <Link className="profile-skill-btn" to="/">К контрактам</Link>
              </div>
            </div>
          </div>
          </div>
          <ProfileDrop />
          <Statictic />

          {show &&
              <div className="pay-popup">
                <div className="popup-modal">
                    <div className="popup-modal__container">
                        <button className="popup-modal__btn" onClick={() => setShow(!show)}><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="23px" height="23px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg></button>
                        <div className="popup-modal__title">
                          <p>Пополнение баланса</p>
                        </div>
                        <div className="popup-wrapper">
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/cards.e2f19d4d.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/qiwi.78b0a233.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/youmoney.ed9a1d75.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/alfabank.22ba2811.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/ecopayz.5840fd41.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/tron.81a8c177.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/sberbank.c77a6642.svg" alt="card"/>
                        </div>
                        <div className="tab-card">
                            <img src="https://ggdrop.gg/static/media/bitcoin.4660a169.svg" alt="card"/>
                        </div>
                        </div>
                        <div className="popup-modal__sum">
                          <Text color="white" mb='20px' mt="15px">К оплате: {value} руб.</Text>
                          <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='Введите сумму пополнения'
                            size='sm'
                          />
                        </div>
                        <button className="popup-modal__pay">Пополнить счет</button>
                    </div>
                </div>
              </div>
            }
      </div>
    </div>
  )
}

export default ProfilePage
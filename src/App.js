import "./App.scss";
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import HeaderLive from "./components/Header/HeaderLive/HeaderLive";
import CasePage from "./components/Main/CasePage/CasePage";
import Footer from "./components/Footer/Footer";
import Policy from './components/Main/Policy/Policy';
import Agreement from "./components/Main/Agreement/Agreement";
import ProfilePage from "./components/Main/ProfilePage/ProfilePage";
import NotFound from './components/NotFound'
import BonusPage from './components/Main/BonusPage/BonusPage'
import Contracts from './components/Main/Contracts/Contracts'
import Upgrades from './components/Main/Upgrades/Upgrades'
import Battles from './components/Main/Battles/Battles'
import Dailybonus from './components/Main/Dailybonus/Dailybonus'
import Faq from './components/Main/Faq/Faq'
import BonusPrize from "./components/Main/BonusPrize/BonusPrize"
import HeaderTop from "./components/Header/HeaderTop/HeaderTop"
import Popup from './components/Popup/Popup';
import { useGetUserDataQuery } from './app/services/userApi';
import { setLogin, setLogout } from './app/userSlice';
import { useDispatch } from 'react-redux';
import { AuthRoute, LogoutRoute } from './AuthRoute';
import Alert from './components/Alert/Alert';


function App() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);

  const { data: userData, isSuccess: userSuccess } = useGetUserDataQuery();

  

  useEffect(() => {
    if (userSuccess && userData) {
      dispatch(setLogin());
    } else {
      dispatch(setLogout());
    }

    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 6000)
  }, [userSuccess, userData]);

  const ScrollTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <HeaderTop />
      <HeaderLive />
      <Header userData={userData} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/casePage/:id" element={<CasePage />} />

        <Route path="/profile" element={<AuthRoute />}>
          <Route index element={<ProfilePage />} />
        </Route>

        <Route path="/bonus" element={<BonusPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dailybonus" element={<Dailybonus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bonus-prize" element={<BonusPrize />} />
        <Route path="/logout" element={<LogoutRoute />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/upgrades" element={<Upgrades />} />
        <Route path="/battles" element={<Battles />} />
      </Routes>
      <Footer />
      <Popup />
      <Alert />
      <ScrollTop />
    </div>
  );
}

export default App;

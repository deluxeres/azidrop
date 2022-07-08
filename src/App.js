import "./App.scss";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import HeaderLive from "./components/Header/HeaderLive/HeaderLive";
import CasePage from "./components/Main/CasePage/CasePage";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./components/Main/ProfilePage/ProfilePage";
import NotFound from './components/NotFound'
import BonusPage from './components/Main/BonusPage/BonusPage'
import Dailybonus from './components/Main/Dailybonus/Dailybonus'
import Faq from './components/Main/Faq/Faq'
import BonusPrize from "./components/Main/BonusPrize/BonusPrize"
import HeaderTop from "./components/Header/HeaderTop/HeaderTop"
import Popup from './components/Popup/Popup';
import { useGetUserDataQuery } from './app/services/userApi';
import { setLogin } from './app/userSlice';
import { useDispatch } from 'react-redux';
import { AuthRoute, LogoutRoute } from './AuthRoute';


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { data: userData, isSuccess: userSuccess } = useGetUserDataQuery();

  if (userSuccess && userData) {
    dispatch(setLogin());
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <div className="App">
      <HeaderTop />
      <HeaderLive />
      <Header />
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
      </Routes>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;

import "./App.scss";
import React, {useState, useEffect} from 'react';
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


function App() {

  const [loading, setLoading] = useState(false)

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bonus" element={<BonusPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dailybonus" element={<Dailybonus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bonus-prize" element={<BonusPrize />} />
      </Routes>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;

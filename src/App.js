import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import HeaderLive from "./components/Header/HeaderLive/HeaderLive";
import CasePage from "./components/Main/CasePage/CasePage";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./components/Main/ProfilePage/ProfilePage";
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLive />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/casePage/:id" element={<CasePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

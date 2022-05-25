import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import HeaderLive from "./components/Header/HeaderLive/HeaderLive";

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderLive />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;

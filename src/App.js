import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import HeaderLive from "./components/Header/HeaderLive/HeaderLive";

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderLive />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

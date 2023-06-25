import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MyPage from "./components/MyPage/MyPage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <section className="app__wrapper-content">
          <Routes>
            <Route path="/mypage" Component={MyPage} />
            <Route path="/messages/*" Component={Messages} />
            <Route path="/news" Component={News} />
            <Route path="/music" Component={Music} />
            <Route path="/settings" Component={Settings} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

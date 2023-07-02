import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MyPage from "./components/MyPage/MyPage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <section className="app__wrapper-content">
          <Routes>
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

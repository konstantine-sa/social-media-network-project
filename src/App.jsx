import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MyPage from "./components/MyPage/MyPage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  // console.log(props);
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <section className="app__wrapper-content">
          <Routes>
            <Route
              path="/mypage/*"
              element={
                <MyPage
                  posts={props.state.myPage}
                  addPost={props.addPost}
                  newPostText={props.state.myPage.newPostText}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Messages
                  dialogsData={props.state.messagesPage}
                  messagesData={props.state.messagesPage}
                />
              }
            />
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

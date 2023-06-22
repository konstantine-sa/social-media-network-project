import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;

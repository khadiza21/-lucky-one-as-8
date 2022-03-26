import "./App.css";
import Answers from "./components/Answers/Answers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Answers></Answers>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import Body from "./Body/Body";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return <div className="App">
    <Navbar/>
    <Body/>
    <Features/>
    <Body/>
    <Footer/>
  </div>;
}

export default App;

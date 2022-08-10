import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

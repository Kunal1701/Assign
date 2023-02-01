import "./App.css";
import Home from "./Home";
import Details from "./Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;

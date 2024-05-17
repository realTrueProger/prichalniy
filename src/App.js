import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Initiatives from "./Initiatives";
import Oss from "./Oss";

function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <div className="logo">
                      <div>Инициативная группа</div>
                      <div>Level Причальный</div>
                  </div>
                  <nav>
                      <ul>
                          <li><Link to="/">Главная</Link></li>
                          <li><Link to="/initiatives">Инициативы</Link></li>
                          <li><Link to="/oss">ОСС</Link></li>
                      </ul>
                  </nav>
              </header>
              <main>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/initiatives" element={<Initiatives />} />
                      <Route path="/oss" element={<Oss />} />
                  </Routes>
              </main>
          </div>
      </Router>
  );
}

export default App;

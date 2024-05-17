import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./Home";
import Initiatives from "./Initiatives";
import Oss from "./Oss";
import {Grid} from "@mui/material";

const baseName = process.env.NODE_ENV === 'production' ? "/prichalniy/" : "/";

function App() {
    return (
        <Router basename={baseName}>
            <div className="App">
                <Grid container justifyContent="space-between" spacing={2} className="App-header">
                    <Grid item>
                        <div className="logo">
                            <div>Инициативная группа</div>
                            <div>Level Причальный</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <nav>
                            <ul>
                                <li><Link to="/">Главная</Link></li>
                                <li><Link to="/initiatives">Регламенты</Link></li>
                                <li><Link to="/oss">ОСС</Link></li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>

                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/initiatives" element={<Initiatives/>}/>
                        <Route path="/oss" element={<Oss/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Initiatives from "./Initiatives";
import Oss from "./Oss";
import {Box, Container, Grid} from "@mui/material";

const baseName = process.env.NODE_ENV === 'production' ? "/prichalniy/" : "/";

function App() {
    return (
        <Router basename={baseName}>
            <Container >
                <Grid container justifyContent="space-between" spacing={2} className="App-header">
                    <Grid item>
                        <Box className="logo">
                            <div>Инициативная группа</div>
                            <div>Level Причальный</div>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box>
                            <nav>
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>|</li>
                                    <li><Link to="/initiatives">Регламенты</Link></li>
                                    <li>|</li>
                                    <li><Link to="/oss">ОСС</Link></li>
                                </ul>
                            </nav>
                        </Box>
                    </Grid>
                </Grid>

                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/initiatives" element={<Initiatives/>}/>
                        <Route path="/oss" element={<Oss/>}/>
                    </Routes>
                </main>
            </Container>
        </Router>
    );
}

export default App;

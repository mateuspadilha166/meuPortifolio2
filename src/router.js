import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Contato from './pages/Contato';
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/Projetos" element={<Projetos />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Contato" element={<Contato />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp; 

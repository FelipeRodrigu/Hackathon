import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Noticia from './pages/noticiaPage.jsx';
import Sobre from './pages/sobre.jsx';
import Contato from './pages/contato.jsx';
import TodasNoticias from './components/TodasNoticias.jsx';

function AppRoutes() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/contato" element={<Contato />}></Route>
<Route path="/sobre" element={<Sobre />}></Route>
<Route path="/noticia/:src/:titulo/:conteudo/:autor/:categoria" element={<Noticia />}></Route>


<Route path="/teste" element={<TodasNoticias />}></Route>
</Routes>
</BrowserRouter>
);
}

export default AppRoutes;
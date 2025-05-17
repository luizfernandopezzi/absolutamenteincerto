import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import SobrePage from './app/sobre/page';
import ProjetoPage from './app/projeto/page';
import ConteudoPage from './app/conteudo/page';
import ConecteSePage from './app/conecte-se/page';
import Layout from './components/Layout'; // Assuming Layout handles Navbar and Footer
import './app/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/projeto" element={<ProjetoPage />} />
          <Route path="/conteudo" element={<ConteudoPage />} />
          <Route path="/conecte-se" element={<ConecteSePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


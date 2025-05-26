import { Link } from 'react-router-dom';
import { useState } from 'react';

/**
 * Componente de navegação principal do site
 * 
 * INSTRUÇÕES PARA EDIÇÃO:
 * 1. Para alterar o logo: Substitua o arquivo em public/images/logo_eye_only.png
 * 2. Para alterar o título do site: Modifique o texto "Absolutamente Incerto" abaixo
 * 3. Para editar os links do menu: Altere os textos dentro das tags <Link>
 * 4. Para adicionar novos links: Copie uma linha <Link> existente e modifique
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Logo do site - Para trocar, substitua o arquivo logo_eye_only.png */}
          <img src="/images/logo_eye_only.png" alt="Absolutamente Incerto Logo" width={50} height={50} className="mr-3" />
          {/* Título do site - Edite o texto abaixo para alterar */}
          <span className="font-bold text-xl hover:text-purple-400 transition-colors">Absolutamente Incerto</span>
        </Link>
        
        {/* Menu para desktop */}
        <div className="hidden md:flex space-x-4">
          {/* Links de navegação - Edite os textos para alterar os nomes exibidos */}
          <Link to="/" className="hover:text-purple-300 transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-purple-300 transition-colors">Sobre Mim</Link>
          <Link to="/projeto" className="hover:text-purple-300 transition-colors">O Projeto</Link>
          <Link to="/conteudo" className="hover:text-purple-300 transition-colors">Conteúdo</Link>
          <Link to="/conecte-se" className="hover:text-purple-300 transition-colors">Conecte-se</Link>
        </div>
        
        {/* Botão do menu hambúrguer para mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-3 py-2">
          <Link to="/" className="hover:text-purple-300 transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/sobre" className="hover:text-purple-300 transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Sobre Mim</Link>
          <Link to="/projeto" className="hover:text-purple-300 transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>O Projeto</Link>
          <Link to="/conteudo" className="hover:text-purple-300 transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Conteúdo</Link>
          <Link to="/conecte-se" className="hover:text-purple-300 transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Conecte-se</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

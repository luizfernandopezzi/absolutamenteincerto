import { Link } from 'react-router-dom';

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
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Logo do site - Para trocar, substitua o arquivo logo_eye_only.png */}
          <img src="/images/logo_eye_only.png" alt="Absolutamente Incerto Logo" width={50} height={50} className="mr-3" />
          {/* Título do site - Edite o texto abaixo para alterar */}
          <span className="font-bold text-xl hover:text-purple-400 transition-colors">Absolutamente Incerto</span>
        </Link>
        <div className="space-x-4">
          {/* Links de navegação - Edite os textos para alterar os nomes exibidos */}
          <Link to="/" className="hover:text-purple-300 transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-purple-300 transition-colors">Sobre Mim</Link>
          <Link to="/projeto" className="hover:text-purple-300 transition-colors">O Projeto</Link>
          <Link to="/conteudo" className="hover:text-purple-300 transition-colors">Conteúdo</Link>
          <Link to="/conecte-se" className="hover:text-purple-300 transition-colors">Conecte-se</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

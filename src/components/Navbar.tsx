import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Utilizando a tag <img> padrão do HTML para a logo */}
          <img src="/images/logo.png" alt="Absolutamente Incerto Logo" width={50} height={50} className="mr-3" />
          <span className="font-bold text-xl hover:text-purple-400 transition-colors">Absolutamente Incerto</span>
        </Link>
        <div className="space-x-4">
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


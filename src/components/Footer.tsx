const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center shadow-inner">
      <p>&copy; {new Date().getFullYear()} Absolutamente Incerto. Todos os direitos reservados.</p>
      <p className="text-sm mt-1">Explorando filosofia, ciência e a busca por clareza.</p>
    </footer>
  );
};

export default Footer;


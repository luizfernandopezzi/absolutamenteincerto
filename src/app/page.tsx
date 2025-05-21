/**
 * Página inicial do site
 * 
 * INSTRUÇÕES PARA EDIÇÃO:
 * 1. Para alterar o título principal: Modifique o texto dentro da tag h1
 * 2. Para alterar o subtítulo: Modifique o texto dentro da tag h2
 * 3. Para editar o texto de introdução: Altere o parágrafo dentro da tag p
 * 4. Para modificar os botões: Altere os textos dentro das tags a
 * 5. Para editar os pilares: Modifique os textos dentro das divs da seção "Nossos Pilares de Exploração"
 */

const HomePage = () => {
  return (
    <>
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-lg shadow-2xl">
        {/* Título principal - Edite o texto abaixo para alterar */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Bem-vindos ao Absolutamente Incerto!
        </h1>
        {/* Subtítulo - Edite o texto abaixo para alterar */}
        <h2 className="text-2xl md:text-3xl mb-10 text-gray-300">
          Um espaço para quem pensa, sofre, observa e busca clareza.
        </h2>
        {/* Texto de introdução - Edite o parágrafo abaixo para alterar */}
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 px-4">
          Em um mundo inundado por informações rápidas e respostas superficiais, o Absolutamente Incerto é um convite à pausa, à reflexão profunda e à descoberta. Aqui, exploramos as fascinantes conexões entre filosofia, a ciência que desvenda nosso universo e nosso corpo, e o comportamento humano em sua essência. Se você anseia por um entendimento mais claro e integrado da vida, junte-se a nós nesta jornada de aprendizado e questionamento.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6">
          {/* Botões de navegação - Edite os textos para alterar */}
          <a href="https://absolutamenteincerto.vercel.app/projeto" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
            Explore Nossos Pilares
          </a>
          <a href="https://absolutamenteincerto.vercel.app/sobre" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
            Conheça o Criador
          </a>
          <a href="https://www.instagram.com/absolutamenteincerto/" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg mt-4 md:mt-0">
            Acompanhe nas Redes
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-800 mt-12 rounded-lg shadow-xl">
        {/* Título da seção de pilares - Edite o texto abaixo para alterar */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Nossos Pilares de Exploração</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Pilar 1 - Edite os textos abaixo para alterar */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-pink-400">Filosofia para a Vida Real</h4>
            <p className="text-gray-400 text-sm">Desmistificando conceitos e aplicando a sabedoria filosófica no dia a dia.</p>
          </div>
          {/* Pilar 2 - Edite os textos abaixo para alterar */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-purple-400">A Ciência que nos Define e Rodeia</h4>
            <p className="text-gray-400 text-sm">Entendendo o universo e nosso corpo através das lentes da física, nutrição e neurociência.</p>
          </div>
          {/* Pilar 3 - Edite os textos abaixo para alterar */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-indigo-400">Comportamento Humano (Sem Filtros)</h4>
            <p className="text-gray-400 text-sm">Uma análise honesta das complexidades da mente e das interações humanas.</p>
          </div>
          {/* Pilar 4 - Edite os textos abaixo para alterar */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-teal-400">Tecendo Saberes: A Conexão é a Chave</h4>
            <p className="text-gray-400 text-sm">Explorando a interdisciplinaridade para uma visão mais rica e integrada da realidade.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

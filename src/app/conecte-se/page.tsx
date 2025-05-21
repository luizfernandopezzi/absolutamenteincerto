/**
 * Página de conexão e contato
 * 
 * INSTRUÇÕES PARA EDIÇÃO:
 * 1. Para alterar o título principal: Modifique o texto dentro da tag h1
 * 2. Para alterar o texto de introdução: Modifique o parágrafo dentro da tag p
 * 3. Para editar os links de redes sociais: Atualize os hrefs dos botões
 * 4. Para modificar o formulário: Edite os campos e textos conforme necessário
 */

import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ConecteSePage = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          {/* Título principal - Edite o texto abaixo para alterar */}
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Junte-se à Nossa Comunidade de Mentes Curiosas!
          </h1>
          {/* Texto de introdução - Edite o parágrafo abaixo para alterar */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            A jornada do conhecimento é ainda mais rica quando compartilhada. Siga o Absolutamente Incerto nas nossas redes sociais para não perder nenhum conteúdo, participar das discussões e fazer parte de uma comunidade que valoriza o pensamento crítico e a busca por clareza.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
            {/* Link do YouTube - Atualize o href para o link correto */}
            <a 
              href="https://www.youtube.com/@absolutamenteincerto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto"
            >
              <FaYoutube className="mr-3 text-2xl" /> YouTube
            </a>
            {/* Link do Instagram - Já atualizado com o link correto */}
            <a 
              href="https://www.instagram.com/absolutamenteincerto/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto"
            >
              <FaInstagram className="mr-3 text-2xl" /> Instagram
            </a>
          </div>

          {/* Formulário de Contato - Edite os campos conforme necessário */}
          <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">Envie sua Mensagem</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-400 mb-2 text-left">Nome</label>
                <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-purple-500 outline-none" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-400 mb-2 text-left">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-purple-500 outline-none" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-left">Mensagem</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaEnvelope className="mr-3" /> Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Texto de encerramento - Edite o parágrafo abaixo para alterar */}
          <p className="text-gray-400 mt-12 max-w-2xl mx-auto">
            Tem alguma sugestão de tema, dúvida ou apenas quer trocar uma ideia? Adoraríamos ouvir você! Use o formulário acima ou nos encontre nas redes. Sua participação é fundamental para construirmos juntos este espaço de exploração e aprendizado.
          </p>

        </div>
      </section>
    </>
  );
};

export default ConecteSePage;

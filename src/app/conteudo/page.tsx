import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const ConteudoPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Conteúdo | Absolutamente Incerto</title>
        <meta name="description" content="Conteúdos em breve do Absolutamente Incerto. Artigos, reflexões e materiais complementares sobre filosofia, ciência e comportamento." />
        <meta property="og:title" content="Conteúdo | Absolutamente Incerto" />
        <meta property="og:description" content="Conteúdos em breve do Absolutamente Incerto. Artigos, reflexões e materiais complementares sobre filosofia, ciência e comportamento." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Explore Mais a Fundo (Em Breve!)
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos preparando um espaço especial para compartilhar artigos, reflexões mais longas, resumos de vídeos e materiais complementares para você que deseja se aprofundar ainda mais nos temas que exploramos no Absolutamente Incerto.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Em breve, esta seção estará repleta de conteúdo para expandir sua jornada de conhecimento conosco. Fique de olho!
          </p>
          {/* Opcional: Campo de inscrição para ser notificado */}
          {/* 
          <div className="max-w-md mx-auto">
            <p className="text-gray-400 mb-4">Inscreva-se para ser notificado quando o blog for lançado:</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-grow p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
              >
                Quero Saber!
              </button>
            </form>
          </div>
          */}
        </div>
      </section>
    </Layout>
  );
};

export default ConteudoPage;


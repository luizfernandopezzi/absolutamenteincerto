import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Absolutamente Incerto | Filosofia, Ciência e Clareza em Conexão</title>
        <meta name="description" content="Absolutamente Incerto é um espaço para reflexão profunda que conecta filosofia, ciência e comportamento humano. Criado por Luiz Fernando Pezzi." />
        <meta property="og:title" content="Absolutamente Incerto | Filosofia, Ciência e Clareza em Conexão" />
        <meta property="og:description" content="Um espaço para quem pensa, sofre, observa e busca clareza. Explorando as conexões entre filosofia, ciência e comportamento humano." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/logo.png" />
      </Helmet>
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-lg shadow-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Bem-vindos ao Absolutamente Incerto!
        </h1>
        <h2 className="text-2xl md:text-3xl mb-10 text-gray-300">
          Um espaço para quem pensa, sofre, observa e busca clareza.
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 px-4">
          Em um mundo inundado por informações rápidas e respostas superficiais, o Absolutamente Incerto é um convite à pausa, à reflexão profunda e à descoberta. Aqui, exploramos as fascinantes conexões entre filosofia, a ciência que desvenda nosso universo e nosso corpo, e o comportamento humano em sua essência. Se você anseia por um entendimento mais claro e integrado da vida, junte-se a nós nesta jornada de aprendizado e questionamento.
        </p>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4 md:space-y-0 md:space-x-6"
        >
          <motion.a 
            variants={fadeIn}
            href="/projeto" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Explore Nossos Pilares
          </motion.a>
          <motion.a 
            variants={fadeIn}
            href="/sobre" 
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Conheça o Criador
          </motion.a>
          <motion.a 
            variants={fadeIn}
            href="/conecte-se" 
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg mt-4 md:mt-0"
          >
            Acompanhe nas Redes
          </motion.a>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="py-16 md:py-24 bg-gray-800 mt-12 rounded-lg shadow-xl"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Nossos Pilares de Exploração</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-pink-400">Filosofia para a Vida Real</h4>
            </div>
            <p className="text-gray-400 text-sm">Desmistificando conceitos e aplicando a sabedoria filosófica no dia a dia.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
              <h4 className="text-xl font-semibold text-purple-400">A Ciência que nos Define e Rodeia</h4>
            </div>
            <p className="text-gray-400 text-sm">Entendendo o universo e nosso corpo através das lentes da física, nutrição e neurociência.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-indigo-400">Comportamento Humano (Sem Filtros)</h4>
            </div>
            <p className="text-gray-400 text-sm">Uma análise honesta das complexidades da mente e das interações humanas.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
              </svg>
              <h4 className="text-xl font-semibold text-teal-400">Tecendo Saberes: A Conexão é a Chave</h4>
            </div>
            <p className="text-gray-400 text-sm">Explorando a interdisciplinaridade para uma visão mais rica e integrada da realidade.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="py-12 md:py-16 bg-gray-800 mt-12 rounded-lg shadow-xl"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Novidades Recentes</h3>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-xl font-semibold mb-2 text-pink-400">Lançamento do Site</h4>
            <p className="text-gray-400">Bem-vindos ao novo site do Absolutamente Incerto! Aqui você encontrará conteúdo sobre filosofia, ciência e comportamento humano, tudo conectado de forma clara e acessível.</p>
          </div>
          <div className="text-center mt-8">
            <a href="/conteudo" className="inline-block bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg text-sm transition-transform transform hover:scale-105 shadow-lg">
              Ver Mais Novidades
            </a>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default HomePage;


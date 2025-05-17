import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ProjetoPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Projeto | Absolutamente Incerto</title>
        <meta name="description" content="Conheça os pilares do projeto Absolutamente Incerto: filosofia, ciência, corpo e comportamento humano em conexão." />
        <meta property="og:title" content="Projeto | Absolutamente Incerto" />
        <meta property="og:description" content="Conheça os pilares do projeto Absolutamente Incerto: filosofia, ciência, corpo e comportamento humano em conexão." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Absolutamente Incerto: Filosofia, Ciência e Clareza em Conexão
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            O Absolutamente Incerto é mais do que um canal ou um perfil: é uma comunidade para mentes curiosas que buscam profundidade sem perder a clareza. Nossa proposta é tecer saberes, explorando quatro pilares fundamentais que se interconectam para oferecer uma visão mais rica e integrada do mundo e de nós mesmos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pilar 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-pink-500/40 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
                <h2 className="text-2xl font-semibold text-pink-400">Jornada Filosófica – Do Cotidiano às Grandes Questões</h2>
              </div>
              <p className="text-gray-400">
                Embarque conosco em uma introdução acessível ao universo da filosofia. Inspirados por obras como 'O Mundo de Sofia', vamos desmistificar conceitos, conhecer grandes pensadores e refletir sobre as questões existenciais que nos movem. Da ética à metafísica, uma exploração para iniciantes e para quem deseja reacender a chama do questionamento.
              </p>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                </svg>
                <h2 className="text-2xl font-semibold text-purple-400">Desvendando o Cosmos e a Matéria – Física e Engenharia para Mentes Curiosas</h2>
              </div>
              <p className="text-gray-400">
                Com a bagagem da engenharia e a paixão pela física de nomes como Carlo Rovelli e Stephen Hawking, vamos traduzir os segredos do universo. Da gravidade quântica à natureza do tempo, exploraremos as leis que regem o cosmos e a matéria, mostrando como a ciência e a engenharia moldam nossa compreensão da realidade.
              </p>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
                <h2 className="text-2xl font-semibold text-indigo-400">A Incrível Máquina Humana – Nutrição, Fisiologia e Neurociência sem Mistérios</h2>
              </div>
              <p className="text-gray-400">
                Nosso corpo é um universo à parte. Aqui, mergulharemos na nutrição baseada em evidências, na fisiologia que nos permite viver, na bioquímica que orquestra nossa saúde e nos fascinantes caminhos da neurociência. Tudo apresentado de forma clara, sem dogmas, para que você possa fazer escolhas mais conscientes para seu bem-estar físico e mental.
              </p>
            </motion.div>

            {/* Pilar 4 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
                </svg>
                <h2 className="text-2xl font-semibold text-teal-400">Tecendo Saberes – A Interdisciplinaridade em Busca de Clareza</h2>
              </div>
              <p className="text-gray-400">
                Acreditamos que o conhecimento mais rico surge da conexão entre diferentes áreas. Neste pilar, vamos explicitamente cruzar fronteiras: como a filosofia dialoga com a física quântica? De que forma a neurociência ilumina questões éticas? Prepare-se para explorar temas transversais e descobrir como a união de saberes pode expandir sua visão de mundo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetoPage;


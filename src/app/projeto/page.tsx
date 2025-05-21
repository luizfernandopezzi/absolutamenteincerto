/**
 * Página do projeto
 * 
 * INSTRUÇÕES PARA EDIÇÃO:
 * 1. Para alterar o título principal: Modifique o texto dentro da tag h1
 * 2. Para alterar o texto de introdução: Modifique o parágrafo dentro da tag p
 * 3. Para editar os pilares: Modifique os textos dentro das divs da seção de pilares
 */

const ProjetoPage = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          {/* Título principal - Edite o texto abaixo para alterar */}
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Absolutamente Incerto: Filosofia, Ciência e Clareza em Conexão
          </h1>
          {/* Texto de introdução - Edite o parágrafo abaixo para alterar */}
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            O Absolutamente Incerto é mais do que um canal ou um perfil: é uma comunidade para mentes curiosas que buscam profundidade sem perder a clareza. Nossa proposta é tecer saberes, explorando quatro pilares fundamentais que se interconectam para oferecer uma visão mais rica e integrada do mundo e de nós mesmos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pilar 1 - Edite os textos abaixo para alterar */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-pink-500/40 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-pink-400">📚</span> 
                <h2 className="text-2xl font-semibold text-pink-400">Jornada Filosófica – Do Cotidiano às Grandes Questões</h2>
              </div>
              <p className="text-gray-400">
                Embarque conosco em uma introdução acessível ao universo da filosofia. Inspirados por obras como 'O Mundo de Sofia', vamos desmistificar conceitos, conhecer grandes pensadores e refletir sobre as questões existenciais que nos movem. Da ética à metafísica, uma exploração para iniciantes e para quem deseja reacender a chama do questionamento.
              </p>
            </div>

            {/* Pilar 2 - Edite os textos abaixo para alterar */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-purple-400">🌌</span>
                <h2 className="text-2xl font-semibold text-purple-400">Desvendando o Cosmos e a Matéria – Física e Engenharia para Mentes Curiosas</h2>
              </div>
              <p className="text-gray-400">
                Com a bagagem da engenharia e a paixão pela física de nomes como Carlo Rovelli e Stephen Hawking, vamos traduzir os segredos do universo. Da gravidade quântica à natureza do tempo, exploraremos as leis que regem o cosmos e a matéria, mostrando como a ciência e a engenharia moldam nossa compreensão da realidade.
              </p>
            </div>

            {/* Pilar 3 - Edite os textos abaixo para alterar */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-indigo-400">🧠</span>
                <h2 className="text-2xl font-semibold text-indigo-400">A Incrível Máquina Humana – Nutrição, Fisiologia e Neurociência sem Mistérios</h2>
              </div>
              <p className="text-gray-400">
                Nosso corpo é um universo à parte. Aqui, mergulharemos na nutrição baseada em evidências, na fisiologia que nos permite viver, na bioquímica que orquestra nossa saúde e nos fascinantes caminhos da neurociência. Tudo apresentado de forma clara, sem dogmas, para que você possa fazer escolhas mais conscientes para seu bem-estar físico e mental.
              </p>
            </div>

            {/* Pilar 4 - Edite os textos abaixo para alterar */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-teal-400">🔗</span>
                <h2 className="text-2xl font-semibold text-teal-400">Tecendo Saberes – A Interdisciplinaridade em Busca de Clareza</h2>
              </div>
              <p className="text-gray-400">
                Acreditamos que o conhecimento mais rico surge da conexão entre diferentes áreas. Neste pilar, vamos explicitamente cruzar fronteiras: como a filosofia dialoga com a física quântica? De que forma a neurociência ilumina questões éticas? Prepare-se para explorar temas transversais e descobrir como a união de saberes pode expandir sua visão de mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjetoPage;

const SobrePage = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Desvendando Mundos: Quem Está Por Trás Dessa Jornada?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            {/* Utilizando a tag <img> padrão do HTML para a imagem do criador */}
            <img src="/images/logo.png" alt="Foto do Criador" width={250} height={250} className="rounded-full shadow-2xl border-4 border-purple-500" />
          </div>
          <div className="md:col-span-2 text-gray-300 text-lg">
            <p className="mb-6">
              Olá! Sou o [Nome do Criador], e minha história é uma busca constante por entendimento, uma ponte entre mundos aparentemente distintos.
            </p>
            <p className="mb-6">
              Minha formação principal é em Engenharia Mecânica, uma área que me ensinou o rigor do pensamento lógico, a beleza das leis físicas que governam nosso universo e a satisfação de resolver problemas complexos. Atualmente, continuo essa exploração no meu mestrado, com foco em fenômenos de transporte – um mergulho fascinante em como a energia e a matéria se movem e se transformam.
            </p>
            <p className="mb-6">
              Mas a mente humana é inquieta, não é mesmo? Paralelamente à precisão da engenharia, uma paixão pela filosofia começou a florescer. Iniciando com obras como 'O Mundo de Sofia' de Jostein Gaarder, descobri um universo de questionamentos que nos convidam a refletir sobre quem somos, nosso propósito e o sentido da existência. Essa jornada filosófica está apenas começando, e quero compartilhá-la com vocês.
            </p>
            <p className="mb-6">
              E como se não bastasse, também sou um estudante dedicado de Nutrição. A incrível complexidade do corpo humano, a bioquímica que nos sustenta, a fisiologia que nos permite interagir com o mundo e os mistérios da neurociência me encantam profundamente. Acredito que entender nosso corpo é fundamental para uma vida plena e consciente.
            </p>
            <p className="mb-6">
              O Absolutamente Incerto nasce da confluência dessas paixões. Não me apresento como um especialista absoluto, mas como um eterno aprendiz, um entusiasta que deseja traduzir temas complexos de forma clara e acessível, conectando a sabedoria da filosofia com as descobertas da ciência. Minha missão é criar um espaço onde a curiosidade é celebrada, as perguntas são bem-vindas e o aprendizado é uma aventura compartilhada.
            </p>
            <p>
              Vamos juntos explorar as grandes questões e as pequenas maravilhas que nos cercam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobrePage;


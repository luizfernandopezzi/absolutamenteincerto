import Layout from '@/components/Layout';
import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ConecteSePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro quando o usuário começa a digitar
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Simulação de envio de email
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Mensagem enviada com sucesso! Obrigado pelo contato.'
    });
    
    // Em um ambiente real, aqui seria feita a chamada para API de envio de email
    console.log('Enviando email para: luizfpezzi@gmail.com');
    console.log('Dados do formulário:', formData);
    
    // Limpar formulário após envio bem-sucedido
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <Helmet>
        <title>Conecte-se | Absolutamente Incerto</title>
        <meta name="description" content="Conecte-se com o Absolutamente Incerto. Siga nas redes sociais e entre em contato com Luiz Fernando Pezzi." />
        <meta property="og:title" content="Conecte-se | Absolutamente Incerto" />
        <meta property="og:description" content="Conecte-se com o Absolutamente Incerto. Siga nas redes sociais e entre em contato com Luiz Fernando Pezzi." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="py-12 md:py-20 bg-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Junte-se à Nossa Comunidade de Mentes Curiosas!
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            A jornada do conhecimento é ainda mais rica quando compartilhada. Siga o Absolutamente Incerto nas nossas redes sociais para não perder nenhum conteúdo, participar das discussões e fazer parte de uma comunidade que valoriza o pensamento crítico e a busca por clareza.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
            <button 
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto opacity-75 cursor-not-allowed"
              disabled
              title="Canal do YouTube em breve"
            >
              <FaYoutube className="mr-3 text-2xl" /> YouTube (Em breve)
            </button>
            <button 
              className="flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto opacity-75 cursor-not-allowed"
              disabled
              title="Perfil do Instagram em breve"
            >
              <FaInstagram className="mr-3 text-2xl" /> Instagram (Em breve)
            </button>
          </div>

          {/* Formulário de Contato */}
          <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">Envie sua Mensagem</h2>
            
            {formStatus.submitted ? (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
                {formStatus.message}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-400 mb-2 text-left">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-600 text-white border ${formErrors.name ? 'border-red-500' : 'border-gray-500'} focus:ring-2 focus:ring-purple-500 outline-none`} 
                />
                {formErrors.name && <p className="text-red-400 text-sm mt-1 text-left">{formErrors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-400 mb-2 text-left">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-600 text-white border ${formErrors.email ? 'border-red-500' : 'border-gray-500'} focus:ring-2 focus:ring-purple-500 outline-none`} 
                />
                {formErrors.email && <p className="text-red-400 text-sm mt-1 text-left">{formErrors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-left">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-600 text-white border ${formErrors.message ? 'border-red-500' : 'border-gray-500'} focus:ring-2 focus:ring-purple-500 outline-none`}
                ></textarea>
                {formErrors.message && <p className="text-red-400 text-sm mt-1 text-left">{formErrors.message}</p>}
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaEnvelope className="mr-3" /> Enviar Mensagem
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Seu email será enviado para: luizfpezzi@gmail.com
              </p>
            </form>
          </div>

          <p className="text-gray-400 mt-12 max-w-2xl mx-auto">
            Tem alguma sugestão de tema, dúvida ou apenas quer trocar uma ideia? Adoraríamos ouvir você! Use o formulário acima ou nos encontre nas redes. Sua participação é fundamental para construirmos juntos este espaço de exploração e aprendizado.
          </p>

        </div>
      </section>
    </Layout>
  );
};

export default ConecteSePage;


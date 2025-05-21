import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

/**
 * Componente de layout principal do site
 * 
 * INSTRUÇÕES PARA EDIÇÃO:
 * 1. Este componente controla a estrutura geral do site
 * 2. Não é necessário importar este componente nas páginas individuais
 * 3. O layout já é aplicado automaticamente a todas as páginas através do App.tsx
 */
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

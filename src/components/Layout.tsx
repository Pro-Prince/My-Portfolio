import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { useVisitLogger } from '../hooks/useVisitLogger';

export default function Layout() {
  useVisitLogger();
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden overflow-y-auto">
      {/* Background Decoration */}
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed top-[10%] right-[0%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col flex-grow w-full">
        <Navigation />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

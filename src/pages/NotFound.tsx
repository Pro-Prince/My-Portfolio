import { Link } from 'react-router-dom';
import { useDynamicTitle } from '../hooks/useDynamicTitle';

export default function NotFound() {
  useDynamicTitle('404 - Prince Patel');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#6366F1] blur-[140px] opacity-[0.04] pointer-events-none z-0"></div>
      <div className="absolute top-[200px] right-[-80px] w-[300px] h-[300px] rounded-full bg-[#22D3EE] blur-[140px] opacity-[0.04] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-100px] left-[40%] w-[350px] h-[350px] rounded-full bg-[#6366F1] blur-[140px] opacity-[0.04] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-9xl font-extrabold text-[#1A1A1A]">404</div>
        <div className="text-2xl font-bold text-white mt-4 mb-2">Page not found.</div>
        <div className="text-[#A3A3A3] mb-8">Looks like you found a dead end.</div>
        <Link to="/" className="bg-[#6366F1] text-white rounded-lg px-5 py-2.5 hover:bg-[#4F46E5] transition-colors font-medium">
          Go Back Home
        </Link>
        <p className="text-sm text-[#525252] mt-6">
          Or explore:&nbsp;
          <Link to="/projects" className="text-[#6366F1] hover:underline mr-3">
            Projects
          </Link>
          <Link to="/about" className="text-[#6366F1] hover:underline mr-3">
            About
          </Link>
          <Link to="/contact" className="text-[#6366F1] hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </main>
  );
}

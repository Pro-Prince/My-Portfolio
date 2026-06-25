import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-9xl font-extrabold text-[#1A1A1A]">404</div>
      <div className="text-2xl font-bold text-white mt-4 mb-2">Page not found.</div>
      <div className="text-[#A3A3A3] mb-8">Looks like you found a dead end.</div>
      <Link to="/" className="bg-[#6366F1] text-white rounded-lg px-5 py-2.5 hover:bg-[#4F46E5] transition-colors font-medium">
        Go Back Home
      </Link>
    </main>
  );
}

// components/Header.jsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">KP</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">KANDA PALU</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Accueil
            </Link>
            <Link href="#topics" className="text-gray-700 hover:text-blue-600 transition">
              Sujets
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
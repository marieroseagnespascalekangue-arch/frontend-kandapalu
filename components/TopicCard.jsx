// components/TopicCard.jsx

import Link from 'next/link';

export default function TopicCard({ icon, title, description, link }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <Link 
        href={link}
        className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700 transition group"
      >
        En savoir plus
        <svg 
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
// components/FAQ.jsx

'use client';

import { useState } from 'react';
import { faqs } from '../data/topics';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-start text-left hover:bg-gray-50 px-6 transition"
      >
        <span className="font-semibold text-gray-900 pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-gray-600">
            Trouvez des réponses aux questions les plus courantes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
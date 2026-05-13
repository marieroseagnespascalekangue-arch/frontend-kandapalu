// components/TopicsSection.jsx

import TopicCard from './TopicCard';
import { topics } from '../data/topics';

export default function TopicsSection() {
  return (
    <section id="topics" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sujets de A à Z
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre bibliothèque complète d'informations sur la santé publique
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              link={topic.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
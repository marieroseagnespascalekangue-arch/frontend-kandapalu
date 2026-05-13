// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Besoin d'aide supplémentaire ?
          </h3>
          <p className="text-gray-400 mb-6">
            Notre équipe est là pour répondre à vos questions
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
            Contactez le Support KANDA PALU
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Notre mission</a></li>
              <li><a href="#" className="hover:text-white transition">L'équipe</a></li>
              <li><a href="#" className="hover:text-white transition">Partenaires</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Bibliothèque</a></li>
              <li><a href="#" className="hover:text-white transition">Articles</a></li>
              <li><a href="#" className="hover:text-white transition">Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Feedback</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">📸</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-400">
          <p>&copy; 2024 KANDA PALU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
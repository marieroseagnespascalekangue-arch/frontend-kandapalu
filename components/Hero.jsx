// components/Hero.jsx

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <div className="text-sm text-blue-600 font-semibold mb-4 uppercase tracking-wide">
              Ressources et Connaissances
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bibliothèque d'informations Santé
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Accédez à des informations utiles et fiables sur divers sujets de santé publique. 
              Nous vous aidons à comprendre et à prévenir les maladies courantes, à améliorer 
              votre bien-être et à protéger la santé du public.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              Explorer les ressources
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
                alt="Professionnel de santé"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
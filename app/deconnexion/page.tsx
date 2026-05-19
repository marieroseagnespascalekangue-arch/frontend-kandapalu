"use client";

import { useRouter } from "next/navigation";
import { LogOut, User, Lock } from "lucide-react";
import { useState } from "react";

export default function DeconnexionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeconnexion = async (): Promise<void> => {
    try {
      setIsLoading(true);
      // TODO: Appel API pour déconnecter l'utilisateur
      console.log("Déconnexion en cours...");
      // await fetch("/api/logout", { method: "POST" });
      // router.push("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (): void => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-blue-900">
            KANDA PALU
          </div>
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
            <User className="text-white" size={24} strokeWidth={1.5} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Blue Header Section */}
            <div className="bg-linear-to-br from-blue-900 to-blue-800 h-28 md:h-32 flex items-center justify-center relative">
              <div className="bg-blue-800 rounded-lg p-3 md:p-4 shadow-md">
                <LogOut className="text-blue-200" size={32} strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-8 py-8 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Êtes-vous sûr de vouloir vous déconnecter ?
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                Vous devrez vous ré-authentifier pour accéder au tableau de bord
                de surveillance épidémiologique et aux ensembles de données cliniques.
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                {/* Deconnexion Button */}
                <button
                  type="button"
                  onClick={handleDeconnexion}
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <LogOut size={20} strokeWidth={1.5} />
                  {isLoading ? "Déconnexion..." : "Se déconnecter"}
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Annuler et revenir
                </button>
              </div>

              {/* Security Note */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <Lock className="text-gray-700 shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      SESSION SÉCURISÉE
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Pour des raisons de sécurité, vos données de session seront
                      cryptées et effacées de la mémoire de ce navigateur lors de la
                      déconnexion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

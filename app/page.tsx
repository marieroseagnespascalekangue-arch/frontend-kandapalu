import { Activity, CheckCircle2, FileText, Globe, MapPin, ShieldCheck, Thermometer } from "lucide-react";

const userName = "Citoyen"; // À remplacer par le nom du citoyen connecté
const trendingTags = [
  '#SaisonGrippe2024',
  '#AlimentationSaine',
  '#SensibilisationSantéMentale',
  '#VaccinVoyage',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-6">
        <header className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                KANDA PALU
              </span>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Bonjour {userName}
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Voici les dernières informations de santé publique pour votre territoire.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-500 shadow-inner">
                <Globe className="h-8 w-8" />
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  Région locale
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="space-y-6 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Statut local
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Santé communautaire : Sûre</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-3xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <CheckCircle2 className="h-5 w-5" />
                Pas d’alerte active
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Les taux de transmission de la grippe saisonnière et d'autres maladies transmissibles restent faibles dans votre région. Aucune urgence de santé publique active n'est signalée aujourd'hui.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-slate-500" />
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Qualité de l’air</p>
                </div>
                <p className="mt-3 text-lg font-semibold text-slate-900">Bonne | 14/20</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-slate-500" />
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Taux de pollen</p>
                </div>
                <p className="mt-3 text-lg font-semibold text-slate-900">Modéré | Aucune alerte</p>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-100 text-blue-700">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Signaler des symptômes</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Aidez-nous à suivre les tendances de santé locale en signalant en quelques secondes vos symptômes.
                  </p>
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto">
                COMMENCER
              </button>
            </article>

            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Trouver une clinique</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Localisez les sites de vaccination, les centres de dépistage ou les médecins généralistes à proximité.
                  </p>
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto">
                RECHERCHER SUR LA CARTE
              </button>
            </article>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Statut local</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Guide allergies printemps</h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-700">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Comment gérer les symptômes pendant la saison de pollen.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">DERNIÈRE INFO</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Rapport qualité de l’eau</h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-700">
                <FileText className="h-7 w-7" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Le rapport annuel de la qualité de l’eau municipale est maintenant disponible.
            </p>
          </article>
        </section>

        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Sujets Tendances</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">Suivez les thèmes les plus consultés</h4>
            </div>
            <div className="hidden items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600 sm:flex">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              Mises à jour en direct
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {trendingTags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}




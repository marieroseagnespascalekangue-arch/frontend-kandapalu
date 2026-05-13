// app/page.js

import Header from '../components/Header';
import Hero from '../components/Hero';
import TopicsSection from '../components/TopicsSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TopicsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
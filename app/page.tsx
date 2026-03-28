import Image from "next/image";
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import CatalogoCTA from '@/components/home/CatalogCTA';
import CustomFigure from '@/components/home/CustomFigure';
import Process from '@/components/home/Process';

export default function Home() {
  return (
    <main className="bg-[#0b0c10] min-h-screen">
      <Hero/>
      <Categories/>
      <section className="bg-[#0a0f1e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border border-amber-400/30 rounded-2xl p-4 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300">
          <CustomFigure />
            <hr className="border-gray-800/50" />
          <Process />
        </div>
      </div>
      </section>
      <CatalogoCTA/>
    </main>
  );
}


import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LiveStats } from "./components/LiveStats";
import { InteractiveRoadmap } from "./components/InteractiveRoadmap";
import { Team } from "./components/Team";
import { CommunityTestimonials } from "./components/CommunityTestimonials";
import { HowToBuy } from "./components/HowToBuy";
import { Footer } from "./components/Footer";
import { MarketDataProvider } from "./components/MarketDataContext";
import { Whitepaper } from "./components/Whitepaper";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { CommunityUpdates } from "./components/CommunityUpdates";

export default function App() {
  return (
    <MarketDataProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <section id="impact">
            <ImpactMetrics />
          </section>
          <section id="updates">
            <CommunityUpdates />
          </section>
          <section id="stats">
            <LiveStats />
          </section>
          <section id="whitepaper">
            <Whitepaper />
          </section>
          <section id="roadmap">
            <InteractiveRoadmap />
          </section>
          <Team />
          <section id="community">
            <CommunityTestimonials />
          </section>
          <section id="buy">
            <HowToBuy />
          </section>
        </main>
        <Footer />
      </div>
    </MarketDataProvider>
  );
}
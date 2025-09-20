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

export default function App() {
  return (
    <MarketDataProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <section id="stats">
            <LiveStats />
          </section>
          <section id="roadmap">
            <InteractiveRoadmap />
          </section>
          <Team />
          <section id="community">
            <CommunityTestimonials />
          </section>
          <HowToBuy />
        </main>
        <Footer />
      </div>
    </MarketDataProvider>
  );
}
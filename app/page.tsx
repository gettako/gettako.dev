import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TechBar } from "@/components/tech-bar";
import { ArchitectureVisualizer } from "@/components/architecture-visualizer";
import { ComparisonTable } from "@/components/comparison-table";
import { CostCalculator } from "@/components/cost-calculator";
import { NonGoals } from "@/components/non-goals";
import { FeaturesGrid } from "@/components/features-grid";
import { QuickstartSteps } from "@/components/quickstart-steps";
import { TechnicalFAQ } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-150">
      <Header />
      <Hero />
      <TechBar />
      <ArchitectureVisualizer />
      <ComparisonTable />
      <CostCalculator />
      <NonGoals />
      <FeaturesGrid />
      <QuickstartSteps />
      <TechnicalFAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}

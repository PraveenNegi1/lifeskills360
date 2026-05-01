import Hero from "@/components/Hero";
import OutcomesSection from "@/components/OutcomesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

export default function Home() {
  return (
   <div>
    <Hero />
    <ProblemSection />
    <SolutionSection />
    <OutcomesSection />
   </div>
  );
}

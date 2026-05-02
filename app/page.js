import DemoCTASection from "@/components/DemoCTASection";
import ForSchoolsSection from "@/components/ForSchoolsSection";
import Hero from "@/components/Hero";
import MoneyMagicBox from "@/components/MoneyMagicBox";
import OutcomesSection from "@/components/OutcomesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustStatsSection from "@/components/TrustStatsSection";

export default function Home() {
  return (
   <div>
    <Hero />
    <ProblemSection />
    <SolutionSection />
    <OutcomesSection />
    <MoneyMagicBox />
    <ForSchoolsSection />
    <TrustStatsSection />
    <DemoCTASection />
   </div>
  );
}

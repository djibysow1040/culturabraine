import { BentoWho } from "@/components/home/BentoWho";
import { FundIndicator } from "@/components/home/FundIndicator";
import { Hero } from "@/components/home/Hero";
import { HomeCta } from "@/components/home/HomeCta";
import { ProjectFocus } from "@/components/home/ProjectFocus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoWho />
      <ProjectFocus />
      <FundIndicator />
      <HomeCta />
    </>
  );
}

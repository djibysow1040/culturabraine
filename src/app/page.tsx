import { FundIndicator } from "@/components/home/FundIndicator";
import { Hero } from "@/components/home/Hero";
import { HomeCta } from "@/components/home/HomeCta";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectSpotlight />
      <FundIndicator />
      <HomeCta />
    </>
  );
}

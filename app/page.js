import Navbar from "@/components/Navbar";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-8">
        <Bio />
        <Portfolio />
        <Experience />
        <Pricing />
        <FAQ />
        <Socials />
      </main>
    </>
  );
}

import TopBar from "@/components/TopBar"
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <TopBar />
      <div className="">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}

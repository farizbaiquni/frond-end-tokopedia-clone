import Navbar from "@/components/navbars/Navbar";
import CarouselLandingPage from "./landing_page/CarouselLandingPage";

export default function Home() {
  return (
    <div className="h-[1000px] text-gray-700">
      <Navbar />
      <main className="mx-40 mt-[134px]">
        <CarouselLandingPage />
      </main>
    </div>
  );
}

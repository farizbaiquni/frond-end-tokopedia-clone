import Navbar from "@/components/navbars/Navbar";
import Homepage from "./_components/Homepage";
import FeaturedCategories from "./_components/categories-top-up-bills/FeaturedCategories";
import TopUpBills from "./_components/categories-top-up-bills/TopUpBills";

export default function Home() {
  return (
    <div className="h-[1000px] text-gray-700">
      <Navbar />
      <main className="mx-40 mt-[160px]">
        <Homepage />
        <div className="mt-10 flex w-full text-black">
          <FeaturedCategories />
          <TopUpBills />
        </div>
      </main>
    </div>
  );
}

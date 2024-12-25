import BottomNavbar from "@/components/navbars/BottomNavbar";
import TopNavbar from "../components/navbars/TopNavbar";

export default function Home() {
  return (
    <div className="text-gray-700">
      <div className="bg-whiteflex flex-col px-10">
        <TopNavbar />
        <BottomNavbar />
      </div>
    </div>
  );
}

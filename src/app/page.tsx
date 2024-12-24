import MidNavbar from "@/components/navbars/MidNavbar";
import TopNavbar from "../components/navbars/TopNavbar";

export default function Home() {
  return (
    <div className="text-gray-700">
      <div className="flex flex-col px-8">
        <TopNavbar />
        <MidNavbar />
      </div>
    </div>
  );
}

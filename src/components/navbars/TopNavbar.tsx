import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between pb-2 pt-1 text-[14px] font-[500] tracking-tighter text-gray-500">
        <div className="flex items-center space-x-1">
          <Image
            src="/icons/phone-icon.png"
            alt="app-phone"
            width={20}
            height={10}
          />
          <p className="cursor-pointer hover:text-green-500">
            Download Tokopedia App
          </p>
        </div>
        <div className="flex space-x-8">
          <p className="cursor-pointer hover:text-green-500">About Tokopedia</p>
          <p className="cursor-pointer hover:text-green-500">Mitra Tokopedia</p>
          <p className="cursor-pointer hover:text-green-500">
            Pusat Edukasi Seller
          </p>
          <p className="cursor-pointer hover:text-green-500">Promo</p>
          <p className="cursor-pointer hover:text-green-500">Tokopedia Care</p>
        </div>
      </div>
    </div>
  );
}

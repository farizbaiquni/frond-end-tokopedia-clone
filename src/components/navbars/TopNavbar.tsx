import Image from "next/image";

export default function TopNavbar() {
  return (
    <nav className="flex w-full flex-col">
      <div className="flex justify-between py-1 text-sm font-semibold text-gray-500">
        <div className="flex items-center space-x-1">
          <Image
            src="/icons/phone-icon.png"
            alt="app-phone"
            width={20}
            height={20}
          />
          <p>Download Tokopedia App</p>
        </div>
        <div className="flex space-x-4">
          <p>About Tokopedia</p>
          <p>Mitra Tokopedia</p>
          <p>Pusat Edukasi Seller</p>
          <p>Promo</p>
          <p>Tokopedia Care</p>
        </div>
      </div>
    </nav>
  );
}

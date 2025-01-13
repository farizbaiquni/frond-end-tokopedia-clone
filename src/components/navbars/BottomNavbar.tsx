import Image from "next/image";

function BottomNavbar() {
  return (
    <div className="flex items-center bg-white pb-10 pt-2">
      {/* Tokopedia Logo */}
      <Image
        className="cursor-pointer"
        src="/icons/tokopedia-logo.png"
        alt="Tokopedia"
        width={155}
        height={155}
      />

      <p className="mx-6 cursor-pointer font-semibold">Category</p>

      <div className="relative flex flex-1 items-center">
        {/* Search Bar */}
        <div className="flex flex-1 rounded-md border border-gray-300 p-2">
          <Image
            className="object-contain"
            src="/icons/search.png"
            alt="Tokopedia"
            width={20}
            height={20}
          />
          <input
            className="ml-2 w-full outline-none"
            type="text"
            placeholder="Search in Tokopedia"
          />
        </div>

        {/* Buttons Group */}
        <div className="mx-16 flex space-x-5">
          <Image
            className="cursor-pointer object-contain"
            src="/icons/cart-shopping.png"
            alt="Tokopedia"
            width={23}
            height={23}
          />
          <Image
            className="cursor-pointer object-contain"
            src="/icons/notification.png"
            alt="Tokopedia"
            width={23}
            height={23}
          />
          <Image
            className="cursor-pointer object-contain"
            src="/icons/message.png"
            alt="Tokopedia"
            width={23}
            height={23}
          />
        </div>

        {/* Store */}
        <div className="mr-10 flex cursor-pointer space-x-2">
          <Image
            className="object-contain"
            src="/icons/store.png"
            alt="Store"
            width={25}
            height={25}
          />
          <p>Store</p>
        </div>

        {/* User Profile */}
        <div className="ml-5 flex cursor-pointer space-x-2">
          <Image
            className="object-contain"
            src="/icons/user-navbar.png"
            alt="Store"
            width={29}
            height={29}
          />
          <p className="truncate">User</p>
        </div>

        {/* ===== BOTTOM PART OF NAVBAR ===== */}
        <div className="absolute top-full flex w-full justify-between space-x-2 bg-white pt-2 text-sm text-gray-700">
          <div className="flex space-x-3">
            <p>Samsung s24</p>
            <p>Nintendo Switch</p>
            <p>TWS</p>
            <p>Celana Panjang</p>
          </div>
          <div className="flex space-x-1">
            <Image
              className="object-contain"
              src="/icons/mini-location.png"
              alt="Store"
              width={15}
              height={15}
            />
            <p>Send to</p>
            <p>
              <b>Jakarta</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;

import Image from "next/image";

function MidNavbar() {
  return (
    <div className="flex items-center py-5">
      {/* Tokopedia Logo */}
      <Image
        className="cursor-pointer"
        src="/icons/tokopedia-logo.png"
        alt="Tokopedia"
        width={155}
        height={155}
      />
      <p className="mx-8 cursor-pointer font-semibold">Category</p>

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
          width={27}
          height={27}
        />
        <p>User</p>
      </div>
    </div>
  );
}

export default MidNavbar;

"use client";
import { useState, useRef, useEffect } from "react";

function TopUpBills() {
  const [activeTab, setActiveTab] = useState("pulsa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nominal, setNominal] = useState("");
  const [, setPaket] = useState("");
  const tabsRef = useRef([]);
  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const tabs = [
    { id: "pulsa", label: "Pulsa" },
    { id: "data", label: "Paket Data" },
    { id: "flight", label: "Flight" },
    { id: "pln", label: "Listrik PLN" },
  ];

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (activeIndex === -1) return;

    const activeTabRef = tabsRef.current[activeIndex];
    const container = containerRef.current;

    if (activeTabRef && container) {
      const { offsetLeft, clientWidth } = activeTabRef;

      setUnderlineStyle({
        width: `${clientWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "pulsa":
        return (
          <div className="flex gap-x-4">
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Input the Number"
                className="w-full rounded-md border p-2"
                value={phoneNumber}
                onChange={(e) => setPaket(e.target.value)}
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">Nominal</label>
              <select
                className={`w-full rounded-md border p-2 ${
                  nominal === "" && "text-gray-500"
                }`}
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              >
                <option value="" disabled hidden>
                  Pick
                </option>
                <option value="6750" style={{ color: "black" }}>
                  Rp 5.000 - Rp.6.750
                </option>
                <option value="6500" style={{ color: "black" }}>
                  Rp 5.000 - Rp. 6.500
                </option>
                <option value="11500" style={{ color: "black" }}>
                  Rp 10.000 - Rp. 11.500
                </option>
                <option value="15500" style={{ color: "black" }}>
                  Rp 15.000 - Rp. 15.500
                </option>
                <option value="26500" style={{ color: "black" }}>
                  Rp 25.000 - Rp. 26.500
                </option>
                <option value="31300" style={{ color: "black" }}>
                  Rp 30.000 - Rp. 31.300
                </option>
              </select>
            </div>
            <button className="self-end rounded-md bg-green-500 px-7 py-2 text-white hover:bg-green-600">
              Buy
            </button>
          </div>
        );
      case "data":
        return (
          <div className="flex gap-x-4">
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Input the Number"
                className="w-full rounded-md border p-2"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">Nominal</label>
              <select
                className={`w-full rounded-md border p-2 ${
                  nominal === "" && "text-gray-500"
                }`}
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              >
                <option value="" disabled hidden>
                  Pick
                </option>
                <option value="paket 1" style={{ color: "black" }}>
                  XTRA Combo Flex XL, 30hr - Rp.100.000
                </option>
                <option value="paket 2" style={{ color: "black" }}>
                  XTRA Combo Flex 5XL 95 GB - Kouta Area Hingga 30GB + Bonus
                  Flex Rp.245.000
                </option>
                <option value="paket 3" style={{ color: "black" }}>
                  XTRA Combo Flex 4XL 140GB - Kouta Area Hingga 150GB + Bonus
                  Flex Rp.200.000
                </option>
                <option value="paket 4" style={{ color: "black" }}>
                  XTRA Combo Flex XL 32GB - Kouta Area Hingga 11GB + Bonus Flex
                  Rp.100.000
                </option>
                <option value="paket 5" style={{ color: "black" }}>
                  XTRA Combo Flex L 20GB - Kouta Area Hingga 14GB + Bonus Flex
                  Rp.80.000
                </option>
                <option value="paket 6" style={{ color: "black" }}>
                  XTRA Combo Flex S 6.5GB - Kouta Area Hingga 3.5GB + Bonus Flex
                  Rp.37.000
                </option>
              </select>
            </div>
            <button className="self-end rounded-md bg-green-500 px-7 py-2 text-white hover:bg-green-600">
              Buy
            </button>
          </div>
        );
      case "flight":
        return <div className="text-gray-500">Flight Content</div>;
      case "pln":
        return (
          <div className="flex gap-x-4">
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">
                Bill Type
              </label>
              <select
                className={`w-full rounded-md border p-2 ${
                  nominal === "" && "text-gray-500"
                }`}
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              >
                <option value="" disabled hidden>
                  Pick
                </option>
                <option value="paket 1" style={{ color: "black" }}>
                  Token Listrik
                </option>
                <option value="paket 2" style={{ color: "black" }}>
                  Tagihan Listrik
                </option>
                <option value="paket 3" style={{ color: "black" }}>
                  PLN Non-Taglis
                </option>
              </select>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">
                Subscription Number
              </label>
              <input
                type="text"
                placeholder="Input the Number"
                className="w-full rounded-md border p-2"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label className="text-sm font-bold text-gray-500">Nominal</label>
              <select
                className={`w-full rounded-md border p-2 ${
                  nominal === "" && "text-gray-500"
                }`}
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              >
                <option value="" disabled hidden>
                  Pick
                </option>
                <option value="paket 1" style={{ color: "black" }}>
                  20rb
                </option>
                <option value="paket 2" style={{ color: "black" }}>
                  50rb
                </option>
                <option value="paket 3" style={{ color: "black" }}>
                  100rb
                </option>
                <option value="paket 4" style={{ color: "black" }}>
                  200rb
                </option>
                <option value="paket 5" style={{ color: "black" }}>
                  500rb
                </option>
              </select>
            </div>
            <button className="self-end rounded-md bg-green-500 px-7 py-2 text-white hover:bg-green-600">
              Pay
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 flex-col px-3 pt-2">
      <div className="flex">
        <h2 className="text-2xl font-bold">Top Up & Bills</h2>
        <h3 className="text-md ml-3 self-end font-semibold text-green-600">
          View All
        </h3>
      </div>

      <div className="w-full bg-white pt-7">
        <div className="border-b border-gray-200">
          <div
            className="relative flex items-center font-bold"
            ref={containerRef}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveTab(tab.id)}
                className={`px-1 pb-1 ${
                  activeTab === tab.id
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-700"
                } w-full transition-colors duration-200 focus:outline-none`}
              >
                {tab.label}
              </button>
            ))}

            {/* Animated Underline */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-green-500"
              style={underlineStyle}
            />

            <button className="self-start pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-600 hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-3 pt-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default TopUpBills;

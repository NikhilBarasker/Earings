import React from 'react'

export default function General() {
  return (
    <div>
      <li
        data-popover-target="menu"
        className="relative block p-1 font-sans text-sm font-medium leading-normal text-blue-gray-900 antialiased mt-[10px] mb-[10px]"
      >
        <div
          role="button"
          className={`flex w-full items-center gap-2 rounded-lg p-3 py-2 pr-4 text-start font-medium leading-tight ${
            location.pathname === "/Categories/Earrings" ||
            location.pathname === "/Categories/Rings" ||
            location.pathname === "/Categories/KeyChain" ||
            location.pathname === "/Categories/Wallets" ||
            location.pathname === "/Categories/Caps" ||
            location.pathname === "/Categories/Goggles" ||
            location.pathname === "/Categories/Bracelets" ||
            location.pathname === "/Categories/Watches" ||
            location.pathname === "/Categories/Offers"
              ? "text-[#007bff]"
              : "text-[#333]"
          } outline-none transition-all hover:bg-opacity-80 hover:text-[#007bff]  focus:bg-opacity-80 focus:text-blue-gray-900  active:bg-opacity-80 active:text-blue-gray-900 productNav`}
          onClick={toogleRes}
        >
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            aria-hidden="true"
            className={`hidden h-3 w-3 ${
              showRes ? "rotate-180" : ""
            } transition-transform lg:block`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            aria-hidden="true"
            className={`block h-3 w-3 ${
              showRes ? "rotate-180" : ""
            } transition-transform lg:hidden`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>
        {showRes && (
          <div
            className="absolute z-[999] lg:top-[50px] lg:left-[-100px] lg:w-[900px]  min-w-[180px] max-w-screen-xl overflow-auto rounded-xl border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500  shadow-lg shadow-blue-gray-500/10 focus:outline-none overflow-x-auto productDropdown"
            id=":r8:"
            role="menu"
            data-popover="menu"
            data-popover-placement="bottom"
          >
            <ul
              className="lg:grid lg:grid-cols-3 gap-y-2 outline-none outline-0 flex flex-col"
              role="menuitem"
            >
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Earrings"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    <GiHeartEarrings className="avtar" />
                  </div>
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Earrings
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Rings"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    <LiaRingSolid className="avtar" />
                  </div>
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Rings
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/KeyChain"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    <GiChainedArrowHeads className="avtar" />
                  </div>
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Keychains
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Wallets"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <FaWallet className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Wallet
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Caps"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <GiBilledCap className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Caps
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Goggles"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <PiGogglesThin className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Goggles
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Bracelets"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <TbBrandTorchain className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Breslates
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Watches"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <BsSmartwatch className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Smart Watches
                    </h6>
                  </div>
                </button>
              </Link>
              <Link
                onClick={() => {
                  handleNavLinkClick();
                  setShowRes(false);
                }}
                to="/Categories/Offers"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <MdLocalOffer className="avtar" />
                  <div>
                    <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                      Special Offers
                    </h6>
                  </div>
                </button>
              </Link>
            </ul>
          </div>
        )}
      </li>
    </div>
  );
}

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bg-[#181818] text w-full h-16 flex items-center justify-between top-0 left-0 right-0 px-10">
      <div>
        <svg
          className="fill-white hover:fill-[green] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
        >
          <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z" />
        </svg>
      </div>
      <div className="Leftnav text text-3xl font-semibold cursor-pointer ml-5">
        Farm
      </div>
      <div className="Middlenav flex flex-1 mx-5 max-w-[700px] items-center">
        <input
          className=" px-5 py-2 w-full rounded-l-xl text-black outline-none"
          type="text"
          placeholder="Search for products, services and categories"
        />
        <div className="h-[37px] w-10 bgColor pt-2 pl-2 rounded-r-xl cursor-pointer">
          <Image
            className=""
            src="/assets/icons/search.png"
            alt="search-icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="Rightnav flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 cursor-pointer rounded-md p-3 hover:bg-[green]">
          <Image
            src="/assets/icons/help.png"
            alt="help-icon"
            width={20}
            height={20}
          />
          <p className="">Help</p>
          <Image
            src="/assets/icons/arrow-down.png"
            alt="help-icon"
            width={15}
            height={15}
          />
        </div>
        <div className="flex items-center gap-2  cursor-pointer rounded-md p-3 hover:bg-[green]">
          <Image
            src="/assets/icons/account.png"
            alt="help-icon"
            width={15}
            height={15}
          />
          <p>Account</p>
          <Image
            src="/assets/icons/arrow-down.png"
            alt="help-icon"
            width={15}
            height={15}
          />
        </div>
        <div className="flex relative cursor-pointer p-3 hover:bg-[green] rounded-md">
          <Image
            src="/assets/icons/cart.png"
            alt="cart-icon"
            width={30}
            height={20}
          />
          <p className="bgColor h-5 w-5 rounded-full absolute left-7 bottom-7 text-center">
            10
          </p>
          <p className="font-semibold mt-2 ">Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

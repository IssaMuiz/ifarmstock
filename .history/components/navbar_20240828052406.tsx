import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bg-[#181818] text w-full h-16 flex items-center justify-between top-0 left-0 right-0 px-10">
      <div className="Leftnav text text-3xl font-semibold cursor-pointer">
        Farm
      </div>
      <div className="Middlenav flex flex-1 mx-5 max-w-[500px] items-center">
        <input
          className=" px-5 py-2 w-full rounded-l-xl"
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
      <div className="Rightnav flex items-center justify-between gap-5">
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
        <div className="flex relative cursor-pointer hover:">
          <Image
            src="/assets/icons/cart.png"
            alt="cart-icon"
            width={30}
            height={20}
          />
          <p className="bgColor h-5 w-5 rounded-full absolute left-4 bottom-4 text-center">
            10
          </p>
          <p className="font-semibold mt-2">Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

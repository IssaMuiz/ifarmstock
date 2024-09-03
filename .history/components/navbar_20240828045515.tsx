import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bg-[#181818] text w-full h-16 flex items-center justify-between top-0 left-0 right-0 px-10">
      <div className="Leftnav text text-3xl font-semibold">Farm</div>
      <div className="Middlenav flex flex-1 mx-5 max-w-[500px] items-center">
        <input
          className=" px-5 py-2 w-full rounded-l-xl"
          type="text"
          placeholder="Search for products, services and categories"
        />
        <div className="h-[37px] w-10 bgColor pt-2 pl-2 rounded-r-xl">
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
        <div className="flex items-center gap-1">
          <Image
            src="/assets/icons/help.png"
            alt="help-icon"
            width={20}
            height={20}
          />
          <p>Help</p>
          <Image
            src="/assets/icons/arrow-down.png"
            alt="help-icon"
            width={15}
            height={15}
          />
        </div>
        <div className="flex items-center gap-2">
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
        <div className="flex relative">
          <Image
            src="/assets/icons/cart.png"
            alt="cart-icon"
            width={30}
            height={30}
          />
          <p className="bgColor p-1 rounded-full absolute left-4 bottom-5">3</p>
          <p className="font-semibold mt-3">Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

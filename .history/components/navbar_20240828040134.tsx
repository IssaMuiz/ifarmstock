import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bgColor text w-full h-16 flex items-center justify-between top-0 left-0 right-0 px-10">
      <div className="Leftnav text text-3xl font-semibold">Farm</div>
      <div className="Middlenav flex flex-1 max-w-[500px] items-center">
        <input
          className=" px-5 py-2 w-full rounded-l-xl"
          type="text"
          placeholder="Search for products, services and categories"
        />
        <div className="h-10 w-10 bg-yellow-400 pt-2 rounded-r-xl">
          <Image
            className=""
            src="/assets/icons/search.png"
            alt="search-icon"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="Rightnav flex items-center gap-5">
        <div>
          <Image
            src="/assets/icons/help.png"
            alt="help-icon"
            width={30}
            height={30}
          />
        </div>
        <div>Signup/Login</div>
        <div>
          <Image
            src="/assets/icons/cart.png"
            alt="cart-icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

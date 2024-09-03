import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed bgColor text w-full h-20 flex items-center justify-evenly px-10">
      <div className="Leftnav text text-3xl font-semibold">Farm</div>
      <div className="Middlenav flex w-[500px]  items-center">
        <div className="flex items-center w-full">
          <input
            className=" px-5 py-3  rounded-l-xl"
            type="text"
            placeholder="Search for products, services and categories"
          />
          <div className="h-12 w-10 bg-yellow-400 pt-2 rounded-r-xl">
            <Image
              className=""
              src="/assets/icons/search.png"
              alt="search-icon"
              width={30}
              height={30}
            />
          </div>
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
    </div>
  );
};

export default Navbar;

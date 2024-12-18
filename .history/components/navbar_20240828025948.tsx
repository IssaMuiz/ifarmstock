import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed bgColor text w-full h-20 flex items-center justify-between px-10">
      <div className="Leftnav text text-3xl font-semibold">Farm</div>
      <div className="Middlenav flex items-center">
        <div>
          <input
            type="text"
            placeholder="Search for products, services and categories"
          />
        </div>
        <div>
          <Image
            src="/assets/icons/search.png"
            alt="search-icon"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="Rightnav flex items-center">
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

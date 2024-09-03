"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "./clientLayout";
const Sidenav = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Broiler",
      expanded: false,
      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "Day Old Chicks", link: "/" },
        { name: "Matured Broilers", link: "/" },
        { name: "Frozen Chicken", link: "/" },
      ],
    },
    {
      id: "2",
      name: "Layers",
      expanded: false,
      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "Pullet", link: "/" },
        { name: "Point Of Lay", link: "/" },
        { name: "Old Layers", link: "/" },
      ],
    },
    {
      id: "3",
      name: "Catfish",
      expanded: false,

      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "Fingerlings/Juvenile", link: "/" },
        { name: "Matured Catfish", link: "/" },
        { name: "Smoked Catfish", link: "/" },
      ],
    },
    {
      id: "4",
      name: "Poultry-Eggs",
      expanded: false,

      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "Jumbo-size", link: "/" },
        { name: "Small-size", link: "/" },
        { name: "packaged-eggs", link: "/" },
      ],
    },
  ]);

  const handleDropdown = (id: string) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === id
          ? { ...category, expanded: !category.expanded }
          : category
      )
    );
  };

  const { isOpen } = useContext(SidebarContext);
  return (
    <nav
      className={`fixed h-auto z-20 left-0 top-0 bottom-0 w-[300px] transform transition-transform duration-300  bg-gray-100 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bgColor h-14 flex items-center text text-2xl pl-5 font-semibold gap-3">
        <Image
          src="/assets/icons/account.png"
          alt="profile-icon"
          height={25}
          width={25}
        />
        <p>Hello User</p>
      </div>
      <div className="overflow-scroll overflow-x-hidden scrollbar pb-5">
        {categories.map((category) => (
          <div onClick={() => handleDropdown(category.id)} key={category.id}>
            <div className="text-lg flex justify-between items-center font-semibold hover:bg-gray-300 mt-5 p-2 cursor-pointer">
              <div>{category.name}</div>

              <Image
                className={`${
                  category.expanded &&
                  "rotate-90 duration-300 transition-transform"
                } h-4 w-4`}
                src={category.arrowIcon}
                alt="arrow-icon"
                width={3}
                height={3}
              />
            </div>

            <div>
              {category.expanded && (
                <div>
                  {category.dropdownlink.map((dropdown, index) => (
                    <div className="hover:bg-gray-300" key={index}>
                      <Link href={dropdown.link}>
                        <div className="p-3 text-md ">{dropdown.name}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidenav;

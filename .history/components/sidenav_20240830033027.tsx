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
        { name: "Day old chicks", link: "/" },
        { name: "matured broilers", link: "/" },
        { name: "frozen chicken", link: "/" },
      ],
    },
    {
      id: "2",
      name: "Layers",
      expanded: false,
      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "pullet", link: "/" },
        { name: "Point of lay", link: "/" },
        { name: "Old layers", link: "/" },
      ],
    },
    {
      id: "3",
      name: "Catfish",
      expanded: false,

      arrowIcon: "/assets/icons/arrow-icon--right.png",
      dropdownlink: [
        { name: "fingerlings/juvenile", link: "/" },
        { name: "Matured catfish", link: "/" },
        { name: "smoked catfish", link: "/" },
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

  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <nav
      className={`fixed h-auto z-20 left-0 top-0 bottom-0 w-[300px] transform transition-transform duration-300 bg-gray-100 ${
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
      <div>
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
                    <Link key={index} href={dropdown.link}>
                      <div className="mt-2 hover:bg-gray-300 p-2">
                        {" "}
                        {dropdown.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={toggleSidebar}>X</button>
    </nav>
  );
};

export default Sidenav;

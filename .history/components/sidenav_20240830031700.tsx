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
      <div className="bgColor h-12 text text-center text-2xl font-semibold">
        <p className="pt-3">Hello User</p>
      </div>
      <div>
        {categories.map((category) => (
          <div onClick={() => handleDropdown(category.id)} key={category.id}>
            <div className="text-xl flex justify-between items-center font-semibold bg-gray-200 mt-5 p-2 cursor-pointer">
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
                <div className="">
                  {category.dropdownlink.map((dropdown, index) => (
                    <Link className="" key={index} href={dropdown.link}>
                      <div> {dropdown.name}</div>
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

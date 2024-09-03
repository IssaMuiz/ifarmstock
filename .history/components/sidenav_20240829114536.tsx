"use state";
import Link from "next/link";
import { useState } from "react";

const Sidenav = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Broiler",
      expanded: false,
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
  return (
    <nav className="fixed h-auto left-0 top-0 bottom-0 w-[300px] bg-gray-100 mt-20">
      <div>
        {categories.map((category) => (
          <div onClick={() => handleDropdown(category.id)} key={category.id}>
            <div className="text-xl font-semibold bg-gray-200">
              {category.name}
            </div>
            <div>
              {category.expanded && (
                <div>
                  {category.dropdownlink.map((dropdown, index) => (
                    <Link key={index} href={dropdown.link}>
                      <div> {dropdown.name}</div>
                    </Link>
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

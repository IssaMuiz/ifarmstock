"use state";
import { useState } from "react";

const Sidenav = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Broiler",
      dropdownlink: [
        { name: "Day old chicks", link: "/" },
        { name: "matured broilers", link: "/" },
        { name: "frozen chicken", link: "/" },
      ],
    },
    {
      id: "2",
      name: "Layers",
      dropdownlink: [
        { name: "pullet", link: "/" },
        { name: "Point of lay", link: "/" },
        { name: "Old layers", link: "/" },
      ],
    },
    {
      id: "3",
      name: "Catfish",
      dropdownlink: [
        { name: "fingerlings/juvenile", link: "/" },
        { name: "Matured catfish", link: "/" },
        { name: "smoked catfish", link: "/" },
      ],
    },
  ]);
  return (
    <nav className="fixed h-auto left-0 top-0 bottom-0 w-[300px] bg-gray-100 mt-20">
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <div>{category.name}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidenav;

"use state";
import { useState } from "react";

const Sidenav = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Broiler",
      dropdownlink: [
        { name: "Day old chick", link: "/" },
        { name: "", link: "/" },
        { name: "Day old chick", link: "/" },
      ],
    },
  ]);
  return (
    <nav>
      <div></div>
    </nav>
  );
};

export default Sidenav;

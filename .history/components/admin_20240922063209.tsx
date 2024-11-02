import React from "react";
import { useState } from "react";

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: [],
    price: 0,
    quantity: 0,
    weight: 0,
    hatchDate: "",
    brand: "",
    minimum: 0,
    discountTier: "",
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in product) {
      formData.append(key, product[key]);
    }

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Product added successfully");
    } else {
      console.error("Error adding product");
    }
  };
  return (
    <section className="mt-28">
      <div>
        <h1>Admin Panel - Add Product</h1>
      </div>
      <form
        className="flex flex-col gap-5 w-80"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className="p-3 outline-none"
          type="text"
          name="name"
          placeholder="Product name"
          onChange={handleInputChange}
          required
        />
        <input
          className="p-3 outline-none"
          type="text"
          name="category"
          placeholder="Product category"
          onChange={handleInputChange}
          required
        />
        <input
          className="p-3 outline-none"
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleInputChange}
          required
        />
        <input
          className="p-3 outline-none"
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleInputChange}
          required
        />
        <input
          className="p-3 outline-none"
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleInputChange}
        />
        <input
          className="p-3 outline-none"
          type="text"
          name="hatched-date"
          placeholder="Date hatched (Day old chicks)"
          onChange={handleInputChange}
        />
        <input
          className="p-3 outline-none"
          type="text"
          name="brand"
          placeholder="Brand name"
          onChange={handleInputChange}
          required
        />
        <input
          className="p-3 outline-none"
          type="number"
          name="minimum-order"
          placeholder="Minimum order"
          onChange={handleInputChange}
        />
        <input
          className="p-3 outline-none"
          type="file"
          name="image"
          multiple
          onChange={handleFileChange}
          required
        />
        <textarea
          className="p-3 outline-none"
          name="discountTiers"
          placeholder="Discount Tiers (JSON format"
          onChange={handleInputChange}
        ></textarea>

        <button
          type="submit"
          className="p-3 border bg-green-600 text text-xl font-normal"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AdminPanel;

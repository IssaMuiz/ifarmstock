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

    const response = await fetch("/app/api/products", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Product added successfully");
    } else {
      console.error("Error adding product");
    }
  };
  return (
    <section>
      <div>
        <h1>Admin Panel - Add Product</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Product category"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="hatched-date"
          placeholder="Date hatched (Day old chicks)"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand name"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="minimum-order"
          placeholder="Minimum order"
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          multiple
          onChange={handleFileChange}
          required
        />
        <textarea
          name="discountTiers"
          placeholder="Discount Tiers (JSON format"
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
};

export default AdminPanel;

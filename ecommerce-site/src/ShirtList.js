import React from "react";
import { Map } from "./Map";

export const ShirtList = () => {
  const database = [
    {
      name: "Men's CO Sunset T-Shirt (Blue)",
      price: "$ 34.00",
      image:
        "https://cdn.shopify.com/s/files/1/0323/0713/products/COSunsetTee-Blue-Front_1800x1800.jpg?v=1581368166",
      id: 1,
    },
    {
      name: "Men's Bushwhack Tee (Beige)",
      price: "$ 34.00",
      image:
        "https://cdn.shopify.com/s/files/1/0323/0713/products/SpringTee-3_1800x1800.jpg?v=1582309017",
      id: 2,
    },
    {
      name: "Men's Terrain Stretch Button Down (Gold)",
      price: "$ 58.00",
      image:
        "https://cdn.shopify.com/s/files/1/0323/0713/products/TerrainStretchButtonDown-Gold-Front_1_1800x1800.jpg?v=1581525012",
      id: 3,
    },
    {
      name: "Men's Creede Stretch Button Down (Blue)",
      price: "$ 58.00",
      image:
        "https://cdn.shopify.com/s/files/1/0323/0713/products/CreedeStretchButtonDown-Green-Front_1_1800x1800.jpg?v=1581525661",
      id: 4,
    },
  ];

  return (
    <div>
      {database.map((item) => (
        <Map
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.id}
        />
      ))}
    </div>
  );
};

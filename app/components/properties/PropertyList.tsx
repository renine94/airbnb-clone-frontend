"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

const PropertyList = () => {
  const [properties, SetProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const url = "http://localhost:8000/api/v1/property/";

    await fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        SetProperties(json);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertyList;

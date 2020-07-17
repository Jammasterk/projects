import React from "react";

const Map = ({
  name,
  brewery_type,
  street,
  city,
  state,
  postal_code,
  phone,
  website_url,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{brewery_type}</small>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{postal_code}</p>
      <p>{phone}</p>
      <a href={website_url} target="_blank">
        Visit Site
      </a>
    </div>
  );
};

export default Map;

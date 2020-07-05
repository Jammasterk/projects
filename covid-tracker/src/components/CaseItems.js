import React from "react";
import { PropTypes } from "prop-types";

const CaseItems = ({
  case: { country, confirmed, recovered, deaths, date },
}) => {
  return (
    <div>
      <h1>{country}</h1>
      <h2>{date}</h2>
      <p>{confirmed}</p>
      <p>{recovered}</p>
      <p>{deaths}</p>
    </div>
  );
};

CaseItems.propTypes = {
  case: PropTypes.object.isRequired,
};

export default CaseItems;

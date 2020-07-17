import React, { Fragment } from "react";

export const Spinner = () => {
  return (
    <Fragment>
      <i
        className="fas fa-spinner"
        style={{ margin: "auto", width: "200px", height: "200px" }}
      ></i>
    </Fragment>
  );
};

export default Spinner;

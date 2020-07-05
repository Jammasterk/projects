import React from "react";
import CaseItems from "./CaseItems";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";

const Case = ({ cases, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {cases.map((people) => (
          <CaseItems key={people.id} people={people} />
        ))}
      </div>
    );
  }
};

Case.propTypes = {
  cases: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Case;

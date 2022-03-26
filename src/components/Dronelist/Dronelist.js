import React from "react";

const Dronelist = (props) => {
  const { namelist } = props;

  return (
    <div className="my-3 ">
      <p className="fw-bold">{namelist.Name}</p>
    </div>
  );
};

export default Dronelist;

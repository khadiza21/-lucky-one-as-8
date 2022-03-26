import React from "react";

const Dronelist = (props) => {
  const { namelist } = props;

  return (
    <div>
      <p>{namelist.Name}</p>
    </div>
  );
};

export default Dronelist;

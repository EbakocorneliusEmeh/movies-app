import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Move = createContext();

export const MoveData = ({ children }) => {
  const [selectMovie, setSelectMovie] = useState(null);
  return (
    <Move.Provider value={{ selectMovie, setSelectMovie }}>
      {children}
    </Move.Provider>
  );
};

MoveData.propTypes = {
  children: PropTypes.node,
};

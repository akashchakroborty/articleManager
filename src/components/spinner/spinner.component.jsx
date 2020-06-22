import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay className="data-loader">
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;

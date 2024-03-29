// Encapsulate the markup (btn classes) inside a reusable React component

import React from "react";

interface Props {
  text: string;
  // onClick: () => void;       //  Within the function, in <onClick={onClick}>, 
								// the latter {onClick} returns an error
}

// Doesn't work when using the "function" keyword for some reason
const ButtonDKF = ({ text }: Props) => {
  return <div className="btn btn-success">{text}</div>;
};

export default ButtonDKF;

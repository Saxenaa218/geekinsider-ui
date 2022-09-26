import React from "react";
import { LogoProps } from "./types";

import "./Logo.scss";

const Logo: React.FC<LogoProps> = (props) => {
  return <div className="logo">GeekInsider</div>;
};

export default Logo;

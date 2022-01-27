import React from "react";
import Menu from "./Menu";
import { HeaderInner, HeaderWrapper, HeaderLogo } from "./style";
import LogoTiny from "../../../images/LogoTiny.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo src={LogoTiny} />
        <Menu />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  :hover {
    text-decoration: none;
  }
  text-decoration: none;
  height: 40px;
  display: table-cell;
  vertical-align: middle;
`;

export interface INavigation {
  className: string;
}

export const NavigationComponent = ({ className }: INavigation) => {
  return (
    <nav className={className}>
      <StyledLink to="/preview">Preview Page</StyledLink>
    </nav>
  );
};

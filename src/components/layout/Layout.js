import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutStyles = styled.div``;

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header></Header>
      {children}
    </LayoutStyles>
  );
}

export default Layout;

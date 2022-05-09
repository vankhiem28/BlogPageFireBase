import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const LayoutStyles = styled.div``;

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header></Header>
      {children}
      <Footer></Footer>
    </LayoutStyles>
  );
}

export default Layout;

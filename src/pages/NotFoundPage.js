import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00a7b9;
  gap: 40px;
  h1 {
    color: #fff;
  }
  button {
    padding: 10px;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundPageStyles>
      <img srcSet="/LogoMonkey.png 2x" alt="" className="img" />
      <h1>PAGE NOT FOUND !!</h1>
      <NavLink to="/">
        <button>Back To Home</button>
      </NavLink>
    </NotFoundPageStyles>
  );
}

export default NotFoundPage;

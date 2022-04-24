import React from "react";

import styled, { css } from "styled-components";
import { LoadingSpiner } from "../loading";
import { NavLink } from "react-router-dom";

const ButtonStyles = styled.div`
  ${(props) =>
    props.align === "center" &&
    css`
      .btn {
        display: flex;
        justify-content: center;
      }
    `};

  button {
    margin-top: 20px;
    width: 300px;
    height: 60px;
    border-radius: 8px;
    background-image: linear-gradient(
      107.61deg,
      #00a7b4 15.59%,
      #a4d96c 87.25%
    );
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .nav-link {
    text-decoration: none;
  }
  ${(props) =>
    props.color === "white" &&
    css`
      button {
        background-image: linear-gradient(#fff, #fff);
        color: ${(props) => props.theme.primary};
      }
    `};
`;

function Button({ type, children, isLoading, align, to, color, ...props }) {
  console.log(color);
  const child = !!isLoading ? <LoadingSpiner></LoadingSpiner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <ButtonStyles align={align} color={color}>
        <NavLink to={to} className="nav-link">
          <button type={type} {...props}>
            {child}
          </button>
        </NavLink>
      </ButtonStyles>
    );
  }
  return (
    <ButtonStyles align={align} color={color}>
      <span className="btn">
        <button type={type} {...props}>
          {child}
        </button>
      </span>
    </ButtonStyles>
  );
}

export default Button;

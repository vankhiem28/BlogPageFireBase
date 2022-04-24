import React from "react";
import styled from "styled-components";

const LoadingStyles = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 4px solid #fff;
  border-right: 5px solid transparent;
  animation: spiner 1s infinite linear;
  @keyframes spiner {
    100% {
      transform: rotate(360deg);
    }
  }
  display: inline-block;
`;

function LoadingSpiner() {
  return <LoadingStyles></LoadingStyles>;
}

export default LoadingSpiner;

import React from "react";
import styled from "styled-components";

const PostHeadingStyles = styled.div`
  .heading {
    margin-top: 68px;
    margin-bottom: 30px;
    position: relative;
    &-text {
      color: ${(props) => props.theme.tertiary};
      font-size: 28px;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 35px;
        height: 3px;
        background-color: ${(props) => props.theme.primary};
        border-radius: 1px;
      }
    }
  }
`;

function PostHeading({ children }) {
  return (
    <PostHeadingStyles>
      <div className="heading">
        <h1 className="heading-text">{children}</h1>
      </div>
    </PostHeadingStyles>
  );
}

export default PostHeading;

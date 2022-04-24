import React from "react";

import styled, { css } from "styled-components";

const PostTagCategoryStyles = styled.div`
  /* ${(props) =>
    props.bgcolor === "primary" &&
    css`
      .post-category {
        background-color: red;
      }
    `}; */
  .post-category {
    padding: 4px 10px;
    background-color: #fff;
    border-radius: 10px;
    color: ${(props) => props.theme.gray6B};
    font-size: 14px;
    font-weight: 600;
  }
`;

function PostTagCategory({ bgcolor, children }) {
  return (
    <PostTagCategoryStyles bgcolor={bgcolor}>
      <span className="post-category">{children}</span>
    </PostTagCategoryStyles>
  );
}

export default PostTagCategory;

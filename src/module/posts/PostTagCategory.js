import React from "react";

import styled, { css } from "styled-components";

const PostTagCategoryStyles = styled.div`
  .post-category {
    padding: 4px 10px;
    background-color: #f3edff;
    border-radius: 10px;
    color: ${(props) => props.theme.gray6B};
    font-size: 14px;
    font-weight: 600;
  }
  ${(props) =>
    props.color === "secondary" &&
    css`
      .post-category {
        background-color: #fff;
      }
    `};
`;

function PostTagCategory({ color, children, ...props }) {
  return (
    <PostTagCategoryStyles color={color} {...props}>
      <span className="post-category">{children}</span>
    </PostTagCategoryStyles>
  );
}

export default PostTagCategory;

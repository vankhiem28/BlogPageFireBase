import React from "react";
import styled, { css } from "styled-components";

const PostTagAuthorStyles = styled.div`
  .post-info {
    display: flex;
    align-items: center;
    gap: 0 10px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
  .post-dot {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 100%;
  }
  .post-title {
    position: absolute;
    top: 0;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    margin: 0 20px;
    top: 63px;
    line-height: 28px;
  }
  ${(props) =>
    props.color === "secondary" &&
    css`
      .post-info {
        color: #6b6b6b;
      }
      .post-dot {
        background-color: #b1b5c3;
      }
    `};
`;

function PostTagAuthor({ date, author, color, ...props }) {
  return (
    <PostTagAuthorStyles color={color} {...props}>
      <div className="post-info">
        <span className="post-date">{date}</span>
        <span className="post-dot"></span>
        <span className="post-author">{author}</span>
      </div>
    </PostTagAuthorStyles>
  );
}

export default PostTagAuthor;

import React from "react";

import styled from "styled-components";
import PostHeading from "../posts/PostHeading";
import PostTagAuthor from "../posts/PostTagAuthor";
import PostTagCategory from "../posts/PostTagCategory";
const HomeFeatureStyles = styled.div`
  .post {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    gap: 0;
    width: 100%;
    &-item {
      width: 360px;
      position: relative;
      border-radius: 15px;
    }
    &-img {
      border-radius: 15px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
    }
    &-top {
      position: absolute;
      top: 23px;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 20px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 0 10px;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
    }
    &-dot {
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 100%;
    }
    &-title {
      position: absolute;
      top: 0;
      font-size: 22px;
      font-weight: 600;
      color: #fff;
      margin: 0 20px;
      top: 63px;
      line-height: 28px;
    }
  }
`;

function HomeFeature() {
  return (
    <HomeFeatureStyles>
      <div className="container">
        <PostHeading>Features</PostHeading>
        <div className="post">
          <div className="post-item">
            <img srcSet="/postItem.png" className="post-img" alt="" />
            <div className="post-overlay"></div>
            <div className="post-top">
              <PostTagCategory bgcolor={"primary123"}>
                Kiến thức
              </PostTagCategory>
              <PostTagAuthor date="Mar 23" author="MaxLe"></PostTagAuthor>
            </div>
            <h1 className="post-title">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
          </div>
        </div>
      </div>
    </HomeFeatureStyles>
  );
}

export default HomeFeature;

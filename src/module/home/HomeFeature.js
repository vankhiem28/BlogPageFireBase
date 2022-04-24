import React from "react";

import styled from "styled-components";
const HomeFeatureStyles = styled.div`
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
  .post {
    width: 100%;
    &-item {
      width: 360px;
      position: relative;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

function HomeFeature() {
  return (
    <HomeFeatureStyles>
      <div className="container">
        <div className="heading">
          <h1 className="heading-text">Feature</h1>
        </div>
        <div className="post">
          <div className="post-item">
            <img srcSet="/postItem.png" className="post-img" alt="" />
            <div className="post-overlay"></div>
            <div className="post-top">
              <span className="post-category">Kiến thức</span>
              <div className="post-info">
                <span className="post-date">Mar 23</span>
                <span className="post-dot"></span>
                <span className="post-author">MaxLe</span>
              </div>
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

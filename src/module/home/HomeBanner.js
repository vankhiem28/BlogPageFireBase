import React from "react";

import styled from "styled-components";
import { Button } from "../../components/button";
const HomeBannerStyles = styled.div`
  height: 519px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner-text {
    display: flex;
    flex-direction: column;
    gap: 28px 0;
  }
  .banner-title {
    font-size: 48px;
    letter-spacing: 2px;
    color: #fff;
  }
  .banner-des {
    width: 421px;
    font-size: 14px;
    color: #fff;
    line-height: 28px;
  }
`;

function HomeBanner() {
  return (
    <div className="container">
      <HomeBannerStyles>
        <div className="banner-text">
          <h1 className="banner-title">Monkey Blogging</h1>
          <p className="banner-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <Button color="white">Get Started</Button>
        </div>
        <div className="banner-img">
          <img srcSet="/userIMG.png" alt="" />
        </div>
      </HomeBannerStyles>
    </div>
  );
}

export default HomeBanner;

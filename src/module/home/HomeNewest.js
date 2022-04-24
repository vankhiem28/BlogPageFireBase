import React from "react";
import PostHeading from "../posts/PostHeading";
import styled from "styled-components";
import PostTagCategory from "../posts/PostTagCategory";
import PostTagAuthor from "../posts/PostTagAuthor";

const HomeNewestStyles = styled.div`
  .newest {
    &-box {
      width: 100%;
      max-width: 571px;
    }
    &-img {
      width: 100%;
      height: 433px;
      border-radius: 15px;
    }
  }
`;

function HomeNewest() {
  return (
    <HomeNewestStyles>
      <div className="container">
        <PostHeading>Newest update</PostHeading>
        <div className="newest-box">
          <div className="newest-large">
            <img srcSet="/postItem.png" className="newest-img" alt="" />
            <PostTagCategory>Kiến thức</PostTagCategory>
            <h1>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</h1>
            <PostTagAuthor date="Mar 23 " author="MaxLe"></PostTagAuthor>
          </div>
        </div>
      </div>
    </HomeNewestStyles>
  );
}

export default HomeNewest;

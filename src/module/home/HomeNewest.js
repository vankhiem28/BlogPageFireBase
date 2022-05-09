import React from "react";
import PostHeading from "../posts/PostHeading";
import styled from "styled-components";
import PostTagCategory from "../posts/PostTagCategory";
import PostTagAuthor from "../posts/PostTagAuthor";

const HomeNewestStyles = styled.div`
  .newest {
    &-box {
      display: flex;
      width: 100%;
      display: grid;
      gap: 0 40px;
      grid-template-columns: auto auto;
    }
    &-large {
      max-width: 571px;
    }
    &-imgL {
      width: 100%;
      height: 433px;
      border-radius: 15px;
      object-fit: cover;
    }
    &-padding {
      padding: 25px 0 10px 0;
    }
    &-titleL {
      font-size: 22px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    &-small {
      max-width: 571px;
      max-height: 542px;
      border-radius: 15px;
      background-color: #f3edff;
    }
    &-imgS {
      width: 181px;
      border-radius: 10px;
    }
    &-titleS {
      font-size: 18px;
      font-weight: 600;
      padding: 10px 0;
    }
    &-item {
      display: flex;
      gap: 0 20px;
      padding: 30px 19px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        bottom: -5px;
        height: 1px;
        background-color: #e0e0e0;
      }
      &:last-child {
        /* padding: ; */
        &::before {
          content: "";
          position: absolute;
          width: 0px;
        }
      }
    }
    &-bottom {
      display: grid;
      grid-template-columns: auto auto auto auto;
      /* justify-content: space-between; */
      gap: 0 40px;
      margin-top: 57px;
      &-item {
        width: 100%;
        max-width: 267px;
      }
    }
    &-imgM {
      border-radius: 15px;
      width: 100%;
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
            <img srcSet="/postItem.png" className="newest-imgL" alt="" />
            <div className="newest-padding">
              <PostTagCategory>Kiến thức</PostTagCategory>
            </div>
            <h1 className="newest-titleL">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostTagAuthor
              color="secondary"
              date="Mar 23 "
              author="MaxLe"
            ></PostTagAuthor>
          </div>
          <div className="newest-small">
            <div className="newest-item">
              <img srcSet="/postItem.png" alt="img" className="newest-imgS" />
              <div className="">
                <PostTagCategory color="secondary">Kiến thức</PostTagCategory>
                <h1 className="newest-titleS">
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </h1>
                <PostTagAuthor
                  color="secondary"
                  date="Mar 23 "
                  author="MaxLe"
                ></PostTagAuthor>
              </div>
            </div>
          </div>
        </div>
        <div className="newest-bottom">
          <div className="newest-bottom-item">
            <img srcSet="/postItem.png" className="newest-imgM" alt="" />
            <div className="newest-padding">
              <PostTagCategory>Kiến thức</PostTagCategory>
            </div>
            <h1 className="newest-titleS">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostTagAuthor
              color="secondary"
              date="Mar 23 "
              author="MaxLe"
            ></PostTagAuthor>
          </div>
          <div className="newest-bottom-item">
            <img srcSet="/postItem.png" className="newest-imgM" alt="" />
            <div className="newest-padding">
              <PostTagCategory>Kiến thức</PostTagCategory>
            </div>
            <h1 className="newest-titleS">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostTagAuthor
              color="secondary"
              date="Mar 23 "
              author="MaxLe"
            ></PostTagAuthor>
          </div>
          <div className="newest-bottom-item">
            <img srcSet="/postItem.png" className="newest-imgM" alt="" />
            <div className="newest-padding">
              <PostTagCategory>Kiến thức</PostTagCategory>
            </div>
            <h1 className="newest-titleS">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostTagAuthor
              color="secondary"
              date="Mar 23 "
              author="MaxLe"
            ></PostTagAuthor>
          </div>
          <div className="newest-bottom-item">
            <img srcSet="/postItem.png" className="newest-imgM" alt="" />
            <div className="newest-padding">
              <PostTagCategory>Kiến thức</PostTagCategory>
            </div>
            <h1 className="newest-titleS">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostTagAuthor
              color="secondary"
              date="Mar 23 "
              author="MaxLe"
            ></PostTagAuthor>
          </div>
        </div>
      </div>
    </HomeNewestStyles>
  );
}

export default HomeNewest;

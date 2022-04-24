import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { useAuth } from "../../contexts/auth-context";
import { Button } from "../button";

const navMenu = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "blog",
    title: "Blog",
  },
  {
    url: "contact",
    title: "Contact",
  },
];
const HeaderStyles = styled.header`
  .header-main {
    padding: 25px 0;
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
    margin-right: 23px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 30px;
    &-item {
      list-style: none;
    }
    &-link {
      text-decoration: none;
      color: #000;
      font-weight: 500;
    }
  }
  .search {
    margin-left: auto;
    width: 320px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 21px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    &-input {
      width: 100%;
    }
    &-icon {
      padding-left: 18px;
    }
  }
  .user {
    margin-left: 20px;
    height: 50px;
    padding: 0 6px;
    background-image: linear-gradient(
      107.61deg,
      #00a7b4 15.59%,
      #a4d96c 87.25%
    );
    border-radius: 8px;
    &-name {
      color: #fff;
      line-height: 50px;
    }
  }
`;

function Header() {
  const { userInfo } = useAuth();
  console.log(userInfo);
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <NavLink to="/">
            <img srcSet="/LogoMonkey.png 2x" alt="" className="logo" />
          </NavLink>
          <ul className="menu">
            {navMenu.map((item) => (
              <li className="menu-item">
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
            />
            <div className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  stroke-width="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          {!userInfo ? (
            <Button
              style={{
                marginLeft: "20px",
                marginTop: "0px",
                width: "191px",
                height: "50px",
              }}
              to="/sign-up"
            >
              Sign Up
            </Button>
          ) : (
            <div className="user">
              <span className="user-name">
                {" "}
                {userInfo?.displayName ? userInfo?.displayName : "User"}
              </span>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;

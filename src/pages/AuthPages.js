import React from "react";
import styled from "styled-components";

const AuthPagesStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
  }
  .form-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
  }
  .error_message {
    color: red;
    margin-bottom: 4px;
  }
  .have_account {
    display: flex;
    justify-content: flex-end;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.primary};
    }
  }
`;

function AuthPages({ children }) {
  return <AuthPagesStyles>{children}</AuthPagesStyles>;
}

export default AuthPages;

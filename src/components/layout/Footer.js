import React from "react";

import styled from "styled-components";

const FooterStyles = styled.div`
  margin-top: 100px;
  background-color: ${(props) => props.theme.primary};
`;

function Footer() {
  return (
    <FooterStyles>
      <div></div>
    </FooterStyles>
  );
}

export default Footer;

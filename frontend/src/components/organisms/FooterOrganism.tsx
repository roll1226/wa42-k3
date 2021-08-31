import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";

const FooterContainer = styled.footer`
  padding: 32px 200px;
  color: ${GeneralColorStyle.White};
  grid-row: 3 / 4;
  background: ${GeneralColorStyle.Black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.h6`
  padding-bottom: 8px;
  img {
    width: 50px;
  }
`;

const CopyRight = styled.small`
  font-size: 12px;
`;

const FooterOrganism = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src="/logo_04.png" alt="ロゴ" />
      </FooterLogo>

      <CopyRight>&copy; 2021 roll1226</CopyRight>
    </FooterContainer>
  );
};

export default FooterOrganism;

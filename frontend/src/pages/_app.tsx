import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import createStore from "../ducks/createStore";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-markdown-editor-lite/lib/index.css";
import FooterOrganism from "../components/organisms/FooterOrganism";
import HeaderOrganism from "../components/organisms/HeaderOrganism";
import SignInModalOrganism from "../components/organisms/ModalOrganism";
import GeneralColorStyle from "../styles/GeneralColorStyle";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${GeneralColorStyle.Black};
    font-family:
      "ヒラギノ丸ゴ Pro W4", "ヒラギノ丸ゴ Pro", "Hiragino Maru Gothic Pro", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "HG丸ｺﾞｼｯｸM-PRO", "HGMaruGothicMPRO";

    .rc-md-editor .editor-container .sec-md {
      border-right: 2px solid #e0e0e0;
    }
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-auto-columns: 100vw;
  overflow-x: hidden;
`;

const BodyContainer = styled.div`
  padding: 80px 40px 120px;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={createStore}>
      <GlobalStyle />
      <SignInModalOrganism />

      <Body>
        <HeaderOrganism />
        <BodyContainer>
          <Component {...pageProps} />
        </BodyContainer>
        <FooterOrganism />
      </Body>
    </Provider>
  );
};
export default MyApp;

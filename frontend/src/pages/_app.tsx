import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import createStore from "../ducks/createStore";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-markdown-editor-lite/lib/index.css";
import FooterOrganism from "../components/organisms/FooterOrganism";
import HeaderOrganism from "../components/organisms/HeaderOrganism";
import SignInModalOrganism from "../components/organisms/ModalOrganism";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family:
      "ヒラギノ丸ゴ Pro W4", "ヒラギノ丸ゴ Pro", "Hiragino Maru Gothic Pro", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "HG丸ｺﾞｼｯｸM-PRO", "HGMaruGothicMPRO";
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-auto-columns: 100vw;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  padding: 40px;
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

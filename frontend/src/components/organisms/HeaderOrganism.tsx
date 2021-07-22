import styled from "styled-components";
import { useUserState } from "../../ducks/user/selectors";
import { useUserInfoEffect } from "../../hooks/useUserInfoEffect";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import RegisterButtonMolecule from "../molecules/RegisterButtonMolecule";
import SignInButtonMolecule from "../molecules/SignInButtonMolecule";
import SignOutButtonMolecule from "../molecules/SignOutButtonMolecule";

const HeaderContainer = styled.header`
  padding: 12px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${ColorUtil.addOpacity(GeneralColorStyle.Blue, 0.8)};
`;

const TitleContainer = styled.h1``;

const UserActionContainer = styled.div``;

const HeaderOrganism = () => {
  useUserInfoEffect();
  const state = useUserState().user;

  return (
    <HeaderContainer>
      <TitleContainer>ロゴ</TitleContainer>

      {!state.userInfo && (
        <UserActionContainer>
          <RegisterButtonMolecule />

          <SignInButtonMolecule />
        </UserActionContainer>
      )}
      {state.userInfo && <SignOutButtonMolecule />}
    </HeaderContainer>
  );
};

export default HeaderOrganism;

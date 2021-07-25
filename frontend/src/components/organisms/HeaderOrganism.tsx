import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useUserState } from "../../ducks/user/selectors";
import userSlice from "../../ducks/user/slice";
import { ModalType } from "../../ducks/user/type";
import { useUserInfoEffect } from "../../hooks/useUserInfoEffect";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import EditorButtonMolecule from "../molecules/EditorButtonMolecule";
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

const TitleContainer = styled.h1`
  cursor: pointer;
`;

const UserActionContainer = styled.div``;

const HeaderOrganism = () => {
  useUserInfoEffect();
  const dispatch = useDispatch();
  const state = useUserState().user;
  const router = useRouter();

  const openModal = (modalType: ModalType) => {
    dispatch(
      userSlice.actions.setModalType({
        modalType,
      })
    );
  };

  const pushHome = () => {
    router.push("/");
  };

  return (
    <HeaderContainer>
      <TitleContainer onClick={pushHome}>ロゴ</TitleContainer>

      {!state.userInfo && (
        <UserActionContainer>
          <RegisterButtonMolecule
            isBorder={true}
            onClick={() => openModal(ModalType.REGISTER)}
          />

          <SignInButtonMolecule
            isBorder={false}
            onClick={() => openModal(ModalType.SIGN_IN)}
          />
        </UserActionContainer>
      )}
      {state.userInfo && (
        <UserActionContainer>
          <EditorButtonMolecule />
          <SignOutButtonMolecule />
        </UserActionContainer>
      )}
    </HeaderContainer>
  );
};

export default HeaderOrganism;

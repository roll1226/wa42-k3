import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  asyncRegisterUser,
  asyncSignInUser,
} from "../../ducks/user/asyncActions";
import { useUserState } from "../../ducks/user/selectors";
import userSlice from "../../ducks/user/slice";
import { ModalType } from "../../ducks/user/type";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import EmailInputMolecule from "../molecules/EmailInputMolecule";
import NameInputMolecule from "../molecules/NameInputMolecule";
import PasswordInputMolecule from "../molecules/PasswordInputMolecule";
import RegisterButtonMolecule from "../molecules/RegisterButtonMolecule";
import SignInButtonMolecule from "../molecules/SignInButtonMolecule";

const ModalContainer = styled.div`
  position: absolute;
  z-index: 2;
`;

const Mask = styled.div`
  background: ${ColorUtil.addOpacity(GeneralColorStyle.Black, 0.6)};
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  margin: auto;
  padding: 60px 40px;
  width: calc(32vw - 40px);
  height: calc(32vw - 60px);
  position: fixed;
  z-index: 3;
  inset: 0;
  background: ${GeneralColorStyle.White};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${GeneralColorStyle.Black};
`;

const Induction = styled.p`
  font-size: 12px;
  color: ${GeneralColorStyle.Gray};
`;

const ModalOrganism = () => {
  const dispatch = useDispatch();
  const state = useUserState().user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (state.modalType !== ModalType.NULL) return;
    reset();
  }, [state.modalType]);

  const reset = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const insertEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const insertPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const insertUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const closeModal = () => {
    reset();
    dispatch(
      userSlice.actions.setModalType({
        modalType: ModalType.NULL,
      })
    );
  };

  const signIn = () => {
    if (!email || !password) return;

    dispatch(
      asyncSignInUser({
        email,
        password,
      })
    );
  };

  const Register = () => {
    if (!username || !email || !password) return;

    dispatch(
      asyncRegisterUser({
        username,
        email,
        password,
      })
    );
  };

  const openModal = (modalType: ModalType) => {
    reset();

    dispatch(
      userSlice.actions.setModalType({
        modalType,
      })
    );
  };

  return (
    <>
      {state.modalType !== ModalType.NULL && (
        <ModalContainer>
          <Mask onClick={closeModal} />
          <Card>
            {state.modalType === ModalType.SIGN_IN && (
              <>
                <EmailInputMolecule value={email} onChange={insertEmail} />
                <PasswordInputMolecule
                  value={password}
                  onChange={insertPassword}
                />

                <SignInButtonMolecule
                  isBorder={true}
                  onClick={signIn}
                  color={GeneralColorStyle.Blue}
                />

                <Hr />

                <Induction>
                  まだアカウントを持っていない場合は下記から
                </Induction>

                <RegisterButtonMolecule
                  isBorder={false}
                  onClick={() => openModal(ModalType.REGISTER)}
                  color={GeneralColorStyle.Blue}
                />
              </>
            )}
            {state.modalType === ModalType.REGISTER && (
              <>
                <EmailInputMolecule value={email} onChange={insertEmail} />
                <PasswordInputMolecule
                  value={password}
                  onChange={insertPassword}
                />
                <NameInputMolecule value={username} onChange={insertUsername} />

                <RegisterButtonMolecule
                  isBorder={true}
                  onClick={Register}
                  color={GeneralColorStyle.Blue}
                />

                <Hr />

                <Induction>もしアカウントを持っている場合は下記から</Induction>

                <SignInButtonMolecule
                  isBorder={false}
                  onClick={() => openModal(ModalType.SIGN_IN)}
                  color={GeneralColorStyle.Blue}
                />
              </>
            )}
          </Card>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalOrganism;

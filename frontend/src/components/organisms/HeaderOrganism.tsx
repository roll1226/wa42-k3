import { useDispatch } from "react-redux";
import { useUserState } from "../../ducks/user/selectors";
import userSlice from "../../ducks/user/slice";
import { useUserInfoEffect } from "../../hooks/useUserInfoEffect";
import SessionUtil from "../../utils/session/SessionUtil";
import SignInButtonMolecule from "../molecules/SignInButtonMolecule";
import SignOutButtonMolecule from "../molecules/SignOutButtonMolecule";

const HeaderOrganism = () => {
  useUserInfoEffect();
  const dispatch = useDispatch();
  const state = useUserState().user;

  const signOut = () => {
    SessionUtil.removeSession("userInfo");
    SessionUtil.removeSession("jwt");
    dispatch(userSlice.actions.clearUserState());
  };

  return (
    <header>
      {!state.userInfo && (
        <SignInButtonMolecule onClick={() => console.log("sign in")} />
      )}
      {state.userInfo && <SignOutButtonMolecule onClick={signOut} />}
    </header>
  );
};

export default HeaderOrganism;

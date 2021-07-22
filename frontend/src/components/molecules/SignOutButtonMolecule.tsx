import { useDispatch } from "react-redux";
import userSlice from "../../ducks/user/slice";
import SessionUtil from "../../utils/session/SessionUtil";
import ButtonAtom from "../atoms/ButtonAtom";

const SignOutButtonMolecule = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    SessionUtil.removeSession("userInfo");
    SessionUtil.removeSession("jwt");
    dispatch(userSlice.actions.clearUserState());
  };

  return <ButtonAtom text={"ログアウト"} onClick={signOut} isBorder={false} />;
};

export default SignOutButtonMolecule;

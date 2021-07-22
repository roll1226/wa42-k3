import LoggerUtil from "../../utils/debugger/LoggerUtil";
import ButtonAtom from "../atoms/ButtonAtom";

const SignInButtonMolecule = () => {
  const signIn = () => {
    LoggerUtil.debug("sign in");
  };

  return <ButtonAtom text={"ログイン"} onClick={signIn} isBorder={false} />;
};

export default SignInButtonMolecule;

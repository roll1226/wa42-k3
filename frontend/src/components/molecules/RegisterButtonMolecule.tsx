import LoggerUtil from "../../utils/debugger/LoggerUtil";
import ButtonAtom from "../atoms/ButtonAtom";

const RegisterButtonMolecule = () => {
  const register = () => {
    LoggerUtil.debug("register");
  };

  return <ButtonAtom text={"ユーザ登録"} onClick={register} />;
};

export default RegisterButtonMolecule;

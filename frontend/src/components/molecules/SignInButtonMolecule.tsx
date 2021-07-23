import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ButtonAtom from "../atoms/ButtonAtom";

type Props = {
  isBorder: boolean;
  onClick: () => void;
  color?: string;
};

const SignInButtonMolecule = ({
  isBorder,
  onClick,
  color = GeneralColorStyle.White,
}: Props) => {
  return (
    <ButtonAtom
      text={"ログイン"}
      onClick={onClick}
      color={color}
      isBorder={isBorder}
    />
  );
};

export default SignInButtonMolecule;

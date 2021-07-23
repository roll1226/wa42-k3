import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ButtonAtom from "../atoms/ButtonAtom";

type Props = {
  isBorder: boolean;
  onClick: () => void;
  color?: string;
};

const RegisterButtonMolecule = ({
  isBorder,
  onClick,
  color = GeneralColorStyle.White,
}: Props) => {
  return (
    <ButtonAtom
      text={"ユーザ登録"}
      onClick={onClick}
      color={color}
      isBorder={isBorder}
    />
  );
};

export default RegisterButtonMolecule;

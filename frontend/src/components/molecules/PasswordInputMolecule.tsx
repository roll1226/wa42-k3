import { ChangeEvent } from "react";
import InputAtom, { InputType } from "../atoms/InputAtom";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInputMolecule = ({ value, onChange }: Props) => {
  return (
    <InputAtom
      placeholder={"パスワード"}
      type={InputType.PASSWORD}
      value={value}
      onChange={onChange}
    />
  );
};

export default PasswordInputMolecule;

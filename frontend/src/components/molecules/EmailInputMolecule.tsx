import { ChangeEvent } from "react";
import InputAtom, { InputType } from "../atoms/InputAtom";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const EmailInputMolecule = ({ value, onChange }: Props) => {
  return (
    <InputAtom
      placeholder={"メールアドレス"}
      type={InputType.EMAIL}
      value={value}
      onChange={onChange}
    />
  );
};

export default EmailInputMolecule;

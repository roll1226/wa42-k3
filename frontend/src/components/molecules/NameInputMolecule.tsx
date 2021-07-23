import { ChangeEvent } from "react";
import InputAtom, { InputType } from "../atoms/InputAtom";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const NameInputMolecule = ({ value, onChange }: Props) => {
  return (
    <InputAtom
      placeholder={"ユーザ名"}
      type={InputType.EMAIL}
      value={value}
      onChange={onChange}
    />
  );
};

export default NameInputMolecule;

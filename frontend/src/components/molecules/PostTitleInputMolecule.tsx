import { ChangeEvent } from "react";
import InputAtom, { InputType } from "../atoms/InputAtom";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PostTitleInputMolecule = ({ value, onChange }: Props) => {
  return (
    <InputAtom
      placeholder={"タイトル"}
      type={InputType.TEXT}
      value={value}
      onChange={onChange}
    />
  );
};

export default PostTitleInputMolecule;

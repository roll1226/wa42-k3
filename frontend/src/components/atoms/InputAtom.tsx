import { ChangeEvent } from "react";
import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

type Props = {
  type: InputType;
  placeholder: string;
  value: string;
  width?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputContainer = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

const LabelContainer = styled.label``;

const Input = styled.input`
  padding: 0.6em;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 1px;
  color: ${GeneralColorStyle.Black};
  border: 1px solid ${GeneralColorStyle.Black};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${GeneralColorStyle.Blue};
    outline: none;
    box-shadow: 0 0 5px 1px ${ColorUtil.addOpacity(GeneralColorStyle.Blue, 0.6)};
  }
`;

const InputAtom = ({
  type,
  placeholder,
  value,
  width = "100%",
  onChange,
}: Props) => {
  return (
    <InputContainer width={width}>
      <LabelContainer>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </LabelContainer>
    </InputContainer>
  );
};

export default InputAtom;

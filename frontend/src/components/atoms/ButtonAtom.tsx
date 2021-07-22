import styled, { css } from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";

type Props = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  color?: string;
  isBorder?: boolean;
};

const ButtonContainer = styled.button<{ color: string; isBorder: boolean }>`
  border-radius: 10000px;
  padding: 4px 24px;
  background: transparent;
  color: ${({ color }) => color};
  font-size: 14px;
  cursor: pointer;

  ${({ isBorder, color }) =>
    isBorder &&
    css`
      border: solid ${color} 2px;
      &:hover {
        background: ${ColorUtil.addOpacity(color, 0.2)};
      }
    `}

  ${({ isBorder, color }) =>
    !isBorder &&
    css`
      padding: 4px 0px;
      margin: 0px 24px;
      border: transparent;
      border-radius: 0px;
      &:hover {
        border-bottom: solid 1px ${ColorUtil.addOpacity(color, 0.8)};
      }
    `}
`;

const ButtonAtom = ({
  text,
  disabled = false,
  onClick,
  color = GeneralColorStyle.White,
  isBorder = true,
}: Props) => {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      color={color}
      isBorder={isBorder}
    >
      {text}
    </ButtonContainer>
  );
};

export default ButtonAtom;

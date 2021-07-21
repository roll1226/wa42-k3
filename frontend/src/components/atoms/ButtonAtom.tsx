import styled from "styled-components";

type Props = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonContainer = styled.button`
  border: solid #454545 1px;
  border-radius: 10000px;
  padding: 4px 24px;
  background: #fff;
  color: #000;
  font-size: 14px;
`;

const ButtonAtom = ({ text, disabled = false, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {text}
    </ButtonContainer>
  );
};

export default ButtonAtom;

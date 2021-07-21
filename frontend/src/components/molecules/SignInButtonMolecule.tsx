import ButtonAtom from "../atoms/ButtonAtom";

type Props = {
  onClick: () => void;
};

const SignInButtonMolecule = ({ onClick }: Props) => {
  return <ButtonAtom text={"ログイン"} onClick={onClick} />;
};

export default SignInButtonMolecule;

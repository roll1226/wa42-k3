import ButtonAtom from "../atoms/ButtonAtom";

type Props = {
  onClick: () => void;
};

const SignOutButtonMolecule = ({ onClick }: Props) => {
  return <ButtonAtom text={"ログアウト"} onClick={onClick} />;
};

export default SignOutButtonMolecule;

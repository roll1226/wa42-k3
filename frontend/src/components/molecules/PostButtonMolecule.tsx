import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ButtonAtom from "../atoms/ButtonAtom";

type Props = {
  onClick: () => void;
};

const PostButtonMolecule = ({ onClick }: Props) => {
  return (
    <ButtonAtom
      text={"投稿"}
      onClick={onClick}
      color={GeneralColorStyle.Blue}
      isBorder={true}
    />
  );
};

export default PostButtonMolecule;

import { useRouter } from "next/dist/client/router";
import ButtonAtom from "../atoms/ButtonAtom";

const EditorButtonMolecule = () => {
  const router = useRouter();

  const pushEditor = () => {
    router.push("/editor");
  };

  return <ButtonAtom text={"投稿する"} isBorder={true} onClick={pushEditor} />;
};

export default EditorButtonMolecule;

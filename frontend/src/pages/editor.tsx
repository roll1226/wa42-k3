import HeadAtoms from "../components/atoms/HeadAtom";
import PostEditorOrganism from "../components/organisms/PostEditorOrganism";
import { useAuthRedirectEffect } from "../hooks/useAuthRedirectEffect";

const Editor = () => {
  useAuthRedirectEffect();

  return (
    <div>
      <HeadAtoms title={"投稿ページ"} />
      <PostEditorOrganism />
    </div>
  );
};

export default Editor;

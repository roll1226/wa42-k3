import HeadAtoms from "../components/atoms/HeadAtom";
import PostEditorOrganism from "../components/organisms/PostEditorOrganism";

const Editor = () => {
  return (
    <div>
      <HeadAtoms title={"投稿ページ"} />
      <PostEditorOrganism />
    </div>
  );
};

export default Editor;

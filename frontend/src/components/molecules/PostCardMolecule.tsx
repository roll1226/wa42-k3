import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import PostCreatorAtom from "../atoms/PostCreatorAtom";

type Props = {
  username: string;
  userId: number;
  postId: number;
  title: string;
  created_at: Date;
};

const PostCardContainer = styled.div`
  padding: 16px;
  border-radius: 4px;
  width: 700px;
  background: ${GeneralColorStyle.White};
  box-shadow: 0px 0px 4px ${ColorUtil.addOpacity(GeneralColorStyle.Black, 0.4)};
`;

const PostTitle = styled.h3`
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const PostCardMolecule = ({
  username,
  userId,
  postId,
  title,
  created_at,
}: Props) => {
  const router = useRouter();

  const pushPost = () => {
    router.push(`/post/${postId}`);
  };

  return (
    <>
      <PostCardContainer>
        <PostCreatorAtom
          userId={userId}
          username={username}
          created_at={created_at}
        />

        <PostTitle onClick={pushPost}>{title}</PostTitle>
      </PostCardContainer>
    </>
  );
};

export default PostCardMolecule;

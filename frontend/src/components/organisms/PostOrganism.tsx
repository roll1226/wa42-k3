import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import formatDateUtil from "../../utils/date/formatDateUtil";
import MarkdownAtom from "../atoms/MarkdownAtom";
import PostCreatorAtom from "../atoms/PostCreatorAtom";

type Props = {
  username: string;
  userId: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
};

const PostContainer = styled.div`
  padding: 80px;
  width: 70vw;
  box-shadow: 0px 0px 4px ${ColorUtil.addOpacity(GeneralColorStyle.Black, 0.4)};
  border-radius: 4px;
`;

const PostTitle = styled.h2`
  font-size: 32px;
  color: #000;
  font-weight: bold;
  padding-top: 16px;
  padding-bottom: 40px;
`;

const PostOrganism = ({
  username,
  userId,
  title,
  body,
  created_at,
  updated_at,
}: Props) => {
  return (
    <PostContainer>
      <PostCreatorAtom
        userId={userId}
        username={username}
        created_at={created_at}
        updated_at={updated_at}
        isAfter={formatDateUtil.compareDateAfter(
          updated_at,
          new Date(new Date(created_at).getTime() + 15000)
        )}
      />

      <PostTitle>{title}</PostTitle>

      <MarkdownAtom children={body} />
    </PostContainer>
  );
};

export default PostOrganism;

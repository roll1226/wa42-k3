import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import formatDateUtil from "../../utils/date/formatDateUtil";
import Link from "next/link";

type Props = {
  userId: number;
  username: string;
  created_at: Date;
  updated_at?: Date;
  isAfter?: boolean;
};

const PostCardTop = styled.p`
  font-size: 14px;
`;

const PostCreator = styled.a`
  font-weight: bold;
  color: ${GeneralColorStyle.Black};
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const PostCreateAt = styled.span`
  margin-left: 4px;
`;

const PostCreatorAtom = ({
  userId,
  username,
  created_at,
  updated_at,
  isAfter = false,
}: Props) => {
  return (
    <PostCardTop>
      <Link href={`/user/${userId}`}>
        <PostCreator>{username}</PostCreator>
      </Link>
      <PostCreateAt>
        が
        {updated_at
          ? isAfter
            ? `${formatDateUtil.formatDate(updated_at)}に更新`
            : `${formatDateUtil.formatDate(created_at)}に投稿`
          : `${formatDateUtil.formatDate(created_at)}に投稿`}
      </PostCreateAt>
    </PostCardTop>
  );
};

export default PostCreatorAtom;

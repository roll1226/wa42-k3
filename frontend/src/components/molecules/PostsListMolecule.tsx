import styled from "styled-components";
import { PostModel } from "../../models/strapi/PostModel";
import PostCardMolecule from "./PostCardMolecule";

type Props = {
  posts: PostModel[] | null;
};

const PostContainer = styled.div`
  margin: 40px 0 12px;
`;

const PostsListMolecule = ({ posts }: Props) => {
  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <PostContainer key={index}>
            <PostCardMolecule
              username={
                typeof post.users_permissions_user === "object"
                  ? post.users_permissions_user.username
                  : "unknown"
              }
              userId={
                typeof post.users_permissions_user === "object"
                  ? post.users_permissions_user.id
                  : 0
              }
              postId={post.id}
              title={post.title}
              created_at={post.created_at}
            />
          </PostContainer>
        ))}
    </>
  );
};

export default PostsListMolecule;

import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HeadAtoms from "../../components/atoms/HeadAtom";
import PostOrganism from "../../components/organisms/PostOrganism";
import { asyncGetPost } from "../../ducks/post/asyncActions";
import { usePostState } from "../../ducks/post/selectors";

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const state = usePostState().post;

  useEffect(() => {
    if (!id) return;

    dispatch(asyncGetPost({ id: Number(id) }));
  }, [id]);

  return (
    <>
      <HeadAtoms title={state.post ? state.post.title : ""} />

      {state.post && (
        <PostContainer>
          <PostOrganism
            username={
              typeof state.post.users_permissions_user === "object"
                ? state.post.users_permissions_user.username
                : "unknown"
            }
            userId={
              typeof state.post.users_permissions_user === "object"
                ? state.post.users_permissions_user.id
                : 0
            }
            title={state.post.title}
            body={state.post.body}
            created_at={state.post.created_at}
            updated_at={state.post.updated_at}
          />
        </PostContainer>
      )}
    </>
  );
};

export default Post;

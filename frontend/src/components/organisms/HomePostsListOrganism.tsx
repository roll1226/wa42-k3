import styled from "styled-components";
import { usePostState } from "../../ducks/post/selectors";
import PostsListMolecule from "../molecules/PostsListMolecule";

const HomePostTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;

const HomePostsListOrganism = () => {
  const state = usePostState().post;

  return (
    <>
      <HomePostTitle>投稿一覧</HomePostTitle>

      <PostsListMolecule posts={state.posts} />
    </>
  );
};

export default HomePostsListOrganism;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HeadAtoms from "../components/atoms/HeadAtom";
import HomePostsListOrganism from "../components/organisms/HomePostsListOrganism";
import { asyncGetPosts } from "../ducks/post/asyncActions";

const HomePostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetPosts());
  }, []);

  return (
    <div>
      <HeadAtoms title="HOME" />

      <HomePostsListContainer>
        <HomePostsListOrganism />
      </HomePostsListContainer>
    </div>
  );
}

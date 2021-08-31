import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HeadAtoms from "../../components/atoms/HeadAtom";
import PostsListMolecule from "../../components/molecules/PostsListMolecule";
import { asyncGetUserPosts } from "../../ducks/post/asyncActions";
import { usePostState } from "../../ducks/post/selectors";
import { UserInfoModel } from "../../models/strapi/UserInfoModel";
// import { asyncGetUserInfo } from "../../ducks/user/asyncActions";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

const UserPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = usePostState().post;
  const [userName, setUserName] = useState("");
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    dispatch(asyncGetUserPosts({ id: id as string }));

    const getUserInfo = async (id: string) => {
      const response = await StrapiUtil.getUserInfo(id);
      const userInfo = response.data as UserInfoModel;
      LoggerUtil.debug(response.data);
      setUserName(userInfo.username);
    };

    getUserInfo(id as string);
  }, [id]);

  return (
    <UserPostsContainer>
      <HeadAtoms title={userName} />

      <Title>{userName} の投稿</Title>

      <PostsListMolecule posts={state.userPosts} />
    </UserPostsContainer>
  );
};

export default User;

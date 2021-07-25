import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useUserState } from "../../ducks/user/selectors";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";
import SessionUtil from "../../utils/session/SessionUtil";
import EditorAtom from "../atoms/EditorAtom";
import PostButtonMolecule from "../molecules/PostButtonMolecule";
import PostTitleInputMolecule from "../molecules/PostTitleInputMolecule";

const EditorContainer = styled.div`
  margin: 40px 0;
`;

const PostEditorOrganism = () => {
  const state = useUserState().user;
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const insertTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const insertBody = ({ html, text }: { html: string; text: string }) => {
    LoggerUtil.debug(html);
    setBody(text);
  };

  const post = () => {
    const jwt = state.jwt ? state.jwt : SessionUtil.getSession("jwt");
    const userInfo = SessionUtil.getSession("userInfo");
    const sessionUserInfo = userInfo !== null ? JSON.parse(userInfo) : null;

    const userId = state.userInfo
      ? state.userInfo.id
      : sessionUserInfo
      ? sessionUserInfo.id
      : null;

    if (!jwt || !userId || !title || !body) return;
    StrapiUtil.postPost(jwt, title, body, userId).then((res) => {
      router.push(`/post/${res.data.id}`);
    });
  };

  return (
    <>
      <PostTitleInputMolecule onChange={insertTitle} value={title} />

      <EditorContainer>
        <EditorAtom onChange={insertBody} text={body} />
      </EditorContainer>

      <PostButtonMolecule onClick={post} />
    </>
  );
};

export default PostEditorOrganism;

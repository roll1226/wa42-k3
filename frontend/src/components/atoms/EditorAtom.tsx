import dynamic from "next/dynamic";
import { ChangeEvent, useState } from "react";
import { useUserState } from "../../ducks/user/selectors";
import { env } from "../../env/DotEnv";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";
import SessionUtil from "../../utils/session/SessionUtil";
import MarkdownAtom from "./MarkdownAtom";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

type Props = {
  text: string;
  onChange:
    | ((
        data: {
          text: string;
          html: string;
        },
        event?: ChangeEvent<HTMLTextAreaElement> | undefined
      ) => void)
    | undefined;
};

const EditorAtom = ({ text, onChange }: Props) => {
  const user = useUserState().user;

  // handle image upload
  const handleImageUpload = async (file: File) => {
    try {
      const jwt = user.jwt ? user.jwt : SessionUtil.getSession("jwt");
      if (!jwt) throw new Error("jwt is null.");

      const result = await StrapiUtil.uploadFile(file, jwt);
      return new Promise((resolve) => {
        resolve(env.getStrapiUrl() + result.data[0].url);
      });
    } catch (error) {
      LoggerUtil.debug(error);
    }
  };

  return (
    <MdEditor
      value={text}
      style={{
        height: "600px",
      }}
      config={{
        view: {
          menu: true,
          md: true,
          html: true,
          fullScreen: true,
          hideMenu: true,
        },
      }}
      onChange={onChange}
      onImageUpload={handleImageUpload}
      renderHTML={(text) => <MarkdownAtom children={text} />}
    />
  );
};

export default EditorAtom;

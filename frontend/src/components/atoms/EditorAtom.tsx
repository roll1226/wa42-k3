import dynamic from "next/dynamic";
import { useState } from "react";
import { useUserState } from "../../ducks/user/selectors";
import { env } from "../../env/DotEnv";
import LoggerUtil from "../../utils/debugger/LoggerUtil";
import StrapiUtil from "../../utils/lib/StrapiUtil";
import SessionUtil from "../../utils/session/SessionUtil";
import MarkdownAtom from "./MarkdownAtom";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const EditorAtom = () => {
  const [text, setText] = useState("");
  const user = useUserState().user;

  // handle editor change
  const handleEditorChange = ({
    html,
    text,
  }: {
    html: string;
    text: string;
  }) => {
    LoggerUtil.debug(text, html);
    setText(text);
  };

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
      onChange={handleEditorChange}
      onImageUpload={handleImageUpload}
      renderHTML={(text) => <MarkdownAtom children={text} />}
    />
  );
};

export default EditorAtom;

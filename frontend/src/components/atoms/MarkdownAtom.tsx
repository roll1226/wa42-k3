import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";

type Props = {
  children: string;
};

const MarkdownContainer = styled.div`
  h1,
  h2 {
    border-bottom: solid 1px
      ${ColorUtil.addOpacity(GeneralColorStyle.Black, 0.6)};
  }

  h1 {
    padding-bottom: 8px;
  }

  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
`;

const MarkdownAtom = ({ children }: Props) => {
  return (
    <MarkdownContainer className="custom-html-style">
      <ReactMarkdown remarkPlugins={[gfm]} children={children} />
    </MarkdownContainer>
  );
};

export default MarkdownAtom;

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styled from "styled-components";

type Props = {
  children: string;
};

const MarkdownContainer = styled.div`
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

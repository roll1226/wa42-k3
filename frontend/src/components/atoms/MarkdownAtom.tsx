import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styled from "styled-components";
import GeneralColorStyle from "../../styles/GeneralColorStyle";
import ColorUtil from "../../utils/color/ColorUtil";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { CodeComponent } from "react-markdown/src/ast-to-react";

type CodeProps = Parameters<CodeComponent>[0];

const CodeContainer = styled.div`
  position: relative;
`;

const LanguageFrame = styled.span`
  padding: 0 12px;
  top: -27px;
  left: 0;
  position: absolute;
  color: rgb(47, 47, 47);
  background: #f5f5f5;
  z-index: 2;
`;

const components = {
  code({ node, inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <CodeContainer>
        {match[1] && <LanguageFrame>{match[1]}</LanguageFrame>}

        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      </CodeContainer>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

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
  pre {
    background: rgb(47, 47, 47);

    code {
      background: none;
      color: #f5f5f5;
    }
  }
`;

const MarkdownAtom = ({ children }: Props) => {
  return (
    <MarkdownContainer className="custom-html-style">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        children={children}
        components={components}
      />
    </MarkdownContainer>
  );
};

export default MarkdownAtom;

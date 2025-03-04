import { memo } from "react";
import { androidstudio, CopyBlock } from "react-code-blocks";

interface CodeProps {
  className?: string;
  language?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text, language = "javascript" } = props;
  return (
    <div className={className}>
      <CopyBlock
        theme={androidstudio}
        text={text}
        language={language}
        showLineNumbers={true}
        codeBlock
      />
    </div>
  );
});

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`/md/${filePath}`)
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent(text);
        console.log(typeof text)
      });
  }, [filePath]);

  return <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;

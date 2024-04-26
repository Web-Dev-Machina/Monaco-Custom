import { useState } from "react";
import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";

const CodeEditor = () => {
  const [editorInput, seteditorInput] = useState("");
  return (
    <>
      <Editor theme="vs-dark" height="100%" width="100%" defaultLanguage="javascript" defaultValue="Editor de Texto funcional" onChange={(value) => seteditorInput(value)} options={{ tabIndex: -1, scrollbar: { alwaysConsumeMouseWheel: false } }} />
    </>
  );
};

CodeEditor.propTypes = {
  props: PropTypes.any,
};

export default CodeEditor;

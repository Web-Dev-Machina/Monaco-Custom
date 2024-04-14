import { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
    const [editorInput, seteditorInput] = useState("");
  return <>
  <Editor
  theme="vs-dark"
  height="30vh"
  width="60vh"
  defaultLanguage="javascript"
  defaultValue="Editor de Texto funcional"
  onChange={(value) => seteditorInput(value)}
  />
</>;
};

export default CodeEditor;

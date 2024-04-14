import Editor from '@monaco-editor/react';

const CodeEditor = () => {

  return <>
    <Editor theme="vs-dark" height="30vh" width="60vh" defaultLanguage="javascript" defaultValue={"Ingresar \n datos que solo \n se pueden leer "} options={{readOnly:true}}/>
  </>;
};

export default CodeEditor;

import Editor from '@monaco-editor/react';

const CodeReader = ({props}) => {
  return <>
    <Editor theme="vs-dark" height="30vh" width="60vh" defaultLanguage="javascript" defaultValue={`${props}`} options={{readOnly:true}}/>
  </>;
};

export default CodeReader;

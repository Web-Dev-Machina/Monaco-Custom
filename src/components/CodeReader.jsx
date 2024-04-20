import Editor from '@monaco-editor/react';
import PropTypes from "prop-types";

const CodeReader = ({props}) => {
  return <>
    <Editor
      className='editor-rounded'
      theme="vs-dark"
      height="15rem"
      width="30rem"
      defaultLanguage="javascript"
      defaultValue={`${props}`}
      options={{readOnly:true, tabIndex:-1, scrollbar:{alwaysConsumeMouseWheel:false}}}
    />  
  </>;
};

CodeReader.propTypes= {
  props : PropTypes.any,
}

export default CodeReader;

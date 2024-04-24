import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";

const CodeReader = ({ props }) => {
  return (
    <>
      <Editor theme="vs-dark" height="100%" width="100%" defaultLanguage="javascript" defaultValue={`${props}`} options={{ readOnly: true, tabIndex: -1, scrollbar: { alwaysConsumeMouseWheel: false } }} />
    </>
  );
};

CodeReader.propTypes = {
  props: PropTypes.any,
};

export default CodeReader;

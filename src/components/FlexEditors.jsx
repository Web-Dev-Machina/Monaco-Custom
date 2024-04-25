import CodeEditor from "./CodeEditor";
import CodeReader from "./CodeReader";

const FlexEditors = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col md:flex-row ">
        <div className="mx-auto h-56 w-[312px] max-w-96">
          <CodeEditor />
        </div>
        <div className="mx-auto h-56 w-[312px] max-w-96">
          <CodeReader />
        </div>
      </div>
    </>
  );
};

export default FlexEditors;

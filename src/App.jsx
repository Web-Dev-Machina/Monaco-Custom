import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CodeEditor from "./components/CodeEditor";
import CodeReader from "./components/CodeReader";

function App() {
  return (
    <>
      <Navbar />
      <Main />
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
}

export default App;

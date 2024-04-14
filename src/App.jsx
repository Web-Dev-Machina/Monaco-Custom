import CodeReader from "./components/CodeReader"
import CodeEditor from "./components/CodeEditor";

function App() {

  const codeContent = 12345;
  const codeContent2 = 678910;

  return (
    <>
    <div className="w-52 space-y-5">
      <CodeEditor/>
      <CodeReader props={codeContent}/>
      <CodeReader props={codeContent2}/>
    </div>
    </>
  )
}

export default App

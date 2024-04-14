import CodeEditor from "./components/CodeEditor"

function App() {

  const codeContent = 12345;

  return (
    <>
    <div className="w-52">
      <CodeEditor codeContent={codeContent}/>
    </div>
    </>
  )
}

export default App

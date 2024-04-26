import JSIntro from "../javascript/JSIntro";
const Javascript = () => {
  return (
    <>
      <div className="mx-auto grid h-96 max-w-screen-2xl grid-cols-12">
        {/* Sidebar nav */}
        <div className="col-span-2 bg-green-500 p-4">Start</div>
        {/* Components changing by file selection in sidebar */}
        <div className="col-span-8 h-[1000px] bg-red-500 p-4">
          <JSIntro />
        </div>
        <div className="col-span-2 bg-purple-500 p-4">End</div>
      </div>
    </>
  );
};

export default Javascript;

import SidebarLogic from "../pages/javascript/grid/SidebarLogic";
import MainSection from "../pages/javascript/grid/MainSection";
import EndAnimation from "../pages/javascript/grid/EndAnimation";
const Javascript = () => {
  return (
    <>
      {/* Grid */}
      <section className="mx-auto grid h-96 max-w-[1920px] grid-cols-12">
        <aside className="col-span-2 flex flex-col border-gray-300 bg-purple-100 p-4 text-black shadow-inner">
          <p className="mb-2 text-xl font-bold">JS Tutorial</p>
          <ul>
            <SidebarLogic /> {/* Left Sidebar Link map logic */}
          </ul>
        </aside>

        <section className="col-span-8 h-96 bg-purple-50 p-4 shadow-inner">
          <MainSection /> {/* Middle Section Routes map logic */}
        </section>
        <aside className="animated-background col-span-2 overflow-hidden border-gray-300 bg-purple-500 shadow-inner">
          {" "}
          {/* .animated-background */}
          <div className="h-full w-full bg-purple-100 text-center opacity-70">
            <EndAnimation /> {/* Text Animation Right Sidebar */}
          </div>
        </aside>
      </section>
    </>
  );
};

export default Javascript;

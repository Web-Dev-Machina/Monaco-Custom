import SidebarLogic from "../pages/javascript/grid/SidebarLogic";
import MainSection from "../pages/javascript/grid/MainSection";
const Javascript = () => {
  return (
    <>
      {/* Grid */}
      <section className="mx-auto grid  max-w-[1920px] grid-cols-12">
        <aside className="hidden flex-col border-gray-300 bg-purple-100 text-black shadow-inner md:col-span-3 md:flex lg:col-span-3 xl:col-span-2">
          <p className="my-2 pl-4 text-xl font-bold">JS Tutorial</p>
          <ul>
            <SidebarLogic /> {/* Left Sidebar Link map logic */}
          </ul>
        </aside>

        <section className="col-span-12 bg-purple-50 p-4 shadow-inner md:col-span-9 lg:col-span-8">
          <MainSection /> {/* Middle Section Routes map logic */}
        </section>
        <aside className="animated-background col-span-2 hidden overflow-hidden border-gray-300 bg-purple-500 shadow-inner lg:col-span-1 lg:block xl:col-span-2">{/* .animated-background */}</aside>
      </section>
    </>
  );
};

export default Javascript;

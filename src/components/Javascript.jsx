import { Routes, Route, Link } from "react-router-dom";
import JSIntro from "../pages/javascript/JSIntro";
import Page2 from "../pages/javascript/Page2";
import Page3 from "../pages/javascript/Page3";
const Javascript = () => {
  return (
    <>
      <section className="mx-auto grid h-96 max-w-screen-2xl grid-cols-12">
        {/* Sidebar nav */}
        <aside className="col-span-2 bg-green-500 p-4">
          <Link to="">Página 1</Link> {/* Link to self */}
          <Link to="page2">Página 2</Link>
          <Link to="page3">Página 3</Link>
        </aside>
        {/* Components changing by file selection in sidebar */}
        <article className="col-span-8 h-[1000px] bg-red-500 p-4">
          <Routes>
            <Route index element={<JSIntro />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
          </Routes>
        </article>
        {/* End Sidebar */}
        <aside className="col-span-2 bg-purple-500 p-4">End</aside>
      </section>
    </>
  );
};

export default Javascript;

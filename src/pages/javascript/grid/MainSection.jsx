import { Routes, Route } from "react-router-dom";
import JSIntro from "../JSIntro";
import Page2 from "../Page2";
import Page3 from "../Page3";

const MainSection = () => {
  const routes = [
    { element: <JSIntro />, path: "" },
    { element: <Page2 />, path: "page2" },
    { element: <Page3 />, path: "page3" },
  ];
  const routeLinks = routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />);

  return (
    <>
      <Routes>{routeLinks}</Routes>
    </>
  );
};

export default MainSection;

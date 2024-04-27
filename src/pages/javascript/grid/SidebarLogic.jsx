import { NavLink } from "react-router-dom";

const SidebarLogic = () => {
  const routes = [
    { name: "JS Introducción", path: "" },
    { name: "Página2", path: "page2" },
    { name: "Página3", path: "page3" },
  ];
  const routeLinks = routes.map((route, index) => (
    <li key={index} className="flex gap-1 hover:bg-green-900">
      <img src="js-logo.svg" />
      <NavLink to={route.path} end>
        {route.name}
      </NavLink>
    </li>
  ));
  return <>{routeLinks}</>;
};

export default SidebarLogic;

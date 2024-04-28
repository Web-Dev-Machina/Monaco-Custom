import { NavLink } from "react-router-dom";

const SidebarLogic = () => {
  const routes = [
    { name: "JS Introducción", path: "" },
    { name: "Web Geolocation API", path: "page2" },
    { name: "JS Number Properties", path: "page3" },
  ];
  const routeLinks = routes.map((route, index) => (
    <NavLink key={index} to={route.path} end>
      <li className="flex gap-1 py-1.5 pl-1 hover:bg-green-900">
        <img src="js-logo.svg" />
        {route.name}
      </li>
    </NavLink>
  ));
  return <>{routeLinks}</>;
};

export default SidebarLogic;

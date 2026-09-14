import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="h-20 bg-blue-200 p-5">
      <h1 className="text-2xl font-bold">
        {location.pathname === "/" ? "Dashboard" : location.pathname === "/tasks" ? "Tasks" : "Profile"}
      </h1>
    </div>
  );
};

export default Header;
import { Link, useLocation } from "react-router-dom";
import profileImage from "../../../assets/Shalu-pic.jpeg";

const Header = () => {
  const location = useLocation();

  const pageTitle =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname === "/tasks"
      ? "Tasks"
      : "Profile";

  return (
    <header className="h-20 bg-blue-200 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{pageTitle}</h1>

      <Link
        to="/profile"
        aria-label="Open profile"
        title="pagla loog"
        className="flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        <img
  src={profileImage}
  alt="Shalu profile"
  className="w-12 h-12 rounded-full object-cover shadow-md"
/>
      </Link>
    </header>
  );
};

export default Header;
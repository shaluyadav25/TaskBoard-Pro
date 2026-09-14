import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="w-65 min-h-screen  bg-blue-950 text-2xl p-5  text-white">
          <h1 className="text-center text-purple-200 pt-5 text-3xl mb-10 font-semibold">
            TaskBoard Pro
          </h1>
          <Link
            to="/"
            className="block mb-5 h-10 p-1 rounded-md text-md text-center text-black bg-gray-200"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="block mb-5 p-1 rounded-md text-md text-center text-black bg-gray-200"
          >
            Tasks
          </Link>
          <Link
            to="/profile"
            className="block mb-5 p-1 rounded-md text-md text-center text-black bg-gray-200"
          >
            Profile
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

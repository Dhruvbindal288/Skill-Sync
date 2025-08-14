import React, { useEffect } from "react";
import useMessageStore from "../store/useMessageStore";

function SideBarUser() {
  const { sidebarUsers, getUserForSideBar } = useMessageStore();

  useEffect(() => {
    getUserForSideBar();
  }, [getUserForSideBar]);

  return (
    <div className="bg-gradient-to-b from-sky-300 to-blue-400 min-h-screen w-full md:w-80 p-4 shadow-lg rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Connected Users
      </h1>

      {sidebarUsers.length === 0 ? (
        <p className="text-white text-center mt-4">
          No connected users yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {sidebarUsers.map((user) => (
            <li
              key={user._id}
              className="bg-white text-gray-800 rounded-lg shadow-md p-3 flex items-center gap-3 hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                {user.name[0].toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideBarUser;

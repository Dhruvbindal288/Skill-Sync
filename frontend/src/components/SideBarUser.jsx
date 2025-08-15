/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useMessageStore from "../store/useMessageStore";

function SideBarUser() {
  const { getUserForSideBar, sidebarUsers } = useMessageStore();

  useEffect(() => {
    getUserForSideBar();
  }, [getUserForSideBar]);

  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>
      {sidebarUsers.length === 0 ? (
        <p className="text-gray-500">No users found</p>
      ) : (
        <div className="space-y-3">
          {sidebarUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              <img
                src={user.profilePic || "/default-avatar.png"} 
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SideBarUser;

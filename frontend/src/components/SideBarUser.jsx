import React, { useEffect } from "react";
import useMessageStore from "../store/useMessageStore";

function SideBarUser() {
  const { getUserForSideBar, sidebarUsers, selectUser, selectedUser } = useMessageStore();

  useEffect(() => {
    getUserForSideBar();
  }, [getUserForSideBar]);

  return (
    <div className="w-full sm:w-64 bg-gray-50 border-r border-gray-300 h-screen flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Chats</h2>
      {sidebarUsers.length === 0 ? (
        <p className="text-gray-500">No users found</p>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-2">
          {sidebarUsers.map((user) => (
            <div
              key={user._id}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
                ${selectedUser?._id === user._id ? "bg-indigo-100" : "hover:bg-indigo-50"}`}
              onClick={() => selectUser(user)}
            >
              <img
                src={user.profilePic || "/default-avatar.png"}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800 truncate">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.lastMessage || "No message yet"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SideBarUser;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useskillStore from "../store/useSkillStore";

function BrowseSkill() {
  const { allUser } = useskillStore();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await allUser();
      setUser(users || []);
    };
    fetchUsers();
  }, [allUser]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Browse Skills
      </h1>

      {user.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.map((u) => (
            <div
              key={u._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Profile Picture */}
              <img
                src={u.profilePic || "frontend/src/assets/react.svg"}
                alt={u.name}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{u.name}</h2>
                <p className="text-gray-500 text-sm mb-3">{u.bio || "No bio available"}</p>

                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Wants to Learn:</span>
                  <p className="text-gray-600 text-sm">
                    {u.wantsToLearn?.join(", ") || "Not specified"}
                  </p>
                </div>

                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Wants to Teach:</span>
                  <p className="text-gray-600 text-sm">
                    {u.wantsToTeach?.join(", ") || "Not specified"}
                  </p>
                </div>

                {/* Send Request Button */}
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                  onClick={() => alert(`Request sent to ${u.name}`)}
                >
                  Send Request
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found</p>
      )}
    </div>
  );
}

export default BrowseSkill;

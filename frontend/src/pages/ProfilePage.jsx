import React from 'react';


const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-xl p-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img
              src=''
              alt="User"
              className="w-full h-full object-cover rounded-full border-4 border-blue-400"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">User Name</h1>
            <p className="text-gray-600 mb-4">
              This is the user's bio. You can write a short introduction about yourself here.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Want to Learn
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Want to Teach
              </span>
            </div>
          </div>
        </div>

        {/* Want to Learn & Want to Teach Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700 mb-2">Want to Learn</h2>
            <p className="text-gray-600">Add what the user wants to learn here.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700 mb-2">Want to Teach</h2>
            <p className="text-gray-600">Add what the user wants to teach here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

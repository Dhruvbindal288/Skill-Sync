/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const { user, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  
  
 

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = async () => {
      const base64Image = reader.result; 
      setSelectedImage(base64Image);     
      
        await updateProfile({ profilePic: base64Image });
  };
  }
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-2xl ring-1 ring-gray-100 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-400 bg-gray-100 flex items-center justify-center">
              {user.profilePic ? (
                <img src={selectedImage} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="px-4 text-center text-lg font-semibold text-gray-700 leading-snug" aria-label={`${user.name} avatar fallback`}>
                  {user.name}
                </span>
              )}
            </div>

          
            <input
              id="profilePicInput"
              type="file"
              
              className="hidden"
              onChange={handleUpload}
            />
            <label
              htmlFor="profilePicInput"
              className="cursor-pointer inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              {user.profilePic ? 'Change Profile Pic' : 'Add Profile Pic'}
            </label>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600 mt-2">{user.bio}</p>
          </div>
        </div>

        <hr className="mt-12 mb-10" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Want to Learn</h2>
              <span className="text-xs text-gray-500">{user.want_to_learn.length} skills</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.want_to_learn.length > 0 ? (
                user.want_to_learn.map((s, idx) => (
                  <span key={`learn-${s}-${idx}`} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No skills added.</span>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Want to Teach</h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">{user.want_to_teach.length} skills</span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.want_to_teach.length > 0 ? (
                user.want_to_teach.map((s, idx) => (
                  <span key={`teach-${s}-${idx}`} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No skills added.</span>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

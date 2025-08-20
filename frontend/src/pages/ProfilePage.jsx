import React from 'react';
import useAuthStore from '../store/useAuthStore';

const ProfilePage = () => {
  const { user } = useAuthStore();

  // Safe fallbacks
  const name = user?.name ?? 'User';
  const bio = user?.bio && user.bio.trim() ? user.bio : 'No bio';
  const profilePic = user?.profilePic || user?.profilPic || ''; // handle possible key typo
  const want_to_learn = Array.isArray(user?.want_to_learn) ? user.want_to_learn : [];
  const want_to_teach = Array.isArray(user?.want_to_teach) ? user.want_to_teach : [];

  const initials = name
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-2xl ring-1 ring-gray-100 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image / Initials */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-400 bg-gray-100 flex items-center justify-center">
            {profilePic ? (
              <img
                src={profilePic}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-semibold text-gray-700" aria-label={`${name} avatar`}>
                {initials}
              </span>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h1>
            <p className="text-gray-600 mt-2">{bio}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                Want to Learn
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Want to Teach
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gray-100" />

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Want to Learn */}
          <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Want to Learn</h2>
              <span className="text-xs text-gray-500">{want_to_learn.length} skills</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {want_to_learn.length > 0 ? (
                want_to_learn.map((s, idx) => (
                  <span
                    key={`learn-${s}-${idx}`}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No skills added.</span>
              )}
            </div>
          </section>

          {/* Want to Teach */}
          <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Want to Teach</h2>
              <span className="text-xs text-gray-500">{want_to_teach.length} skills</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {want_to_teach.length > 0 ? (
                want_to_teach.map((s, idx) => (
                  <span
                    key={`teach-${s}-${idx}`}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200"
                  >
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

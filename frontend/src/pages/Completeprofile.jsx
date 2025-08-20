import React from 'react'
import useAuthStore from '../store/useAuthStore'
function Completeprofile() {
 // eslint-disable-next-line no-unused-vars
 const {completprofile,loading,user}=useAuthStore();
     return (
    <div className="min-h-[60vh] flex items-start justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Complete your profile
        </h1>
        <p className="text-gray-600 mb-6">
          Add your skills and a short bio to proceed further.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="want_to_learn" className="block text-sm font-medium text-gray-800 mb-1">
              Skills to learn
            </label>
            <input
              id="want_to_learn"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. react, mongodb"
            />
            <p className="mt-1 text-xs text-gray-500">Example: react, mongodb</p>
          </div>

          <div>
            <label htmlFor="want_to_teach" className="block text-sm font-medium text-gray-800 mb-1">
              Skills to teach 
            </label>
            <input
              id="want_to_teach"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. html, javascript"
            />
            <p className="mt-1 text-xs text-gray-500">Example: html, javascript</p>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-800 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              maxLength={300}       
              className="w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell others about your interests and experience (max 300 chars)"
              defaultValue=""
            />
            <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
              <span>Max 300 characters</span>
            
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-[0.99] transition"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Completeprofile

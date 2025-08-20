// pages/Completeprofile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { toast } from 'react-toastify';


const toArray = (csv) =>
  csv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

function Completeprofile() {
  const navigate = useNavigate();
  const { completeProfile, loading } = useAuthStore();

  const [learnInput, setLearnInput] = useState("");
  const [teachInput, setTeachInput] = useState("");
  const [bio, setBio] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const want_to_learn = toArray(learnInput);
    const want_to_teach = toArray(teachInput);
    const bioClean = bio.trim();

    if (!bioClean || want_to_learn.length === 0 || want_to_teach.length === 0) {
     toast.error("Please fill bio and at least one skill in each list.");
      return;
    }

    const ok = await completeProfile({ want_to_learn, want_to_teach, bio: bioClean });
    if (ok) {
      navigate("/", { replace: true }); 
    }
  };

  return (
    <div className="min-h-[60vh] flex items-start justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Complete your profile
        </h1>
        <p className="text-gray-600 mb-6">
          Add your skills and a short bio to proceed further.
        </p>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <label htmlFor="want_to_learn" className="block text-sm font-medium text-gray-800 mb-1">
              Skills to learn (comma separated)
            </label>
            <input
              id="want_to_learn"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. react, mongodb"
              value={learnInput}
              onChange={(e) => setLearnInput(e.target.value)}
              disabled={loading}
            />
            <p className="mt-1 text-xs text-gray-500">Example: react, mongodb</p>
          </div>

          <div>
            <label htmlFor="want_to_teach" className="block text-sm font-medium text-gray-800 mb-1">
              Skills to teach (comma separated)
            </label>
            <input
              id="want_to_teach"
              type="text"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. html, javascript"
              value={teachInput}
              onChange={(e) => setTeachInput(e.target.value)}
              disabled={loading}
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
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={loading}
            />
            <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
              <span>Max 300 characters</span>
              <span>{bio.length}/300</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-[0.99] transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save & Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Completeprofile;

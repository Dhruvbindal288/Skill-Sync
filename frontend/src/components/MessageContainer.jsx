import React, { useRef, useEffect } from "react";
import useMessageStore from "../store/useMessageStore";

function MessageContainer() {
  const { messages, selectedUser } = useMessageStore();
  const safeMessages = messages || [];
  const scrollRef = useRef();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [safeMessages]);

  if (!selectedUser) return <p className="p-4 text-gray-500">Select a user to see messages</p>;

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="p-4 bg-indigo-500 text-white flex items-center gap-4 shadow-md">
        <img
          src={selectedUser.profilePic || "/default-avatar.png"}
          alt={selectedUser.name}
          className="w-10 h-10 rounded-full object-cover border border-white"
        />
        <h2 className="font-semibold">{selectedUser.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {safeMessages.length === 0 ? (
          <p className="text-gray-500">No messages yet</p>
        ) : (
          safeMessages.map((msg) => (
            <div
              key={msg._id}
              className={`p-2 rounded-lg max-w-xs break-words ${
                msg.senderId === selectedUser._id
                  ? "bg-white self-start"
                  : "bg-indigo-500 text-white self-end"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))
        )}
        <div ref={scrollRef}></div>
      </div>

      {/* Input */}
      <div className="flex p-4 bg-white border-t border-gray-300 gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full p-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageContainer;

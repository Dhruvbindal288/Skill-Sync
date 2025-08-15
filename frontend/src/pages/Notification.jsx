import React, { useEffect, useState } from 'react';
import useConnectionStore from '../store/useConnectionStore';

function Notification() {
  const { getAllRequest, respondToRequest } = useConnectionStore();
  const [requests, setRequest] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getAllRequest();
      setRequest(data);
    };
    fetchRequests();
  }, [getAllRequest]);

  return (
    <div className="h-screen bg-gray-100 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        All Notifications
      </h1>

      {requests.length > 0 ? (
        <div className="flex-1 overflow-y-auto max-w-3xl mx-auto space-y-4 w-full">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div className="text-center sm:text-left">
                <h1 className="text-lg font-semibold text-gray-700">
                  {req.senderId.name}
                </h1>
                <h1 className="text-sm text-gray-500">{req.status}</h1>
              </div>

              <div className="flex justify-center sm:justify-end gap-2">
                <button
                  onClick={() => respondToRequest(req._id, 'accept')}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto"
                >
                  Accept
                </button>
                <button
                  onClick={() => respondToRequest(req._id, 'reject')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 w-full sm:w-auto"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No request found</p>
      )}
    </div>
  );
}

export default Notification;

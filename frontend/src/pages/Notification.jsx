
import React, { useEffect, useState } from 'react';
import useConnectionStore from '../store/useConnectionStore';

function Notification() {
  const { getAllRequest,respondToRequest } = useConnectionStore();
  const [requests, setRequest] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getAllRequest();
      setRequest(data);
    };
    fetchRequests();
  }, [getAllRequest]);

  return (
    <div className='h-screen'>
      <h1>All Notifications</h1>
      {requests.length > 0 ? (
        <div>
          {requests.map((req) => (
            <div key={req._id}>
              <h1 className="text-center text-gray-500">{req.senderId.name}</h1>
              <h1 className="text-center text-gray-500">{req.status}</h1>
<button onClick={() => respondToRequest(req._id, 'accept')}>Accept</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No request found</p>
      )}
    </div>
  );
}

export default Notification;

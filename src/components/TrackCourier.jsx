import React, { useState } from 'react';

function TrackCourier({ user }) {
  // State for courier ID input
  const [courierId, setCourierId] = useState('');
  // State for tracking status
  const [status, setStatus] = useState('');
  // State for status type (for styling)
  const [statusType, setStatusType] = useState('');

  // Mock data simulating backend - object with courier IDs and their statuses
  const mockData = {
    '12345': 'In Transit (Air)',
    '67890': 'In Transit (Road)',
    '11111': 'In Transit (Sea)',
    '22222': 'In Transit (Air)',
  };

  // Function to check if string contains alphabets
  const hasAlphabets = (str) => /[a-zA-Z]/.test(str);

  // Handle track button click
  const handleTrack = () => {
    const id = courierId.trim();
    if (id === '') {
      setStatus('Please enter a Courier ID.');
      setStatusType('error');
      return;
    }

    if (hasAlphabets(id)) {
      // If ID contains alphabets, show Delivered
      setStatus('Delivered');
      setStatusType('delivered');
    } else if (mockData[id]) {
      // If numeric ID exists in mock data, show the transit status
      setStatus(mockData[id]);
      setStatusType('in-transit');
    } else {
      // Invalid ID
      setStatus('Invalid Courier ID. Please check and try again.');
      setStatusType('error');
    }
  };

  return (
    <div className="card">
      <h2>Welcome, {user}!</h2>
      <p>Track your courier by entering the Courier ID below.</p>
      <div className="form-group">
        <label htmlFor="courierId">Courier ID:</label>
        <input
          type="text"
          id="courierId"
          value={courierId}
          onChange={(e) => setCourierId(e.target.value)}
          placeholder="Enter Courier ID (e.g., ABC123 or 12345)"
        />
      </div>
      <button onClick={handleTrack}>Track Courier</button>
      {status && (
        <div className={`status ${statusType}`}>
          {status}
        </div>
      )}
    </div>
  );
}

export default TrackCourier;
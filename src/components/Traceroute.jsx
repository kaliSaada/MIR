import React, { useState } from 'react';

export default function Traceroute() {
  const [route, setRoute] = useState([]);

  const runTraceroute = () => {
    // Placeholder for traceroute
    setRoute(['192.168.0.1', '10.0.0.1', '8.8.8.8']);
  };

  return (
    <div>
      <h2>Traceroute</h2>
      <button onClick={runTraceroute}>Run Traceroute</button>
      {route.length > 0 && (
        <ol>
          {route.map((hop, idx) => (
            <li key={idx}>{hop}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

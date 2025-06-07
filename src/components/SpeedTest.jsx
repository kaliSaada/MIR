import React, { useState } from 'react';

export default function SpeedTest() {
  const [results, setResults] = useState(null);

  const runTest = () => {
    // Placeholder logic for speed test
    // Ideally you'd integrate with a speed test API
    setResults({ download: 50, upload: 10, ping: 20 });
  };

  return (
    <div>
      <h2>Speed Test</h2>
      <button onClick={runTest}>Run Test</button>
      {results && (
        <ul>
          <li>Download: {results.download} Mbps</li>
          <li>Upload: {results.upload} Mbps</li>
          <li>Ping: {results.ping} ms</li>
        </ul>
      )}
    </div>
  );
}

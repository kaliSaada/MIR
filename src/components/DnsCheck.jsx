import React, { useState } from 'react';

export default function DnsCheck() {
  const [records, setRecords] = useState([]);

  const runDnsCheck = () => {
    // Placeholder for DNS check
    setRecords([
      { provider: 'Google', ip: '8.8.8.8' },
      { provider: 'Cloudflare', ip: '1.1.1.1' },
      { provider: 'OpenDNS', ip: '208.67.222.222' }
    ]);
  };

  return (
    <div>
      <h2>DNS Check</h2>
      <button onClick={runDnsCheck}>Run DNS Check</button>
      {records.length > 0 && (
        <ul>
          {records.map((r, idx) => (
            <li key={idx}>{r.provider}: {r.ip}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

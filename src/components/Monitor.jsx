import React, { useState, useCallback } from 'react';
import useScheduler from '../hooks/useScheduler';
import { saveResult } from '../services/storage';

export default function Monitor() {
  const [data, setData] = useState([]);

  const runTests = useCallback(() => {
    // placeholder test values
    const result = { timestamp: Date.now(), speed: Math.random() * 100 };
    setData(d => [...d, result.speed]);
    saveResult('speed', result);
  }, []);

  useScheduler(runTests, 300000);

  return (
    <div>
      <h2>Monitoring</h2>
      <p>Running every 5 minutes...</p>
    </div>
  );
}

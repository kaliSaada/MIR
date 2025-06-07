import React, { useState } from 'react';
import SpeedTest from '../components/SpeedTest';
import Traceroute from '../components/Traceroute';
import DnsCheck from '../components/DnsCheck';
import Monitor from '../components/Monitor';
import ChartDisplay from '../components/ChartDisplay';
import { getResults } from '../services/storage';

export default function Dashboard() {
  const [chartData, setChartData] = useState(() => {
    return getResults('speed').map(r => r.speed);
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <Monitor />
      <ChartDisplay data={chartData} />
      <SpeedTest />
      <Traceroute />
      <DnsCheck />
    </div>
  );
}

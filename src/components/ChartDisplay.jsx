import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function ChartDisplay({ data }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: data.map((_, i) => i + 1),
        datasets: [
          {
            label: 'Speed',
            data,
            borderColor: 'blue'
          }
        ]
      }
    });
  }, [data]);

  return <canvas ref={canvasRef} />;
}

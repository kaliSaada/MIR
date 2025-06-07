# MIR - My Internet Reports

This project is a proof-of-concept React application built with Vite. It aims to monitor internet connection metrics such as speed, traceroute, and DNS information, and generate reports with charts and PDF export.

## Features

- Manual and scheduled tests (every 5 minutes by default)
- Speed test, traceroute, and DNS check components
- Results persisted in `localStorage` with export to JSON
- Simple charting using Chart.js
- PDF report generation via jsPDF (placeholder)

## Development

```bash
npm install # install dependencies (requires internet)
npm run dev  # start development server
```

Note: Installing dependencies requires network access which may not be available in all environments.

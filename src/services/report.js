import jsPDF from 'jspdf';

export function generatePdf(data) {
  const doc = new jsPDF();
  doc.text('My Internet Reports', 10, 10);
  doc.text(JSON.stringify(data, null, 2), 10, 20);
  doc.save('report.pdf');
}

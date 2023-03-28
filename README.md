const XLSX = require('xlsx');

function downloadExcelFile(filename, headers, data) {
  // Create a new workbook and sheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data, { header: headers.map(h => h.key) });

  // Add the sheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws);

  // Generate a binary string from the workbook
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  // Convert the binary string to a Blob object
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

  // Prompt the user to download the file
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }
  return buf;
}

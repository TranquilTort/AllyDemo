```
function downloadExcelFile(filename: string, headers: { key: string }[], data: object[]) {
  // Create a new workbook and sheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data, { header: headers.map(h => h.key) });

  // Add the sheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws);

  // Set column widths based on the length of the header and data values
  const columnWidths = headers.map((header, index) => {
    const dataWidths = data.map(row => String(row[header.key]).length);
    const headerWidth = header.key.length;
    return Math.max(...dataWidths, headerWidth) + 2;
  });
  XLSX.utils.sheet_set_column_widths(ws, columnWidths);

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


```

const XLSX = require('xlsx');
const { saveAs } = require('file-saver'); // required for downloading file in browser

function downloadExcelFile(filename, headers, data) {
  const worksheet = XLSX.utils.json_to_sheet(data, { header: headers.map(h => h.key) });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${filename}.xlsx`);
}

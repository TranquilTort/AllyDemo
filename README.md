```
function sheet_set_column_width(worksheet: XLSX.WorkSheet, column: number, width: number) {
  const colRef = XLSX.utils.encode_col(column);
  const range = { s: { c: column, r: 0 }, e: { c: column, r: worksheet['!ref'].e.r } };
  const columnWidth = XLSX.utils.pixel_width_to_char_width(width);
  worksheet['!cols'] = worksheet['!cols'] || [];
  worksheet['!cols'][column] = { width: columnWidth };
  worksheet['!ref'] = XLSX.utils.encode_range(range);
}


function downloadExcelFile(filename: string, headers: { key: string }[], data: any[]) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const headerKeys = headers.map(header => header.key);
  XLSX.utils.sheet_add_aoa(worksheet, [headerKeys], { origin: 'A1' });
  const columnWidths = headerKeys.map(header => {
    const columnData = data.map(row => row[header]);
    const columnDataWidth = columnData.reduce((acc, value) => Math.max(acc, value ? value.toString().length : 0), header.length);
    return Math.min(100, Math.max(columnDataWidth + 2, header.length + 2)) * 1.1;
  });
  for (let i = 0; i < columnWidths.length; i++) {
    sheet_set_column_width(worksheet, i, columnWidths[i]);
  }
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  function s2ab(s: string) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
}



```

```
  const headerStyle = XLSXStyle.utils.book_new().SS[0];
  headerStyle.fill = {
    bgColor: { indexed: 44 },
    fgColor: { indexed: 44 },
    patternType: 'solid'
  };
  for (let i = 0; i < headerKeys.length; i++) {
    const cell = XLSX.utils.encode_cell({ c: i, r: 0 });
    worksheet[cell].s = headerStyle;
  }


```

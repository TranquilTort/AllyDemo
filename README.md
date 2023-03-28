# AllyDemo

declare module 'react-data-export' {
  import { ReactNode } from 'react';

  interface Column {
    label: string;
    value: string;
  }

  interface Sheet {
    data: Array<Record<string, any>>;
    name?: string;
    columns?: Array<Column>;
  }

  interface ExcelFileProps {
    filename?: string;
    element?: ReactNode;
  }

  interface ExcelSheetProps extends Sheet {
    children: ReactNode;
  }

  interface ExcelColumnProps extends Column {}

  export class ExcelFile extends React.Component<ExcelFileProps> {
    static downloadExcel(data: { sheets: Array<Sheet> }, filename?: string): void;
  }

  export class ExcelSheet extends React.Component<ExcelSheetProps> {}

  export class ExcelColumn extends React.Component<ExcelColumnProps> {}
}

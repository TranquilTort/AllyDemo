declare module 'react-data-export' {
  import { ReactNode } from 'react';

  export class ExcelFile extends React.Component<{
    filename?: string;
    element?: ReactNode;
  }> {}

  export class ExcelSheet extends React.Component<{
    data: Array<Record<string, any>>;
    name?: string;
    children: ReactNode;
    columns?: Array<{
      label: string;
      value: string;
    }>;
  }> {}

  export class ExcelColumn extends React.Component<{
    label: string;
    value: string;
  }> {}
}

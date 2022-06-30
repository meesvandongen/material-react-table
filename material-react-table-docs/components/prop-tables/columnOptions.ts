import { MRT_ColumnDef } from 'material-react-table';

export type ColumnOption = {
  columnOption: keyof MRT_ColumnDef;
  defaultValue?: string;
  description?: string;
  link?: string;
  linkText?: string;
  required?: boolean;
  source?: 'MRT' | 'TanStack Table' | 'Material UI' | '';
  type?: string;
};

export const columnOptions: ColumnOption[] = [
  {
    columnOption: 'AggregatedCell',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping#aggregatedcell',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    required: false,
    type: 'ReactNode | (({ cell, instance }) => ReactNode)',
  },
  {
    columnOption: 'Cell',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ cell, instance }) => ReactNode)',
  },
  {
    columnOption: 'Edit',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ cell, instance }) => ReactNode)',
  },
  {
    columnOption: 'Filter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ header, instance }) => ReactNode)',
  },
  {
    columnOption: 'Footer',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ footer, instance }) => ReactNode)',
  },
  {
    columnOption: 'Header',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ header, instance }) => ReactNode)',
  },
  {
    columnOption: 'accessorFn',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#accessorfn',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: false,
    type: '(row: D) => any',
  },
  {
    columnOption: 'accessorKey',
    defaultValue: '',
    description:
      'If provided, the accessorKey will be used to point to which key in the data object should be used to access the data in this column.',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#accessorfn',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: false,
    type: 'string & keyof D',
  },
  {
    columnOption: 'aggregationFn',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping#aggregationfn-1',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    required: false,
    type: '',
  },
  {
    columnOption: 'columns',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<MRT_ColumnDef<D>>',
  },
  {
    columnOption: 'enableClickToCopy',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilterChangeMode',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnOrdering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableEditing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGlobalFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGrouping',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableHiding',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableMultiSort',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enablePinning',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableResizing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableSorting',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'filterFn',
    defaultValue: 'fuzzy',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'MRT_FilterFn',
  },
  {
    columnOption: 'filterSelectOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<{ text: string; value: string }>',
  },
  {
    columnOption: 'header',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#header',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: true,
    type: 'string',
  },
  {
    columnOption: 'id',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#id',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: true,
    type: 'string',
  },
  {
    columnOption: 'invertSorting',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'maxSize',
    defaultValue: '1000',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'meta',
    defaultValue: '{}',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'any',
  },
  {
    columnOption: 'minSize',
    defaultValue: '30',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'muiTableBodyCellCopyButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'ButtonProps | ({ instance, cell }) => ButtonProps',
  },
  {
    columnOption: 'muiTableBodyCellEditTextFieldProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'TextFieldProps | ({ instance, cell }) => TextFieldProps',
  },
  {
    columnOption: 'muiTableBodyCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'TableCellProps | ({ instance, cell }) => TableCellProps',
  },
  {
    columnOption: 'muiTableFooterCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'TableCellProps | ({ instance, column }) => TableCellProps',
  },
  {
    columnOption: 'muiTableHeadCellColumnActionsButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'IconButtonProps | ({ instance, column }) => IconButtonProps',
  },
  {
    columnOption: 'muiTableHeadCellFilterTextFieldProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'TextFieldProps | ({ instance, column }) => TextFieldProps',
  },
  {
    columnOption: 'muiTableHeadCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'Material UI',
    required: false,
    type: 'TextFieldProps | ({ instance, column }) => TextFieldProps',
  },
  {
    columnOption: 'onCellEditBlur',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, event, instance }) => void',
  },
  {
    columnOption: 'onCellEditChanged',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, event, instance }) => void',
  },
  {
    columnOption: 'onColumnFilterValueChanged',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ column, event, filterValue, instance }) => void',
  },
  {
    columnOption: 'onColumnFilterValueChangedDebounced',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ column, event, filterValue, instance }) => void',
  },
  {
    columnOption: 'size',
    defaultValue: '180',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'sortDescFirst',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'sortingFn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'SortingFnOption',
  },
  {
    columnOption: 'sortUndefined',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'false | 1 | -1',
  },
];
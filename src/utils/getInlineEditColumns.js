import {
  ChartBubble16,
  ChartColumnFloating16,
  ChartVennDiagram16,
} from '@carbon/icons-react';

export const inlineEditSelectItems = [
  {
    id: 'option-0',
    icon: ChartColumnFloating16,
    text: 'Column Chart',
  },
  {
    id: 'option-1',
    icon: ChartBubble16,
    text: 'Bubble Chart',
  },
  {
    id: 'option-2',
    icon: ChartVennDiagram16,
    text: 'Venn Diagram',
  },
];

export const getInlineEditColumns = () => {
  return [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      id: 'rowIndex', // id is required when accessor is a function.
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
      inlineEdit: {
        type: 'text',
        // required for including validation, this is used to set the invalid prop internally
        validator: (n) => n.length >= 40,
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid text, character count must be less than 40',
        },
      },
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
      inlineEdit: {
        type: 'text',
        // required for including validation, this is used to set the invalid prop internally
        validator: (n) => n.length >= 40,
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid text, character count must be less than 40',
        },
      },
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 120,
      inlineEdit: {
        // required for including validation, this is used to set the invalid prop internally
        validator: (n) => n && n < 18,
        type: 'number',
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid number, must be 18 or greater',
        },
      },
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      width: 120,
      inlineEdit: {
        type: 'number',
        inputProps: {}, // These props are passed to the Carbon component used for inline editing
      },
    },
    {
      Header: 'Active since',
      accessor: 'activeSince',
      inlineEdit: {
        type: 'date',
        inputProps: {
          // optionally pass props here to be passed through to Carbon's DatePicker component
          onChange: (newDateObj, cell) => {
            console.log(newDateObj, cell);
          },
          labelText: 'Change active since date',
          // optionally pass props here to be passed through to Carbon's DatePickerInput component
          datePickerInputProps: {
            labelText: 'Change active since date',
          },
        },
      },
    },
    {
      Header: 'Chart type',
      accessor: 'chartType',
      inlineEdit: {
        type: 'selection',
        inputProps: {
          // These props are passed to the Carbon component used for inline editing
          items: inlineEditSelectItems,
          onChange: (item) => {
            console.log(item);
          },
        },
      },
    },
    {
      Header: 'Someone 2',
      accessor: 'someone2',
    },
    {
      Header: 'Someone 3',
      accessor: 'someone3',
    },
    {
      Header: 'Someone 4',
      accessor: 'someone4',
    },
    {
      Header: 'Someone 5',
      accessor: 'someone5',
    },
    {
      Header: 'Someone 6',
      accessor: 'someone6',
    },
    {
      Header: 'Someone 7',
      accessor: 'someone7',
    },
    {
      Header: 'Someone 8',
      accessor: 'someone8',
    },
    {
      Header: 'Someone 9',
      accessor: 'someone9',
    },
    {
      Header: 'Someone 10',
      accessor: 'someone10',
    },
  ];
};

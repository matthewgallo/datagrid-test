import React, { useState, useEffect } from 'react';
import { Datagrid, useDatagrid, useCustomizeColumns, useColumnOrder } from '@carbon/ibm-products';
import PageWrapper from './PageWrapper';
import { DatagridActions } from './utils/DatagridActions';

const defaultHeader = [
  {
    Header: 'Post id',
    accessor: 'postId'
  },
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({cell: {value}}) => <span className="custom-cell-wrapper">{value}</span>
  },
  {
    Header: 'Comment body',
    accessor: 'body',
  }
];

export const CustomizeColumnsExample = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchCommentsJSON() {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();
      return comments;
    }
    fetchCommentsJSON().then(comments => {
      setCommentData(comments);
      setLoading(false);
    });
  }, []);
  const datagridState = useDatagrid(
    {
      emptyStateTitle: 'Empty state title',
      emptyStateDescription: 'Empty state description',
      columns,
      className: `c4p--datagrid__hidden--columns`,
      data: commentData,
      initialState: {
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      isFetching: loading,
      customizeColumnsProps: {
        onSaveColumnPrefs: (newColDefs) => {
          console.log(newColDefs);
        },
        labels: {
          findColumnPlaceholderLabel: 'Find column',
          resetToDefaultLabel: 'Reset to default',
          customizeModalHeadingLabel: 'Customize display',
          primaryButtonTextLabel: 'Save',
          secondaryButtonTextLabel: 'Cancel',
          instructionsLabel:
            'Deselect columns to hide them. Click and drag the white box to reorder the columns. These specifications will be saved and persist if you leave and return to the data table.',
          iconTooltipLabel: 'Customize columns',
          assistiveTextInstructionsLabel:
            'Press space bar to toggle drag drop mode, use arrow keys to move selected elements.',
          assistiveTextDisabledInstructionsLabel:
            'Reordering columns are disabled because they are filtered currently.',
          selectAllLabel: 'Column name',
        },
      },
      DatagridActions,
    },
    useCustomizeColumns,
    useColumnOrder
  );
  return (
    <PageWrapper>
      <Datagrid datagridState={datagridState} />
    </PageWrapper>
  )
};

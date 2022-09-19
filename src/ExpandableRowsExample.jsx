import React, { useState, useEffect } from 'react';
import { Datagrid, useDatagrid, useExpandedRow } from '@carbon/ibm-products';
import PageWrapper from "./PageWrapper"
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

export const ExpandableRowsExample = () => {
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
  const expansionRenderer = ({ row }) => {
    console.log(row);
    return <div>Content for row index: {row.id}</div>;
  };
  const datagridState = useDatagrid(
    {
      emptyStateTitle: 'Empty state title',
      emptyStateDescription: 'Empty state description',
      columns,
      className: `c4p--datagrid__hidden--columns`,
      data: commentData,
      DatagridActions,
      ExpandedRowContentComponent: expansionRenderer,
      expandedContentHeight: 96,
      isFetching: loading,
    },
    useExpandedRow
  );
  return <PageWrapper>
    <Datagrid datagridState={datagridState} />
  </PageWrapper>
}
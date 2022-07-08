import React, { useState, useEffect } from 'react'
import { Datagrid, useDatagrid } from '@carbon/ibm-products';
import { Pagination } from 'carbon-components-react';
import './App.css';
import { useTestHook } from './hooks/useTestHook';

const DatagridPagination = ({ state, setPageSize, gotoPage, rows }) => {
  const updatePagination = ({ page, pageSize }) => {
    console.log(state);
    setPageSize(pageSize);
    gotoPage(page - 1); // Carbon is non-zero-based
  };

  return (
    <Pagination
      page={state.pageIndex + 1} // react-table is zero-based
      pageSize={state.pageSize}
      pageSizes={state.pageSizes || [10, 20, 30, 40, 50]}
      totalItems={rows.length}
      onChange={updatePagination}
    />
  );
};

function App() {

  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  useTestHook();
  useEffect(() => {
    async function fetchCommentsJSON() {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();
      return comments;
    }
    fetchCommentsJSON().then(comments => {
      console.log(comments);
      setCommentData(comments);
      setLoading(false);
    });
  }, []);

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
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Comment body',
      accessor: 'body',
    }
  ];

  const columns = React.useMemo(() => defaultHeader, []);
  const emptyStateTitle = 'Empty state title';
  const emptyStateDescription =
    'Description text explaining why this card is empty.';
  const datagridState = useDatagrid({
    columns,
    data: commentData,
    emptyStateTitle,
    emptyStateDescription,
    isFetching: loading,
    DatagridPagination,
    initialState: {
      pageSize: 10,
      pageSizes: [5, 10, 25, 50],
    },
  });

  return (
    <div className="App">
      <Datagrid datagridState={{ ...datagridState }} />
    </div>
  )
}

export default App

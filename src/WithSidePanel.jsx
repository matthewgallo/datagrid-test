import React, { useState, useEffect } from 'react'
import { Datagrid, useDatagrid, useOnRowClick, SidePanel } from '@carbon/ibm-products';
import { Pagination } from 'carbon-components-react';
import './App.scss';
import PageWrapper from './PageWrapper';

const DatagridPagination = ({ state, setPageSize, gotoPage, rows }) => {
  const updatePagination = ({ page, pageSize }) => {
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

function App({ slideIn }) {

  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [activeRowData, setActiveRowData] = useState(null);
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
  const datagridState = useDatagrid(
    {
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
      onRowClick: (row) => {
        setSidePanelOpen(true);
        setActiveRowData(row);
      },
    },
    useOnRowClick
  );

  return (
    <PageWrapper className="page-content-wrapper-test-class">
      <Datagrid datagridState={{ ...datagridState }} />
      <SidePanel
        selectorPageContent={slideIn && '.page-content-wrapper-test-class'}
        slideIn={slideIn}
        includeOverlay={!slideIn}
        open={sidePanelOpen}
        onRequestClose={() => {
          setSidePanelOpen(false)
          setActiveRowData(null);
        }}
        actions={[
          {
            label: 'Submit',
            onClick: () => {
              setSidePanelOpen(false);
              setActiveRowData(null);
            },
            kind: 'primary',
          },
          {
            label: 'Cancel',
            onClick: () => {
              setSidePanelOpen(false);
              setActiveRowData(null);
            },
            kind: 'secondary',
          },
        ]}
        title={activeRowData?.original?.email}
        subtitle={activeRowData?.original?.name}
      >
        {activeRowData?.original?.body || 'default content'}
      </SidePanel>
    </PageWrapper>
  )
}

export default App

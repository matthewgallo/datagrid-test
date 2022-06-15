import React, { useState } from 'react'
import { Datagrid, useDatagrid } from '@carbon/ibm-products';
import { generateData } from './utils/generateData';
import './App.css'

function App() {

  const defaultHeader = [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      sticky: 'left',
      id: 'rowIndex', // id is required when accessor is a function.
    },
    {
      Header: 'Pet type',
      accessor: 'petType',
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
      sticky: 'left',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
    {
      Header: 'Vet Visits',
      accessor: 'visits',
      width: 60,
    },
    {
      Header: 'Health',
      accessor: 'health',
      Cell: ({cell: {value}}) => <span className="custom-cell-wrapper">{value}</span>
    },
  ];

  const columns = React.useMemo(() => defaultHeader, []);
  const [data, setData] = useState(() => generateData({ rows: 16 }));
  const datagridState = useDatagrid({
    columns,
    data,
  });

  return (
    <div className="App">
      <Datagrid datagridState={{ ...datagridState }} />
    </div>
  )
}

export default App

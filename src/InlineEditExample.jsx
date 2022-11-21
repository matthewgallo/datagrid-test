import React, { useState } from 'react';
import { Edit16, TrashCan16 } from '@carbon/icons-react';
import { Datagrid, useDatagrid, useInlineEdit } from '@carbon/ibm-products';
import { getInlineEditColumns } from './utils/getInlineEditColumns';
import { makeData } from './utils/makeData';
import PageWrapper from './PageWrapper';

const sharedDatagridProps = {
  emptyStateTitle: 'Empty state title',
  emptyStateDescription: 'Description text explaining why table is empty',
  emptyStateSize: 'lg',
  gridTitle: 'Data table title',
  gridDescription: 'Additional information if needed',
  useDenseHeader: false,
  rowSize: 'lg',
  rowSizes: [
    {
      value: 'xl',
      labelText: 'Extra large',
    },
    {
      value: 'lg',
      labelText: 'Large',
    },
    {
      value: 'md',
      labelText: 'Medium',
    },
    {
      value: 'xs',
      labelText: 'Small',
    },
  ],
  onRowSizeChange: (value) => {
    console.log('row size changed to: ', value);
  },
  rowActions: [
    {
      id: 'edit',
      itemText: 'Edit',
      icon: Edit16,
      onClick: () => console.log('Clicked row action: edit'),
    },

    {
      id: 'delete',
      itemText: 'Delete',
      icon: TrashCan16,
      isDelete: true,
      onClick: () => console.log('Clicked row action: delete'),
    },
  ],
};

export const InlineEditExample = () => {
  const [data, setData] = useState(makeData(10));
  const columns = React.useMemo(() => getInlineEditColumns(), []);

  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
      ...sharedDatagridProps
    },
    useInlineEdit
  );

  return <PageWrapper>
      <Datagrid datagridState={datagridState} />
    </PageWrapper>;
}

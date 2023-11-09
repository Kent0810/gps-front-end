import { EuiTab } from '@elastic/eui';
import { useTitle } from 'ahooks';
import { useState } from 'react';
import Header from '../../../components/header/Header';

function CameraDashboard() {
  useTitle('ALSS - Camera Dashboard', {
    restoreOnUnmount: true,
  });

  const breadcrumbs = [
    {
      text: 'Streams',
      href: '',
    },
    {
      text: 'Cameras',
      href: '/streams/cameras',
    },
  ];

  const [selectTabId, setSelectedTabId] = useState(1);

  const tabs = [
    renderTab(1, () => {}, 'List'),
    renderTab(2, () => {}, 'Statistics'),
    renderTab(3, () => {}, 'Settings'),
  ];

  function renderTab(id, onClick, title, data = {}) {
    return (
      <EuiTab
        key={id}
        onClick={() => {
          setSelectedTabId(id);
          onClick();
        }}
        isSelected={selectTabId === id}
        {...data}
      >
        {title}
      </EuiTab>
    );
  }

  return (
    <>
      <Header
        breadcrumps={breadcrumbs}
        title='Camera'
        rightSideItems={[]}
        description={'Register and manage credentials of connected cameras'}
        tabs={tabs}
      />
      
    </>
  );
}

export default CameraDashboard;

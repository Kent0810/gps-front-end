import { EuiTab } from '@elastic/eui';
import { useTitle } from 'ahooks';
import { useState } from 'react';
import Header from '../../../components/header/Header';

function StreamDashboard() {
  useTitle('ALSS - Stream Dashboard', {
    restoreOnUnmount: true,
  });

  const breadcrumbs = [
    {
      text: 'Streams',
      href: '',
    },
    {
      text: 'Discover',
      href: '/streams/discover',
    },
  ];

  const [selectTabId, setSelectedTabId] = useState(1);

  const tabs = [
    renderTab(1, () => {}, 'Live'),
    renderTab(2, () => {}, 'Recordings'),
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
    <div>
      <Header
        breadcrumps={breadcrumbs}
        title='Discover'
        rightSideItems={[]}
        description={'All currently active camera streams, all in one place'}
        tabs={tabs}
      ></Header>
    </div>
  );
}

export default StreamDashboard;

import { EuiFlexGrid, EuiFlexItem, EuiTab } from '@elastic/eui';
import { useTitle } from 'ahooks';
import { useState } from 'react';
import Header from '../../../components/header/Header';
import StreamCard from '../../../components/stream_card/StreamCard';

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
      <EuiFlexGrid columns={4} responsive>
        <EuiFlexItem grow={false}>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'SRT',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'SRT',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'RTMP',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'SRT',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'SRT',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <StreamCard
            onClick={(id, streamUrl, cameraId) => {
              console.log(id, streamUrl, cameraId);
              
            }}
            data={{
              id: '0001',
              streamUrl: 'https://streams.alss.tech',
              info: {
                location: 'Living Room',
                description: 'Living room camera for observating kids',
                manufacturer: 'HKVision',
              },
              cameraId: '0001',
              started: new Date().toISOString(),
              protocol: 'RTMP',
              thumbnailUrl:
                'https://via.placeholder.com/1920x1080/eee?text=16:9',
              ip: '192.168.10.200',
            }}
          />
        </EuiFlexItem>
      </EuiFlexGrid>
    </div>
  );
}

export default StreamDashboard;

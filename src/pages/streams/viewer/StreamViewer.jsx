import { useTitle } from 'ahooks';
import { useParams } from 'react-router-dom';

function StreamViewer() {
  useTitle('ALSS - Stream', {
    restoreOnUnmount: true,
  });
  const params = useParams();
  return <div>Stream Viewer: {params.streamId}</div>;
}

export default StreamViewer;

import { EuiHorizontalRule } from '@elastic/eui';
import { useTitle } from 'ahooks';
import Header from '../../components/header/Header';

function Dashboard() {
  useTitle('ALSS - Portal', {
    restoreOnUnmount: true,
  });

  const breadcrumbs = [
    {
      text: 'Dashboard',
      href: '',
    },
    {
      text: 'Home',
      href: '/',
    },
  ];

  return (
    <div>
      <Header
        breadcrumps={breadcrumbs}
        title='Home'
        rightSideItems={[]}
        description={''}
      />
      <EuiHorizontalRule size='full' />
    </div>
  );
}

export default Dashboard;

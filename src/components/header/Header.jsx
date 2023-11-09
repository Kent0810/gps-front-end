/* eslint-disable react/prop-types */
import {
  EuiBreadcrumbs,
  EuiPageHeader,
  EuiSpacer,
  EuiTabs,
} from '@elastic/eui';

function Header({ breadcrumps, title, rightSideItems, description, tabs }) {
  return (
    <section>
      <EuiBreadcrumbs breadcrumbs={breadcrumps} max={4} truncate />
      <EuiSpacer size='xs' />
      <EuiPageHeader
        pageTitle={title}
        rightSideItems={rightSideItems}
        description={description}
      />
      <EuiSpacer size='xs' />
      {tabs != undefined && tabs.length > 0 && (
        <EuiTabs bottomBorder style={{ marginBottom: '24px' }} size='l'>
          {tabs}
        </EuiTabs>
      )}
    </section>
  );
}

export default Header;

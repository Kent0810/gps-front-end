import {
  EuiAvatar,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPageBody,
  EuiPageSection,
  EuiPageTemplate,
  EuiSideNav,
  htmlIdGenerator,
} from '@elastic/eui';
import { Outlet, useLocation } from 'react-router-dom';

import { appendIconComponentCache } from '@elastic/eui/es/components/icon/icon';

import { icon as EuiIconApmTrace } from '@elastic/eui/es/components/icon/assets/apm_trace';
import { icon as EuiIconArrowDown } from '@elastic/eui/es/components/icon/assets/arrow_down';
import { icon as EuiIconArrowLeft } from '@elastic/eui/es/components/icon/assets/arrow_left';
import { icon as EuiIconControlsHorizontal } from '@elastic/eui/es/components/icon/assets/controls_horizontal';
import { icon as EuiIconDocuments } from '@elastic/eui/es/components/icon/assets/documents';
import { icon as EuiIconInputOutput } from '@elastic/eui/es/components/icon/assets/inputOutput';
import { icon as EuiIconMenu } from '@elastic/eui/es/components/icon/assets/menu';
import { icon as EuiIconSortRight } from '@elastic/eui/es/components/icon/assets/sortRight';
import { icon as EuiIconTimeline } from '@elastic/eui/es/components/icon/assets/timeline';
import { icon as EuiIconVideoPlayer } from '@elastic/eui/es/components/icon/assets/videoPlayer';
import { icon as EuiIconVisarea } from '@elastic/eui/es/components/icon/assets/vis_area';

import { useState } from 'react';

appendIconComponentCache({
  arrowDown: EuiIconArrowDown,
  arrowLeft: EuiIconArrowLeft,
  documents: EuiIconDocuments,
  menu: EuiIconMenu,
  visArea: EuiIconVisarea,
  videoPlayer: EuiIconVideoPlayer,
  timeline: EuiIconTimeline,
  controlsHorizontal: EuiIconControlsHorizontal,
  apmTrace: EuiIconApmTrace,
  inputOutput: EuiIconInputOutput,
  sortRight: EuiIconSortRight,
});

function RootLayout() {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);

  const location = useLocation();

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  function createNavigation(name, path, items, data = {}) {
    return {
      id: htmlIdGenerator(name)(),
      name,
      href: path,
      isSelected: path == location.pathname,
      items,
      ...data,
    };
  }

  const sideNav = [
    createNavigation('Dashboard', '', [createNavigation('Home', '/', [])], {
      icon: <EuiIcon type={'visArea'} />,
    }),
    createNavigation(
      'Streams',
      '',
      [
        createNavigation('Discover', '/streams', []),
        createNavigation('Cameras', '/streams/cameras', []),
      ],
      { icon: <EuiIcon type={'inputOutput'} /> }
    ),
    createNavigation(
      'Detection',
      '',
      [
        createNavigation('People', '/detection/people', []),
        createNavigation('Objects', '/detection/objects', []),
        createNavigation('Events', '/detection/events', []),
      ],
      { icon: <EuiIcon type={'apmTrace'} /> }
    ),
    createNavigation(
      'Configuration',
      '',
      [createNavigation('Endpoints', '/configure/endpoints', [])],
      {
        icon: <EuiIcon type={'controlsHorizontal'} />,
      }
    ),
  ];

  return (
    <>
      <EuiHeader theme='dark' position='fixed'>
        <EuiHeaderSectionItem>
          <EuiHeaderLogo iconType='/logo.png' iconTitle='ALSS'>
            ALSS
          </EuiHeaderLogo>
          <EuiHeaderLink href='https://github.com/CE-Thesis-2023'>
            Code
          </EuiHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiHeaderSectionItemButton>
            <EuiAvatar name='User' size='s' color='#95F8F7'></EuiAvatar>
          </EuiHeaderSectionItemButton>
        </EuiHeaderSectionItem>
      </EuiHeader>
      <EuiPageTemplate panelled>
        <EuiPageTemplate.Sidebar sticky>
          <EuiSideNav
            aria-label='Menu'
            mobileTitle='Menu'
            toggleOpenOnMobile={() => toggleOpenOnMobile()}
            isOpenOnMobile={isSideNavOpenOnMobile}
            style={{ width: 192 }}
            items={sideNav}
          />
        </EuiPageTemplate.Sidebar>
        <main>
          <EuiPageBody>
            <EuiPageSection>
              <Outlet />
            </EuiPageSection>
          </EuiPageBody>
        </main>
      </EuiPageTemplate>
    </>
  );
}

export default RootLayout;

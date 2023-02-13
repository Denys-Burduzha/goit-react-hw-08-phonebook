

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layout_container}>
      <div className={css.layout_header}>
        <Navigation />
      </div>
      <div className={css.layout_main}>
        <Suspense fallback={null}>
          
          <Outlet />
        </Suspense>
      </div>
      

    </div>
  );
};

export default Layout
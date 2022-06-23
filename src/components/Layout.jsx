import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout(props) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">{props.children}</div>
      </div>
    </>
  );
}

export default Layout;

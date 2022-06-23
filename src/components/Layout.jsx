import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header />

      <div className="w-full">{props.children}</div>
    </>
  );
}

export default Layout;

import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <div className="w-full h-screen bg-slate-100">
      <Header />

      <div className="w-full ">{props.children}</div>
    </div>
  );
}

export default Layout;

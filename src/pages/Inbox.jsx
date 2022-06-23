import React from 'react';

import Form from 'react-bootstrap/Form';
import Formulir from '../components/Formulir';
import Layout from '../components/Layout';
import Tabel from '../components/Tabel';

const Inbox = () => {
  return (
    <Layout>
      <div className="m-10">
        <Formulir />
        <Tabel />
      </div>
    </Layout>
  );
};

export default Inbox;

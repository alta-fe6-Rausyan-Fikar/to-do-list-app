import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Col } from 'react-bootstrap';

const Tabel = () => {
  return (
    <Col md={6} lg={12} sm={12}>
      <div className="mx-10">
        <Table className="">
          <thead className="">
            <tr className="">
              <th>#</th>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary" type="submit">
                  Complete
                </Button>
                <Button className="ml-3" variant="danger" type="submit">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default Tabel;

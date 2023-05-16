import React, { Component } from 'react'
import { Badge, Col, ListGroup, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/Utils';
import TotalBayar from './TotalBayar';

export default class RightBar extends Component {
  render() {
    const { keranjangs } = this.props
    return (
      <Col md={3} mt="2">
        <h5> <strong>Hasil</strong> </h5>
        <hr />
        {keranjangs.length !== 0 &&
          <ListGroup>
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item>
                <Row>
                  <Col xs={2}>
                  <Badge bg="success">
                    {menuKeranjang.jumlah}
                  </Badge>
                  </Col>
                  <Col>
                  <h5>
                  {menuKeranjang.product.nama}
                  </h5>
                  <p>
                    Rp {numberWithCommas(menuKeranjang.product.harga)}
                  </p>
                    </Col>
                  <Col>
                <strong className='floar-right'>  Rp {numberWithCommas(menuKeranjang.total_harga)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        }
        <TotalBayar keranjangs= {keranjangs} />

      </Col>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from "react-bootstrap";

export default class Success extends Component {
  render() {
    return (
      <div className='mt-4 text-center'>
        <Image src='assets/images/success.png' width="500" />
        <h2>Success</h2>
        <p>Thank you for order</p>
        <Button variant="primary" as={Link} to="/">
            Back to Home
        </Button>
      </div>
    )
  }
}

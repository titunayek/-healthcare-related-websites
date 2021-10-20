import React from 'react';
import {  Card, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <Card className="text-center by-5">
        <Navbar.Toggle />
        <Card.Header className='bg-info'>Health is well</Card.Header>
        <Card.Body>
          <Card.Title className='text-success'>Doctors Clinic & Medicine Store</Card.Title>
          <Card.Text>
            Our experience here is to serve patients by her.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted  bg-info ">Rongpur ,lalmonirhat .</Card.Footer>
      </Card>
        </div>
    );
};

export default Footer;
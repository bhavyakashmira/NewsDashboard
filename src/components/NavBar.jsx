

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useApi } from '../Context/Contexts';

function NavBar(props) {
  const { sharedData, updateSharedData, searchQuery, setSearchQuery } = useApi();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUpdateData = (value) => {
    updateSharedData(value);
  };

  return (
    <>
      {/* <Navbar expand="lg" style={{ backgroundColor: '#2c3e50', position: 'fixed', marginTop: '0', top: '0', width: '100%', zIndex: '100' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: '#ecf0f1', fontWeight: 'bold' }}>NewsDashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ border: 'none' }}>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px' }}></span>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px', marginTop: '4px' }}></span>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px', marginTop: '4px' }}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
                value={searchQuery}
                style={{ backgroundColor: '#34495e', border: 'none', color: '#ecf0f1' }}
              />
              <Button variant="danger" onClick={() => setSearchQuery(searchQuery)}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar expand="lg" style={{ backgroundColor: '#1a2228', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: '#ecf0f1', fontWeight: 'bold' }}>NewsDashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ border: 'none' }}>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px' }}></span>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px', marginTop: '4px' }}></span>
            <span style={{ backgroundColor: '#ecf0f1', display: 'block', height: '2px', width: '24px', marginTop: '4px' }}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Form className="ms-auto d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
                value={searchQuery}
                style={{ backgroundColor: '#34495e', border: 'none', color: '#ecf0f1' }}
              />
              <Button variant="danger" onClick={() => setSearchQuery(searchQuery)} style={{ marginLeft: '10px' }}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


import React, {useState} from 'react'
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
    <Navbar expand="lg" style={{backgroundColor:'grey',width:'100%', position:'fixed',zIndex:'100'}} >
      <Container fluid>
        <Navbar.Brand href="#" >NewsDashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', }}
            navbarScroll
          >
           
              <NavDropdown title="Select Category" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => handleUpdateData(false)} >ALL category</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=> handleUpdateData('HEALTH')} >Health</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleUpdateData('POLITICS')} >Politics</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleUpdateData('SPORTS')}>Sports</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleUpdateData('GLOBAL')}>Global</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleUpdateData('TECHNOLOGY')}>Techonology</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
              value={searchQuery}  
            />
            <Button variant="danger" onClick={()=>setSearchQuery(searchQuery)} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar;

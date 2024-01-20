import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">All Customers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Select className="me-2 sortby">
                            <option>Sort by: ID</option>
                            <option>Sort by: Name</option>
                            <option>Sort by: Created date</option>
                            <option>Sort by: Last Interaction</option>
                        </Form.Select>
                    </Form>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="btn btn-info"><i class="fa fa-search" aria-hidden="true"></i></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
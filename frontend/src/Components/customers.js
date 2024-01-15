import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

const itemPerPage = 4;

const customerdata = [
    {
        id: 1,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 3,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 4,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 5,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 6,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 7,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    },
    {
        id: 8,
        image: require('../assets/images/customer1.jpg'),
        title: 'Customer name',
        email: 'customeremail@gmail.com',
        date: '15 Nov 2016',
        time: '3 hours ago',
        link1: 'https://www.google.com',
        link2: 'https://www.google.com'
    }
];

const numberOfPages = Math.ceil(customerdata.length / itemPerPage);

const pageIndex = Array.from({length : numberOfPages}, (_,idx) => idx+1)

export default function AppCustomers() {

    const [currentPage, setCurrentPage] = useState(0);
    const customerdatarow = customerdata.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <section className='block customer-block'>
            <Container fluid>
                <Row>
                    {
                        customerdatarow.map(customers => {
                            return (
                                <Col sm={3} key={customers.id}>
                                    <div className='holder'>
                                        <Card>
                                            <Card.Text>Customer ID: <b>{customers.id}</b></Card.Text>
                                            <Card.Img variant="top" src={customers.image} />
                                            <Card.Body>
                                                <Card.Title>{customers.title}</Card.Title>
                                                <Card.Text>{customers.email}</Card.Text>
                                                <time><i class="fa fa-calendar" aria-hidden="true"></i> {customers.date}</time>
                                                <Card.Text><i class="fa fa-clock" aria-hidden="true"></i> {customers.time}</Card.Text>
                                                <a href='{customers.link1}' className='btn btn-primary'><i class="fa fa-user-circle" aria-hidden="true"></i> View</a><br></br>
                                                <a href='{customers.link2}' className='btn btn-primary'><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
                <div className='pagination'>
                    <button className='pagination-btn' disabled={currentPage < 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
                    {pageIndex.slice(
                        Math.max(0, currentPage - 2), 
                        Math.min(numberOfPages, currentPage + 3)
                        ).map(
                            (page) => (<button key={page} onClick={() => handlePageChange(page-1)} className={page === currentPage+1 ? "pagination-btn-active" : "pagination-btn"}>
                                {page}
                                </button>
                        ))}
                    <button className='pagination-btn' disabled={currentPage >= numberOfPages-1} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </div>
            </Container>
        </section>
    )
}
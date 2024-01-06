import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

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
]

let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number}>
      {number}
    </Pagination.Item>,
  );
}

export default function AppCustomers() {
    return (
        <section className='block customer-block'>
            <Container fluid>
                <Row>
                    {
                        customerdata.map(customers => {
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
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}
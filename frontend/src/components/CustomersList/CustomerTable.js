import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const itemPerPage = 5;
const numberOfPages = Math.ceil(data.length / itemPerPage);
const pageIndex = Array.from({ length: numberOfPages }, (_, idx) => idx + 1);

export default function CustomerTable() {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filtered = data.filter(customer => {
            return search.toLowerCase() === '' ? true :
                customer.name.toLowerCase().includes(search) ||
                customer.email.toLowerCase().includes(search) ||
                customer.created_date.toLowerCase().includes(search) ||
                customer.last_interaction.toLowerCase().includes(search) ||
                customer.id.toLocaleString().includes(search);
        });
        setFilteredData(filtered);
        setCurrentPage(0); // Reset to the first page on search
    }, [search]);

    const customerdatarow = filteredData.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

    const sortedById = () => {
        setSorted({ sorted: "id", reversed: !sorted.reversed });
        const customerCopy = [...data];
        customerCopy.sort((customerA, customerB) => {
            if (sorted.reversed) {
                return customerA.id - customerB.id;
            }
            return customerB.id - customerA.id;
        });
        setFilteredData(customerCopy);
    }

    const sortedByName = () => {
        setSorted({ sorted: "name", reversed: !sorted.reversed });
        const customerCopy = [...data];
        customerCopy.sort((customerA, customerB) => {
            const nameA = `${customerA.name}`;
            const nameB = `${customerB.name}`;

            if (sorted.reversed) {
                return nameB.localeCompare(nameA);
            }

            return nameA.localeCompare(nameB);
        });

        setFilteredData(customerCopy)
    }

    const renderArrow = () => {
        if (sorted.reversed) {
            return <FaArrowUp />;
        }
        return <FaArrowDown />;
    }

    return (
        <Container>
            <h1 className='text-center mt-4 title'>All Customers</h1>
            <Form className="d-flex">
                <InputGroup className="me-2">
                    <Form.Control className='search-bar' onChange={handleSearchChange} placeholder='Search Customer' />
                </InputGroup>
            </Form>
            <div className='table-container'>
                <Table hover className='table'>
                    <thead>
                        <tr>
                            <th onClick={sortedById}>CustomerID  {sorted.sorted === "id" ? renderArrow() : null}</th>
                            <th onClick={sortedByName}>Name  {sorted.sorted === "name" ? renderArrow() : null}</th>
                            <th>Email</th>
                            <th>Created Date</th>
                            <th>Last Interaction</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerdatarow.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.created_date}</td>
                                <td>{customer.last_interaction}</td>
                                <td className='link'>
                                    <a href='{customers.link1}' className=''><i class="fa fa-user-circle" aria-hidden="true"></i></a><br></br>
                                    <a href='{customers.link2}' className=''><i class="fa fa-trash" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className='pagination'>
                <button className='pagination-btn' disabled={currentPage < 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>

                {pageIndex.slice(
                    Math.max(0, currentPage - 2),
                    Math.min(numberOfPages, currentPage + 3)
                ).map(
                    (page) => (<button key={page} onClick={() => handlePageChange(page - 1)} className={page === currentPage + 1 ? "pagination-btn-active" : "pagination-btn"}>
                        {page}
                    </button>
                    ))}
                <button className='pagination-btn' disabled={currentPage >= numberOfPages - 1} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </Container>
    )
}
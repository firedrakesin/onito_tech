import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const View = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const columns = [
    { name: 'Name', selector: row => row['name'] },
    { name: 'DOB', selector: row => row['dob'] },
    { name: 'Mobile', selector: row => row['mobile'] },
    { name: 'Age/Sex', selector: row => `${row['age']} / ${row['sex']}` },
    { name: 'Address', selector: row => row['address'] },
    { name: 'Govt Id', selector: row => row['govtID'] },
    { name: 'Guardian Details', selector: row => row['gaurdian'] },
    { name: 'Nationality', selector: row => row['nationality'] },
  ];

  const handleRowsPerPageChange = e => {
    setRowsPerPage(parseInt(e.target.value));
  }

  return (
    <div className="view-container">
      <Link to="/" className="back-button">
        Back
      </Link>
      <div className="user-table">
        <div className="table-header">
          <div className="rows-per-page-select">
        <label htmlFor="rows-per-page-select">Show</label>
        <select
        id="rows-per-page-select"
        value={rowsPerPage}
        onChange={handleRowsPerPageChange}
        >
        {[...Array(100).keys()].map((val) => (
            <option key={val+1} value={val+1}>{val+1}</option>
        ))}
        </select>
      </div>
          <div className="table-header-right">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>
        <DataTable columns={columns} data={users}
        className="user-table"
        pagination
        paginationPerPage={rowsPerPage}
        paginationRowsPerPageOptions={[1, 2, 50, 100]} />
      </div>
    </div>
  );
};

export default View;

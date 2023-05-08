import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const View = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

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
    { name: 'Name', selector: row => row['name'] ,width: '150px'},
    { name: 'Age/Sex', selector: row => `${row['dob']} / ${row['sex']}`,width: '120px' },
    { name: 'Mobile', selector: row => row['mobile'] || '',width: '130px'},
    { name: 'Address', selector: row => row['address']|| 'N/A',width: '350px' },
    { name: 'Govt Id', selector: row => row['govtId'] || '-',width: '140px' },
    { name: 'Guardian ', selector: row => row['gaurdian'] || 'N/A',width: '150px'},
    { name: 'Nationality', selector: row => row['nationality']|| 'N/A' ,width: '130px'},
  ];

  const handleRowsPerPageChange = e => {
    setRowsPerPage(parseInt(e.target.value));
  }

  const filteredData = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-container">
      <Link to="/" className="back-button"> 
        Back
      </Link> <h3 className='viewp'>List of Saved Users</h3>
      <div className="user-table">
        <div className="table-header">
          <div className="table-header-right">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          className="userr-table"
          pagination
          paginationPerPage={rowsPerPage}
          paginationRowsPerPageOptions={[2, 3, 5, 10]}
          noHeader
          striped
          highlightOnHover
        />
      </div>
    </div>
  );
};

export default View;

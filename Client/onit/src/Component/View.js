import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const View = () => {
  const [users, setUsers] = useState([]);

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
        { name: 'Sex', selector: row => row['sex'] },
        { name: 'Address', selector: row => row['address'] },
        { name: 'Govt Id', selector: row => row['govtID'] },
        { name: 'Guardian Details', selector: row => row['gaurdian'] },
        { name: 'Nationality', selector: row => row['nationality'] },

  ];

  return (
    <>
      <Link to="/">
        <button>back</button>
      </Link>
      <h1 className="h1">Welcome to User Registration Form</h1>
      <DataTable columns={columns} data={users} />
    </>
  );
};

export default View;

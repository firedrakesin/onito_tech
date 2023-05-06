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
    { name: 'Name', selector: 'name' },
    { name: 'Sex', selector: 'sex' },
    { name: 'DOB', selector: 'dob' },
    // { name: 'Mobile', selector: 'mobile' },
    // { name: 'Address', selector: 'address' },
    // { name: 'Govt Id', selector: 'govtID' },
    // { name: 'Guardian Details', selector: 'gaurdian' },
    // { name: 'Nationality', selector: 'nationality' },

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

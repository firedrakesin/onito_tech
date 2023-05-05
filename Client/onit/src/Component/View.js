import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <>
    <Link to='/'>
          <button>back</button>
        </Link>
    <h1 className='h1'>Welcome to User Registration Form</h1>
    <h1>inside view</h1>
        </>
  )
}

export default View
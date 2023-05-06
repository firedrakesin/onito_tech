import React from 'react';
import {useForm} from "react-hook-form" ;
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const schema = yup.object().shape({
  name: yup.string().required(), // name is required
  dob: yup.number().positive().integer().required(),// age is required
  sex: yup.string().required(),  // sex is required
  // mobile: yup.string().test('is-indian-mobile', 'Invalid mobile number', value => {
  //   if (!value) {
  //     return true; // allow empty string
  //   }
  //   const pattern = /^(\+91[-\s])?[0]?(91)?[6789]\d{9}$/;
  //   return pattern.test(value);
  // }).nullable(),
  // mobile: yup.string().matches(phoneRegExp, 'Invalid mobile number').nullable(), correct but not working
//   emergencyNumber: yup.string().test('is-indian-mobile', 'Invalid mobile number', value => {
//     if (!value) {
//       return true; // allow empty string
//     }
//     const pattern = /^(\+91[-\s])?[0]?(91)?[6789]\d{9}$/;
//     return pattern.test(value);
//   }).nullable(),

//   idType: yup.string(), // valid Aadhar or PAN
//   govtId: yup.string().when('idType', {
//   is: (val) => val !== undefined && val !== null && val !== '',
//   then: yup.string().matches(/^[0-9]{12}$/ || "", 'Invalid Aadhar number')
//     .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
// }),

}); 


const CForm = () => {

const { register, handleSubmit } = useForm({
  resolver: yupResolver(schema),
});

const onSubmit = async (data) => {
  console.log("data", data);
  try {
    const response = await fetch("http://localhost:3001/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    console.log("responseData", responseData);
  } catch (error) {
    console.error(error);
  }
}

  return (
    <>
    <h2 className='h1'>Welcome to User Registration Form</h2>
    <Link to='/view'>
          <button>List of saved users</button>
        </Link>
    <div className='form-body'>
    <form action='Post' onSubmit={handleSubmit(onSubmit)}>
        <p className='subheading'>Personal Details</p>
        <label >Name <span style={{marginInline:'2px'}} className="required">*</span> </label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Name' {...register("name")}  />
        <label style={{marginInline:'12px'}}>Date of Birth or Age <span className="required">*</span></label>
        <input style={{marginInline:'12px', width: '220px'}} type="text" placeholder='DD/MM/YYYY or Age in Years' {...register("dob")} />
        <label style={{marginInline:'12px'}}> Sex <span className="required">*</span></label>
        <select {...register("sex")}>
        <option value="">Enter Sex</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
        <br/>
         <label style={{marginInline:'12px'}} >Mobile</label>
        <input style={{marginInline:'12px'}}  type="text" placeholder='Enter Mobile' {...register("mobile")} />
        <label style={{marginInline:'12px'}} >Govt Issued ID</label>
        <select {...register("idType")} style={{ marginRight: '10px' }}>
          <option value="">Select ID Type</option>
          <option value="aadhar">Aadhar</option>
          <option value="pan">PAN</option>
        </select>
        <input type="text" placeholder='Enter Govt ID' {...register("govtId")} />
        <br/><br/>
        <p className='subheading'>Contact Details</p>
        <label style={{marginInline:'12px'}} >Guardian Details</label>
        <select {...register("glabel")}>
          <option value="">Enter Label</option>
          <option value="Mother">Mother</option>
          <option value="Father">Father</option>
          <option value="Other">Other</option>
        </select>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Gaurdian Name' {...register("gaurdian")} />
        <label style={{marginInline:'12px'}} >Email</label>
        <input style={{marginInline:'12px'}} type="email" placeholder='Enter Email' {...register("email")} />
        <label style={{marginInline:'12px'}} >Emergency Contact Number</label>
        <input style={{marginInline:'12px'}} type="Number" placeholder='Enter Emergency No.' {...register("emergenyNumber")} />
        <br/>
        <p className='subheading'>Address Details</p>
        <label style={{marginInline:'12px'}} >Address</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Address' {...register("address")} />
        <label style={{marginInline:'12px'}}>State</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter State' {...register("state")} />
        <label style={{marginInline:'12px'}}>City</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter city/town/village' {...register("city")} />
        <br/>
        <label style={{marginInline:'12px'}}>Country</label>
        <select {...register("country")}>
          <option value="">Enter Country</option>
          <option value="India">India</option>
        </select>
        <label style={{marginInline:'12px'}}>Pincode</label>
        <input style={{marginInline:'12px'}} type="number" placeholder='Enter pincode' {...register("pincode")} />
        <br/>
        <p className='subheading'>Other Details</p>
        <label style={{marginInline:'12px'}} >Occupation</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter occupation' {...register("occupation")} />
        <label style={{marginInline:'12px'}} >Religion</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Religion' {...register("religion")} />
        <label style={{marginInline:'12px'}} >Marital Status</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Marital Status' {...register("mStatus")} />
        <label style={{marginInline:'12px'}} >Blood Group</label>
        <input style={{marginInline:'12px'}} type="text" placeholder='Group' {...register("bloodGroup")} />
        <br/>
        <label style={{marginInline:'12px'}} >Nationality</label>
        <select {...register("nationality")}>
          <option value="">Nationality</option>
          <option value="Indian">Indian</option>
        </select>
        <br/><br/>
        <div className='button-div'>
        <Button className='cbutton btn-block' variant="outline-danger">Danger<br/> <span style={{ textDecoration: 'underline' }}>(esc)</span></Button>{' '}
        <Button className='sbutton btn-block' variant="success" style={{ backgroundColor: '#28a745' }}>Success<span style={{ textDecoration: 'underline' }}>(S)</span></Button>
        </div>
    </form>
    </div>
    </>
  )
}

export default CForm
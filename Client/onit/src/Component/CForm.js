import React from 'react';
import {useForm} from "react-hook-form" ;
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom';

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
    <h1 className='h1'>Welcome to User Registration Form</h1>
    <h3 className='h3'>Fill in the form below and click on the submit button</h3>
    <div className='form-body'>
    <form action='Post' onSubmit={handleSubmit(onSubmit)}>
        <p className='subheading'>Personal Details</p>
        <label >Name <span className="required">*</span> </label>
        <input type="text" placeholder='Enter Name' {...register("name")}  />
        <label >Date of Birth or Age <span className="required">*</span></label>
        <input type="number" placeholder='DD/MM/YYYY or Age in Years' {...register("dob")} />
        <label > Sex <span className="required">*</span></label>
        <select {...register("sex")}>
        <option value="">Enter Sex</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
        <br/>
        {/* <label >Mobile</label>
        <input type="text" placeholder='Enter Mobile' {...register("mobile")} />
         <label>Govt Issued ID</label>
        <select {...register("idType")}>
          <option value="">Select ID Type</option>
          <option value="aadhar">Aadhar</option>
          <option value="pan">PAN</option>
        </select>
        <input type="text" placeholder='Enter Govt ID' {...register("govtId")} />
        <br/>
        <p className='subheading'>Contact Details</p>
        <label >Guardian Details</label>
        <select {...register("glabel")}>
          <option value="">Enter Label</option>
          <option value="Mother">Mother</option>
          <option value="Father">Father</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" placeholder='Enter Gaurdian Name' {...register("gaurdian")} />
        <label >Email</label>
        <input type="email" placeholder='Enter Email' {...register("email")} />
        <label >Emergency Contact Number</label>
        <input type="Number" placeholder='Enter Emergency No.' {...register("emergenyNumber")} />
        <br/>
        <p className='subheading'>Address Details</p>
        <label >Address</label>
        <input type="text" placeholder='Enter Address' {...register("address")} />
        <label >State</label>
        <input type="text" placeholder='Enter State' {...register("state")} />
        <label >City</label>
        <input type="text" placeholder='Enter city/town/village' {...register("city")} />
        <br/>
        <label >Country</label>
        <select {...register("country")}>
          <option value="">Enter Country</option>
          <option value="India">India</option>
        </select>
        <label >Pincode</label>
        <input type="number" placeholder='Enter pincode' {...register("pincode")} />
        <br/>
        <p className='subheading'>Other Details</p>
        <label >Occupation</label>
        <input type="text" placeholder='Enter occupation' {...register("occupation")} />
        <label >Religion</label>
        <input type="text" placeholder='Enter Religion' {...register("religion")} />
        <label >Marital Status</label>
        <input type="text" placeholder='Enter Marital Status' {...register("mStatus")} />
        <label >Blood Group</label>
        <input type="text" placeholder='Group' {...register("bloodGroup")} />
        <br/>
        <label >Nationality</label>
        <select {...register("nationality")}>
          <option value="">Nationality</option>
          <option value="Indian">Indian</option>
        </select> */}
        <br/>
        <div className='button'>
        
        <button className='cbutton'>Cancel<br/> <span>(esc)</span></button>
        <button className='sbutton'>Submit <span className="subtext">(esc)</span></button>
        </div>
    </form>
    
    </div>
    
    <Link to='/view'>
          <button>view tables</button>
        </Link>
    </>
  )
}

export default CForm
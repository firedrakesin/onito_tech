import React from 'react';
import {useForm} from "react-hook-form" ;
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

const CForm = () => {

const schema = yup.object().shape({
    name: yup.string().required(), // name is required
    dob: yup.number().positive().integer().required(),// age is required
    sex: yup.string().required(),  // sex is required
    mobile: yup.string().matches(/^[6-9]\d{9}$/), //should be valid Indian number
    emergenyNumber: yup.string().matches(/^[6-9]\d{9}$/), //should be valid Indian number
    idtype: yup.string(), // valid Aadhar or PAN
    govtId: yup.string().when('idType', {
    is: 'Aadhar',
    then: yup.string().matches(/^[0-9]{12}$/, 'Invalid Aadhar number'),
    otherwise: yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
  }),
}); 

const {register, handleSubmit } = useForm({
    resolver:  yupResolver(schema),
});


const onSubmit = (data) =>{
    console.log(data);
}

  return (
    <>
    <h1 className='h1'>Welcome to User Registration Form</h1>
    <h3 className='h3'>Fill in the form below and click on the submit button</h3>
    <div className='form-body'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <p className='subheading'>Personal Details</p>
        <label >Name <span className="required">*</span> </label>
        <input type="text" placeholder='Enter Name' {...register("name")}  />
        <label style={{ marginRight: '10px' }}>Date of Birth or Age <span className="required">*</span></label>
        <input type="number" placeholder='DD/MM/YYYY or Age in Years' {...register("dob")} />
        <label > Sex <span className="required">*</span></label>
        <input type="text" placeholder='Enter Sex' {...register("sex")} />
        <br/>
        <label >Mobile</label>
        <input type="text" placeholder='Enter Mobile' {...register("mobile")} />
        <label>Govt Issued ID</label>
        <select {...register("idType")}>
          <option value="">Select ID Type</option>
          <option value="aadhar">Aadhar</option>
          <option value="pan">PAN</option>
        </select>
        <br/>
        <p className='subheading'>Contact Details</p>
        <label >Guardian Details</label>
        <input type="text" placeholder='Enter Label' {...register("label")} />
        <input type="text" placeholder='Enter Gaurdian Name' {...register("gaurdian")} />
        <label >Email</label>
        <input type="email" placeholder='Enter Email' {...register("email")} />
        <label >Emergency Contact Number</label>
        <input type="text" placeholder='Enter Emergency No.' {...register("emergenyNumber")} />
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
        <input type="text" placeholder='Enter Country' {...register("country")} />
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
        <input type="text" placeholder='Nationality' {...register("nationality")} />
        <div className='button'>
        <button className='cbutton'>Cancel<br/> <span>(esc)</span></button>
        <button className='sbutton'>Submit <span className="subtext">(esc)</span></button>
        </div>
    </form>
    </div>
    </>
  )
}

export default CForm
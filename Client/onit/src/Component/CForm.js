import React from 'react';
import {useForm} from "react-hook-form" ;
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {sexOptions, bloodGroups, maritalStatusOptions,religionOptions, Cities, indianStates} from '../optiondata';

const schema = yup.object().shape({//yup schema
    name: yup.string().required('Name is required'),//required
    dob: yup.string().required('Age is required'),//required
    sex: yup.string().required('Sex is required'),//required
    mobile: yup.string().nullable()// correct Indian number
      .test('valid-mobile','Mobile number is invalid. Please enter a 10-digit number starting with 6, 7, 8, or 9',
        function (value) {
          if (!value) return true;
          const regex = /^[6-9]\d{9}$/;
          return regex.test(value);
        }
      ),
    emergencyNumber: yup.string().nullable()// correct Indian number
      .test('valid-emergency-number','Emergency contact number is invalid. Please enter a 10-digit number starting with 6, 7, 8, or 9',
        function (value) {
          if (!value) return true;
          const regex = /^[6-9]\d{9}$/;
          return regex.test(value);
        }
      ),
    idType: yup.string().nullable(),// correct ID number
    govtId: yup.string()
      .when('idType', {
        is: (val) => val !== undefined && val !== null && val !== '',
        then: yup
          .string()
          .test('valid-aadhar', 'Aadhar number is invalid. Please enter a 12-digit number', function (value) {
            if (!value) return true;
            const regex = /^\d{12}$/;//valid type of id is matched
            return regex.test(value);
          })
          .test('valid-pan', 'PAN number is invalid. Please enter a 10-digit alphanumeric value', function (value) {
            if (!value) return true;
            const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;//valid type of id is matched
            return regex.test(value);
          }),
      })
      .nullable(),//string can be empty as well
  });
 
const CForm = () => {

const { register, handleSubmit, formState:{errors} } = useForm({
  resolver: yupResolver(schema),
});



const onSubmit = async (data) => {                                            // onSubmit function to send data to server
  console.log("data", data);                                                 //printing in console
  try {
    const response = await fetch("http://localhost:3001/", {               //fetch funtion 
      method: 'POST',                                                     // method POSt
      headers: {
        'Content-Type': 'application/json'                              // type of content
      },
      body: JSON.stringify(data)                                       // converting json to string for sending purpose
    });
    const responseData = await response.json();                      //converting response to json
    console.log("responseData", responseData);                      //printing in the console
  } catch (error) {                                                //if error
    console.error(error);                                         //printing error in console for debugging purpose
  }
}

  return (
    <>
    <h2 className='h1'>Welcome to User Registration Form</h2>
    <Link to='/view'>
          <button>List of saved users</button>
        </Link>
    <div className='form-body'>
    <form action='Post' onSubmit={handleSubmit(onSubmit)} id="myForm">
        <p className='subheading'>Personal Details</p>
        <label >Name<span style={{marginInline:'2px'}} className="required">*</span> </label>
        <input style={{marginInline:'12px', width: '352px'}} type="text" placeholder='Enter Name' {...register("name",{required:true})}  />
        {errors.name && <p style={{ margin: 0, color: 'red' }}>{errors.name.message}</p>}
        <label style={{marginLeft:'92px', marginTop:'-800px'}}>Date of Birth or Age <span style={{marginInline:'2px'}} className="required">*</span></label>
        <input style={{marginInline:'2px', width: '260px'}} type="text" placeholder='DD/MM/YYYY or Age in Years' {...register("dob")} />
        {errors.dob && <p style={{ margin: 0, color: 'red' }}>{errors.dob.message}</p>}
        <label style={{marginLeft:'80px'}}> Sex <span className="required" style={{marginInline:'2px'}}>*</span></label>
        <select {...register("sex",{required:true}) } style={{ width: '120px' }  }  >
        <option value=" ">Enter Sex</option>
        {sexOptions.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ))}
        </select>
        {errors.sex && <p style={{ margin: 0, color: 'red' }}>{errors.sex.message}</p>}<br/>
        <label style={{marginLeft:'10px'}} >Mobile</label>
        <input style={{marginInline:'12px'}}  type="text" placeholder='Enter Mobile' {...register("mobile")} />
        {errors.mobile && <p style={{ margin: 0, color: 'red' }}>{errors.mobile.message}</p>}
        <label style={{marginLeft:'260px'}} >Govt Issued ID</label>
        <select {...register("idType")} style={{ marginRight: '12px' }}>
          <option value="">Select ID Type</option>
          <option value="aadhar">Aadhar</option>
          <option value="pan">PAN</option>
        </select>
        <input type="text" placeholder='Enter Govt ID' {...register("govtId")} />
        <br/>
        <p className='subheading'>Contact Details</p>
        <label style={{marginInline:'12px'}} >Guardian Details</label>
        <select {...register("glabel")}>
          <option value="">Enter Label</option>
          <option value="Mother">Mother</option>
          <option value="Father">Father</option>
          <option value="Other">Other</option>
        </select>
        <input style={{marginInline:'12px'}} type="text" placeholder='Enter Gaurdian Name' {...register("gaurdian")} />
        <label style={{marginInline:'90px'}} >Email</label>
        <input style={{marginLeft:'-60px', width:'370px'}} type="email" placeholder='Enter Email' {...register("email")} />
        <label style={{marginLeft:'80px'}} >Emergency<br/> Contact Number</label>
        <input style={{marginInline:'12px'}} type="Number" placeholder='Enter Emergency No.' {...register("emergenyNumber")} />
        <br/><br/>
        <p className='subheading'>Address Details</p>
        <label style={{marginInline:'12px'}} >Address</label>
        <input style={{marginInline:'12px',width: '352px'}} type="text" placeholder='Enter Address' {...register("address")} />

        <label  style={{marginLeft:'90px'}}>State</label>
        <select {...register("state") } style={{marginLeft:'28px', width:'375px'}}>
        <option value="">Enter State</option>{indianStates.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
        <label style={{marginLeft:'70px'}}>City</label>
        <select {...register("city") } style={{marginInline:'12px'}}>
        <option value="">Enter city/town/village</option>{Cities.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
        <br/>
        <label style={{marginInline:'12px'}}>Country</label>
        <select {...register("country")} style={{marginLeft:'10px'}}>
          <option value="">Enter Country</option>
          <option value="India">India</option>
        </select>
        <label style={{marginInline:'335px'}}>Pincode</label>
        <input style={{marginLeft:'-318px'}} type="number" placeholder='Enter pincode' {...register("pincode")} />
        <br/><br/>
        <p className='subheading'>Other Details</p>
        <label style={{marginInline:'12px'}} >Occupation</label>
        <input style={{width:'340px'}} type="text" placeholder='Enter occupation' {...register("occupation")} />
        <label style={{marginLeft:'100px'}} >Religion</label>
        <select {...register("religion") } style={{ width: '120px' }}>
        <option value="">Enter Religion</option>
        {religionOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
        </select>
        <label style={{marginLeft:'40px'}} >Marital Status</label>
        <select {...register("mStatus") } style={{ width: '160px' }}>
          <option value="">Enter Martial Status</option>
          {maritalStatusOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
        </select>
        <label style={{marginInline:'12px', marginLeft:'30px'}} >Blood Group</label>
        <select {...register("bloodGroup") } style={{ width: '120px' }}>
        <option value="">Group</option>{bloodGroups.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
        <br/>
        <label style={{marginInline:'12px'}} >Nationality</label>
        <select {...register("nationality")}>
          <option value="">Nationality</option>
          <option value="Indian">Indian</option>
        </select>
        <br/><br/>
        <div className='button-div'>
        <Button className='cbutton btn-block' variant="outline-danger">Cancel<br/> <span style={{ textDecoration: 'underline' }}>(esc)</span></Button>{' '} 
        <button className='sbutton btn-block'type='submit' >Submit <br/><span style={{ textDecoration: 'underline' }}>(&#8984;S)</span></button>
        {/* bootstrap button other normal button */}
        </div>
    </form>
    </div>
    </>
  )
}

export default CForm







   

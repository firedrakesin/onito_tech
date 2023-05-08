const indianStates = [ //states
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },

  ];

 const sexOptions = [ //sex options for dropdown
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' },
  ];

  const bloodGroups = [// blood group options
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
  ];

  const maritalStatusOptions = [ // marital status option
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ];
  
  const religionOptions = [ //religion options
    { value: 'christianity', label: 'Christianity' },
    { value: 'islam', label: 'Islam' },
    { value: 'hinduism', label: 'Hinduism' },
    { value: 'buddhism', label: 'Buddhism' },
    { value: 'judaism', label: 'Judaism' },
    { value: 'sikhism', label: 'Sikhism' },
    { value: 'other', label: 'Other' }
  ];
  
  const indianCities = { // for dependent dropdown future work
    "Andhra Pradesh": [
      { value: "Visakhapatnam", label: "Visakhapatnam" },
      { value: "Vijayawada", label: "Vijayawada" },
    ],
    "Assam": [
      { value: "Guwahati", label: "Guwahati" },
      { value: "Silchar", label: "Silchar" },
    ],
    "Bihar": [
      { value: "Patna", label: "Patna" },
      { value: "Gaya", label: "Gaya" },
    ],
    "Delhi": [
      { value: "New Delhi", label: "New Delhi" },
      { value: "Noida", label: "Noida" },
    ],
  };

  const Cities = [// city dropdown
      { value: "Visakhapatnam", label: "Visakhapatnam" },
      { value: "Vijayawada", label: "Vijayawada" },
      { value: "Guwahati", label: "Guwahati" },
      { value: "Silchar", label: "Silchar" },
      { value: "Patna", label: "Patna" },
      { value: "Gaya", label: "Gaya" },
      { value: "New Delhi", label: "New Delhi" },
      { value: "Noida", label: "Noida" },
    ]
  



  const idTypeOptions = [ //Id drop down
    { value: 'passport', label: 'Passport' },
    { value: 'driverLicense', label: 'Driver License' },
    { value: 'nationalID', label: 'National ID' },
    ];

  export { sexOptions, bloodGroups, maritalStatusOptions, religionOptions, indianCities, indianStates,idTypeOptions, Cities };
  
  
  
  

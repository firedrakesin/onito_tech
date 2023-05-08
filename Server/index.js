const express = require('express');//imported
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json()); //middleware function - for parsing json to req body
app.use(cors());         // middleware function - for CORS

// Connecting to MongoDB Atlas
  mongoose.connect('mongodb+srv://Firedrakesin:Garubb66@cluster0.iodwiy3.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,     //tells Mongoose to use the MongoDB driver's new URL parser instead of the previous one
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

// Defining a schema for the user data
const userDataSchema = new mongoose.Schema({
    sex: String,
    dob: Number,
    name: String,
    mobile: String,
    govtId: String,
    gaurdian:String,
    email: String,
    emrgencyNumber: Number,
    address: String,
    state: String,
    city: String,
    country: String,
    pincode: Number,
    occupation: String,
    religion: String,
    mStatus: String,
    bloodGroup: String,
    nationality: String,
  
});

// Defining a model for the user data collection
const UserData = mongoose.model('userdata', userDataSchema); //mongoose.model fn(takes 2 parameter collection name and schema) is ued to create model which is used to add new data and save it
//UserData is model created, userdata is collection name in mongoose, userDataSchema is schema

app.get('/users', (req, res) => {
    UserData.find()
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log('Error fetching user data:', err);
        res.json({ success: false });
      });
  });
  

app.post('/', (req, res) => { // starts here 
  console.log(req.body);

  // Creating a new user data object from the request body
  const userData = new UserData({ //userData is new object being creted using UserData from the req body
    name: req.body.name,
    sex: req.body.sex,
    dob: req.body.dob,
    mobile: req.body.mobile,
    govtId: req.body.govtId,
    gaurdian: req.body.gaurdian,
    email: req.body.email,
    emrgencyNumber: req.body.emrgencyNumber,
    address: req.body.address,
    state: req.body.state,
    city: req.body.city,
    country: req.body.country,
    pincode: req.body.pincode,
    occupation: req.body.occupation,
    religion: req.body.religion,
    mStatus: req.body.mStatus,
    bloodGroup: req.body.bloodGroup,
    nationality: req.body.nationality,
  });

  
  // Saving the user data to the MongoDB Atlas database
  userData.save() // using save fn the new object created above is saved in database
    .then(() => {
      console.log('User data saved successfully');//if successful
      res.json({ success: true });
    })
    .catch((err) => { //if error
      console.log('Error saving user data:', err);
      res.json({ success: false });
    });
});


// app.listen() method is used to start a server on a specified port and begin listening to incoming client requests takes 2 parameters
app.listen(port, () => { // 1. port i.e. no. here it is 3001, 1. callback fn - here console is inside it
  console.log(`Server running on port ${port}`);
});
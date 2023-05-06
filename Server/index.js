const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
  mongoose.connect('mongodb+srv://Firedrakesin:Garubb66@cluster0.iodwiy3.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

// Define a schema for the user data
const userDataSchema = new mongoose.Schema({
    sex: String,
    dob: Number,
    name: String,
    mobile: String,
    govtId: String,
    glable:String,
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

// Define a model for the user data collection
const UserData = mongoose.model('userdata', userDataSchema);

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
  

app.post('/', (req, res) => {
  console.log(req.body);

  // Create a new user data object from the request body
  const userData = new UserData({
    name: req.body.name,
    sex: req.body.sex,
    dob: req.body.dob,
    mobile: req.body.mobile,
    govtId: req.body.govtId,
    glable: req.body.glable,
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

  
  // Save the user data to the MongoDB Atlas database
  userData.save()
    .then(() => {
      console.log('User data saved successfully');
      res.json({ success: true });
    })
    .catch((err) => {
      console.log('Error saving user data:', err);
      res.json({ success: false });
    });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());


// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
//   res.json({ success: true });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Firedrakesin:Garubb66@cluster0.euhtm7i.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

// Define a schema for the user data
const userDataSchema = new mongoose.Schema({
  name: String,
  sex: String,
  age: Number
});

// Define a model for the user data collection
const UserData = mongoose.model('userdata', userDataSchema);

app.post('/', (req, res) => {
  console.log(req.body);

  // Create a new user data object from the request body
  const userData = new UserData({
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
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


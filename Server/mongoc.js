const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/userdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model for your data
const myDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const MyData = mongoose.model('MyData', myDataSchema);

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);

  // Save the data to MongoDB
  const myData = new MyData(req.body);
  myData.save()
    .then(() => {
      console.log('Data saved to MongoDB');
      res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// app.get("/", (req, res) => {
//     res.send("server is live");
// });

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// // Handle POST requests to the root URL
// app.post('/', (req, res) => {
//   console.log(req.body);

//   res.json({ message: 'Data received successfully!' });
// });

// // Start the server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


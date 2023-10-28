const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet'); 
const cors = require('cors'); 

const PORT = process.env.PORT || 8000;

app.use(morgan('combined'));
app.use(express.json());
app.use(helmet()); 
app.use(cors());

const citiesRouter = require('./routes/cities.route');

app.use('/api/cities', citiesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

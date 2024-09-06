const express = require('express');
const app = express();
const courses = require('./routes/courses');

// Middleware
app.use(express.json());

// Routes
app.use('/api/courses', courses);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend running on port ${port}`));

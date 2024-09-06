const express = require('express');
const router = express.Router();

// Sample course data
let courses = [
  { id: 1, title: 'Introduction to JavaScript' },
  { id: 2, title: 'React for Beginners' },
  { id: 3, title: 'Advanced Python' }
];

router.get('/', (req, res) => {
  res.json(courses);
});

module.exports = router;

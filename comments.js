// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a route for /comments
// 4. Create a route for /comments/new
// 5. Create a route for /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a router
const commentsRouter = express.Router();

// 3. Create a route for /comments
commentsRouter.get('/', (req, res) => {
  res.json({ comments: [] });
});

// 4. Create a route for /comments/new
commentsRouter.post('/new', (req, res) => {
  res.json({ message: 'Comment created' });
});

// 5. Create a route for /comments/:id
commentsRouter.get('/:id', (req, res) => {
  res.json({ commentId: req.params.id });
});

// 6. Use the router with the /comments path
app.use('/comments', commentsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// Test the server
// 1. GET /comments
// 2. POST /comments/new
// 3. GET /comments/:id
// 4. GET /comments/123
// 5. GET /comments/456
// 6. GET /comments/789
// 7. GET /comments/abc
// 8. GET /comments/def
// 9. GET /comments/ghi
// 10. GET /comments/jkl
// 11. GET /comments/mno
// 12. GET /comments/pqr
// 13. GET /comments/stu
// 14. GET /comments/vwx
// 15. GET /comments/yz
// 16. POST /comments/new
// 17. GET /comments
// 18. GET /comments/1
// 19. GET /comments/2
// 20. GET /comments/3
// 21. GET /comments/4
// 22. GET /comments/5
// 23. GET /comments/6
// 24. GET /comments/7
// 25. GET /comments/8
// 26.
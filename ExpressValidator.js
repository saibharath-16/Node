const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.post(
  '/register',
  [
    body('username')
      .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
      .trim().escape(),
    body('email')
      .isEmail().withMessage('Must be a valid email')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
      .trim().escape(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    res.status(200).json({ message: 'User registered successfully', user: { username, email,password } });
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

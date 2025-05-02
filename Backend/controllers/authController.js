const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullName, email, password: hashedPassword });

        await user.save();
        res.json({ message: 'User registered successfully!', fullName });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};


exports.signin = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(400).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id, fullName: user.fullName }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.json({ message: "Login successful!", token, fullName: user.fullName });
  } catch (err) {
      res.status(500).json({ error: "Server error" });
  }
};
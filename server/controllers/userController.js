// server/controllers/userController.js
const bcrypt = require('bcryptjs');
const pool = require('../config/db');

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const [result] = await pool.execute(
      `INSERT INTO users (firstName, lastName, mobileNo, email, street, city, state, country, loginId, password)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.body.firstName,
        req.body.lastName,
        req.body.mobileNo,
        req.body.email,
        req.body.street,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.loginId,
        hashedPassword
      ]
    );
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.execute('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM users WHERE id = ?', [id]);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

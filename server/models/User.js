// server/models/User.js
const bcrypt = require('bcryptjs');
const pool = require('../config/db');

class User {
  static async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const [result] = await pool.execute(
      `INSERT INTO users (firstName, lastName, mobileNo, email, street, city, state, country, loginId, password)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userData.firstName,
        userData.lastName,
        userData.mobileNo,
        userData.email,
        userData.street,
        userData.city,
        userData.state,
        userData.country,
        userData.loginId,
        hashedPassword
      ]
    );
    return result;
  }
}

module.exports = User;

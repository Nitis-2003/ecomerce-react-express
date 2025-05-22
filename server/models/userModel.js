import pool from "./db.js";

const UserModel = {
  async createUser({ username, password, email }) {
    try {
      const sql =
        "INSERT INTO `user`(`username`, `password`, `email`) VALUES (?, ?, ?)";
      const values = [username, password, email];
      const [result] = await pool.execute(sql, values);
    } catch (error) {
      throw error;
    }
  },

  async authentication({ username, password }) {
    try {
      const sql = "SELECT * FROM user WHERE username = ?";
      const values = [username];
      const [rows] = await pool.execute(sql, values);

      if (rows.length === 0) {
        throw new Error("User not found");
      }

      const user = rows[0];

      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default UserModel;

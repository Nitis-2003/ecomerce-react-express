import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserController = {
  async register(req, res) {
    const { username, password, email } = req.body;
    const hashPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    try {
      await UserModel.createUser({ username, password: hashPassword, email });
      res.status(201).json({ success:true, message: "User created" });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .json({ message: "This email or username already exists" });
      }
      res.status(500).json({ success:false,message: "Failed to create user" });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const result = await UserModel.authentication({ username, password });

      const match = await bcrypt.compare(password, result.password);

      if (!match) {
        throw new Error("Incorrect password");
      }

      const payload = {
        username: result.username,
        role: result.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ success:true });
    } catch (error) {
      res.status(401).json({ success:false,message: error.message });
    }
  },
};

export default UserController;

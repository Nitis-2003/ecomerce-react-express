import UserModel from '../models/userModel.js'
import pool from '../models/db.js'
import bcrypt from 'bcrypt'

const UserController = {
    async register(req,res){
        console.log(process.env.SALT_ROUNDS)
        const {username,password,email} = req.body
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
        try{
            await UserModel.createUser({username,password:hashPassword,email})
            res.status(201).json({message:'User created'})
        }catch(error){
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'This email or username already exists' });
            }
            res.status(500).json({message: 'Failed to create user'})
        }
    }
}

export default UserController
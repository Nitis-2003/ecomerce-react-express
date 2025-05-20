import pool from './db.js'

const UserModel = {

    async createUser({username,password,email}){
        try{
            const sql = 'INSERT INTO `user`(`username`, `password`, `email`) VALUES (?, ?, ?)'
            const values = [username,password,email]
            const [result] = await pool.execute(sql, values);

            console.log(result);
        }catch (error){
            throw error
        }
    }
}

export default UserModel
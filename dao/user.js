const db = require('./../db/db')

class UserDao{
    async createUser(username, usermail, useraddress){
        const[id] = await db('users').insert({
            user_name : username,
            user_mail : usermail, 
            user_address : useraddress
        })
   
    }
}
module.exports = new UserDao()
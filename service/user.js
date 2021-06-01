const userDao = require('../dao/user')
class UserService{
    createUser(userDto){
        const{username, usermail, useraddress} = userDto
        return userDao.createUser(username, usermail, useraddress)
    }
}
module.exports = new UserService();
const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data){this.users = data}

}
const fsPromises = require('fs').promises
const path = require('path')



const handleLogout = async (req,res) =>{
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)

    const refreshToken = cookies.jwt

    // is refreshToken in db?
    const foundUser = usersDB.users.find(person => person.refreshToken ===refreshToken);

    if(!foundUser){
        res.clearCookies('jwt', {httpOnly:true, maxAge: 24*60*60*1000})
        return res.sendStatus(204);//Forbidden}
    }
    // Delete refreshToken in DB
    const otherUsers = usersDB.users.filter(person => person.refreshToken !==refreshToken)
    const currentUser = {...foundUser, refreshToken: ''}
    usersDB.setUsers([...otherUsers, currentUser])
    await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
    )

    res.clearCookies('jwt', {httpOnly: true, sameSite: 'None', secure:true }) // secure: true - only serves on https
    res.sendStatus(204)
    
}

module.exports = {handleLogout}
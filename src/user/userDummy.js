import bcrypt from 'bcrypt';

export default {
    username: "Nookie",
    password: bcrypt.hashSync("1234", 3)
}
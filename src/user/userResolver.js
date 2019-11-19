import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import user from './userDummy';

export default {
    Mutation: {
        loginUser: (parent, args) => {
            const { username, password } = args
            if (username !== user.username) {
                throw new Error('no users');
            }

            if (!bcrypt.compareSync(password, user.password)) {
                throw new Error('wrong password');
            }

            return { token: jwt.sign(user, process.env.SUPERSECRET) };
        }
    }
};
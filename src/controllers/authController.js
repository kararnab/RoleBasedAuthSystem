const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const role = require('../_helpers/role');

//TODO: Add typescript here
const users = [
    { id: 1, username: 'arnab', password: '1234', role: role.Admin }
]
exports.login = async function ({ username, password }) {
    const user = users.find(u => u.username === username);
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET_KEY);
            return {
                token
            }
        } else {
            throw new Error("Invalid Password")
        }
    } else {
        throw new Error("Please register first")
    }
};

exports.register = async function ({ username, password, role }) {
    if (users.length >= 10) {
        throw new Error("Max user capacity reached. Cannot register")
    }
    const user = users.find(u => u.username === username);
    if (user) {
        throw new Error("Already Registered. Please Login")
    }
    const salt = await bcrypt.genSalt(10);  // generate salt to hash password
    const hashedPassword = await bcrypt.hash(password, salt); // now we set user password to hashed password
    const userEntry = {
        id: users.length + 1,
        username,
        password: hashedPassword,
        role
    }
    users.push(userEntry)
    return {
        ...userEntry
    }
};

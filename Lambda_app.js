const bcrypt = require('bcrypt');
const users = require('./data').userDB;

exports.handler = async (event) => {
    
    // Handle different routes
    if(event.path === '/register') {
        return await registerUser(JSON.parse(event.body));
    }
    else if(event.path === '/login') {
        return await loginUser(JSON.parse(event.body));
    }
};

const registerUser = async (userData) => {

    try {
        let foundUser = users.find((data) => userData.email === data.email);

        if (!foundUser) {

            let hashPassword = await bcrypt.hash(userData.password, 10);

            let newUser = {
                id: Date.now(),    
                username: userData.username,
                email: userData.email,
                password: hashPassword
            };

            users.push(newUser);

            return {
                statusCode: 200,
                body: JSON.stringify({message: "Registration successful"})
            }

        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({message: "Email already used"})
            }
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({message: "Internal server error"})
        }
    }

}

const loginUser = async (userData) => {

    // Logic to login user

    return response;
}

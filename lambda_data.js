// data.js

const userDB = [];

exports.handler = async (event) => {

  // Return entire DB
  if(event.path === '/getUsers') {
    return {
      statusCode: 200,  
      body: JSON.stringify(userDB)
    }
  }

  // Other db ops like get user by id, add user etc
  // Can be added here
  
  // Default 
  return {
    statusCode: 404,
    body: JSON.stringify({message: "Not found"})
  }

}

// Access userDB from other files
// const data = require('./data');
// console.log(data.userDB);

module.exports.userDB = userDB;

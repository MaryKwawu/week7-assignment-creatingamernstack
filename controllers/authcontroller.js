// const User = require("../models/Todo");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
// const email = req.body.email;
// const username = req.body.username;
// const password = req.body.password;
// const { email, username, password } = req.body;

//check if all fields are present
// if (!email || !username || !password) {
//   return res.status(400).send("please provide all fields");
// }

//check if username is already in database
// const userExists = await User.findOne({ email });
// if (userExists) {
//   return res.status(400).send("Email already exists.");
// }

//hashing ofpassword
//const hashedPassword = await bcrypt.hash(password, 12);

//create user
// const user = await User.create({
//   email,
//   username,
//   password: hashedPassword,
// });

//generatetoken
//const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });

//return response
//res.status(201).json({ token });
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//check if user is in the database
// let user = await User.findOne({ email });
// if (!user) {
//   return res.status(400).send("Invalid Credentials");
// }

//compares Passwords
// if (!isMatch) {
//   return res.status(400).send("password does not match");
// }
//const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });

//return response
//   res.status(200).json({ token });
// };

//Authorization
// const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ message: "Not Authorized." });

//     token = token.split("")[1];
//     try {
//       let user = jwt.verify(token, 12345678);
//       conole.log(user);
//       return next();
//     } catch (error) {
//       res.status(401).json({ message: "invalid token" });
//     }
//     console.log(token);
//   }
//   // console.log(token);
//   next();
// };

// module.exports = {
//   register,
//   login,
//   verifyToken,
// };

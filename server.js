const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

//connect to database
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use(cors());
// app.use("/auth", require("./router/authRouter"));

app.use("/todos", require("./router/todoRouter"));

app.listen(4000, () => console.log("Server run and running"));
// app.listen(PORT, () => console.log("Server on PORT ${PORT}"));

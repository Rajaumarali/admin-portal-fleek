// import libraries
const express = require("express");
const cors = require("cors");

// express app
const app = express();
app.use(cors());

// express will serve up production assets
// like our main.js or main.css file
app.use(express.static(process.cwd() + "/build"));

// express will serve up the index.html file
// if it doesn't recognize the route
// catch-all case
const path = require("path");
app.get("*", (req, res) => {
  console.log("file");
  console.log(process.cwd());
  res.sendFile(path.resolve(process.cwd(), "build", "index.html"));
});

// port
const PORT = process.env.PORT || 4000;

// listening to port
app.listen(PORT, () =>
  console.log(`CORS enabled server Listening to port ${PORT}`)
);

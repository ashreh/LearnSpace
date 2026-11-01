
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

const PORT = 3000;

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/learnspace.html");
});
// Status route
app.get("/status", (req, res) => {
    res.send("LearnSpace backend is operational!");
});

// About route
app.get("/about", (req, res) => {
    res.send("LearnSpace is an educational platform.");
});

// Courses route
app.get("/courses", (req, res) => {
    res.send("Our courses will be available soon.");
});
// Registration route
app.post("/register", (req, res) => {

    const { fullname, email, password } = req.body;

    console.log("New registration:", fullname, email);

    res.json({
        message: "Registration details received successfully!",
        name: fullname,
        email: email
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`LearnSpace server running at http://localhost:${PORT}`);
});

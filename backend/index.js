const express = require("express")
const app = express()
const usersRoute = require("./routes/users.route")

app.use("/api", usersRoute)

app.listen(3000, () => console.log(`Listening on port 3000`))
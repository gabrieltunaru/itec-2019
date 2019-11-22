const express = require("express")
const router = express.Router()

router.get("/user", (req,res) => {
    res.send("This is the users' route")
})

module.exports = router
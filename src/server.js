const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("from /")
    res.send("Hi This is test version 4")
})

app.get('/health', (req, res) => { 
    console.log("from Health")
    res.status(200).send({"message": "Its seems good over here"})
})

app.listen(3000, () => {
    console.log('Server is Listening at port 3000')
})


const express = require('express')
const num2words = require('num2words')
const app = express()
const port = 8000

app.post('/api/num_to_english', function (req, res) {
    let result = num2words(req.query['number']),
        status = result.toString().length > 0 ? "200 OK" : "400 Bad Request";

    let output = {
        "status": status,
        "num_to_english": result
    }
    res.send(output)
})

app.listen(port, () => {
    console.log("Listening on http://127.0.0.1:8000")
})
const express = require('express');
const PORT = 8080

const app = express();

app.use(express.json())

// landing page for portfolio routes
app.get('/home', (req,res)=> {
    return res.json()
})

app.listen(PORT, (err)=> {
    console.log(`Server is Listening to the Port ${PORT}`);
})
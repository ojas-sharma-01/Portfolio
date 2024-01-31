const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static('./public'));

app.get("/", (rq, rs) => {
    rs.sendFile(path.join(__dirname, "/index.html"));
});



app.listen(5000, () => {
    console.log("running");
})
const express = require('express');
const app = express();

app.use(express.static('./public'))

app.listen(5000, () => console.log("Server is started and running on port 5000"))
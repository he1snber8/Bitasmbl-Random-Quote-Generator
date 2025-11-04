// server.js
const express = require(\"express\");
const cors = require(\"cors\");
const app = express();
// TODO: mount quote routes
app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log(\"Server running on port 3000\"));
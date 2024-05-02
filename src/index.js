const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  };
app.use(cors(corsOptions));

app.use(express.json());    
app.use(routes);
app.listen(3001);



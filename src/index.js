const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = process.send.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  };
app.use(cors(corsOptions));

app.use(express.json());    
app.use(routes);
app.listen(port, () => {
  console.info("Aplicação rodando");
});



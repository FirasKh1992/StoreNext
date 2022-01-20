const express = require('express');
const app = express(); 

//init Middleware
app.use(express.json({extended:false}))



//Define Routes
  app.use('/users',require('./routes/users'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
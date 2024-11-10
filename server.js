require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//ROUTES
const protectionRequestRoutes = require('./routes/protectionRequest')

const app = express();

//MIDDLEWARES
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello !!');
})

app.use('/protectionrequest', protectionRequestRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(process.env.PORT,()=>{
        console.log('Server Running & DB Connected');
    }))
    .catch((error)=>{
        console.log(error);
    })


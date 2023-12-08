const express=require('express');
const cors=require('cors')
const morgan=require("morgan")
const userRouter=require('./routes/userRoutes.js');
const app=express();
app.use(cors())

app.use(morgan("dev"));
app.use(express.json())
app.use('/api',userRouter);


app.listen(8000,()=>{
    console.log('Server is listening on port 8000')
})
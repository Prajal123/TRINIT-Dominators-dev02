const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const errorMiddleWare=require('./middleware/error');
app.use(express.json());
app.use(cookieParser());

const user=require('./routes/userRoute');
const team=require('./routes/orgRoute');

app.use(errorMiddleWare);

app.use('/api/v1',user);
app.use('/api/v1',team);

module.exports=app;
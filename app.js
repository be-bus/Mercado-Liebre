const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views'));//agregar que archivo devuelve
})
app.listen(3030,()=>console.log('Servidor de alta'));
app.use(express.static(path.join(__dirname,'/public')));
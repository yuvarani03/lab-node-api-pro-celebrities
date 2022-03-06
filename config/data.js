const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://System:root@cluster0.xexia.mongodb.net/ProCelebrities?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok=>console.log("Connected to Database"))
.catch(err=>console.log("Connection failed to DB",err))
module.exports=mongoose;
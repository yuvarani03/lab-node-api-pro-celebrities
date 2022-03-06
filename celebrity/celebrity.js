const mongoose=require('mongoose'),Schema=mongoose.Schema;
const details=new Schema({
    name:{type:String,required:true},
    occupation:{type:String,required:true},
    catchphrase:{type:String,required:true}
})
const Celebrities=mongoose.model("Celebrities",details);
module.exports={Celebrities};
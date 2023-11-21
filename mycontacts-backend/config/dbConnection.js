
const mongoose = require("mongoose");

const connectDb = async ()=>{

    try{
       console.log(process.env.CONNECTIONSTRING);
         const connect = await mongoose.connect(process.env.CONNECTIONSTRING);
         console.log("Database Connected: ",connect.connection.host,connect.connection.name);
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports =connectDb;
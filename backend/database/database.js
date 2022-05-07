const mongoose = require('mongoose');
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, "../config/.env") });

const db = async ()=>{
	try{

        const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nzas5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
            
			useNewUrlParser:true,
			useUnifiedTopology:true

		});

		console.log(`----->>> MongoDB Connection is very Successfull`)

	}catch(err){
		console.log(err)
		process.exit(1);

	}
}

module.exports= db
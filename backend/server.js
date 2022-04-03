const express = require("express");
const router = express.Router();
const cors = require("cors")
const app =express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const ObjectId = require('mongoose').Types.ObjectId;
const bodyParser = require("body-parser");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AppsSharp } = require("@mui/icons-material");



app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}))     //node canot access req.body data directly. So we use these 2 functions
app.use(bodyParser.json())                          // to access body data

mongoose.connect("mongodb://vinayak:vinayak123@cluster0-shard-00-00.uxz3l.mongodb.net:27017,cluster0-shard-00-01.uxz3l.mongodb.net:27017,cluster0-shard-00-02.uxz3l.mongodb.net:27017/db?ssl=true&replicaSet=atlas-b45fah-shard-0&authSource=admin&retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("sucessful");
    
    
}).catch((e) => {
    console.log("unsucessful");
    console.log(e);
    
})

var schema = new mongoose.Schema({
    id:Object,
    name:String,
    type:String,
    breed:String,
    age:String,
    gender:String,
    description:String,
    city:String,
    url:String,
    vaccinated:String,
    reason:String,
    owner:Object,
    date:Date,
    characteristics:

        [
           String,
]
    
   
  }) 
var data= mongoose.model("Dog", schema,"dog");

app.get('/api',async (req,res) => {                        //when get fetch request is calledin /api path it will route to this & find all data and return response 
   const dog =  await data.find({}).sort({date:-1});
        if(!dog){
            res.end();
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
       
    
})

////////////////////////////////////


var registerschema = new mongoose.Schema({
    id:Object,
    name:String,
    email:String,
    password:String,
    contact:String,
    city:String,
    state:String,
    favourite:[
        Object
    ],
    url:String,
   
  }) 
var loginadopter= mongoose.model("Adopter", registerschema,"adopter");
app.post('/adopter/login',async (req,res) => {  
    let email=req.body.email;
    let pass=req.body.password;

    const user = await loginadopter.findOne({email:email});
    if(user)
    {
  
        const name = user.name;
        const id=user._id;
        ///const hash = await bcrypt.hash(pass,10);
        
        const compare = await bcrypt.compare(pass,user.password);  // extract the salt from hashed password. Use the extracted salt to
                                                                // to encrypt the plain password and compare new hash with old hash 
        if(compare){
            const token = jwt.sign({
               name,email,id //adopter
    
            },'mysecret123')
            
            return res.json({"message":"Login Sucessfull","token":token})
        }
        else{
            return res.json({"message":"Invalid credentials"})
        }
        
       
    } 
    else{
        return res.json({"message":"Email not exist"})
    }

})
/////////////////////////


var loginuser= mongoose.model("User", registerschema,"user");
app.post('/user/login',async (req,res) => {  
    let email=req.body.email;
    let pass=req.body.password;

    const user = await loginuser.findOne({email:email});
    if(user)
    {
        const name = user.name;
        const id = user._id;
        ///const hash = await bcrypt.hash(pass,10);
        
        const compare = await bcrypt.compare(pass,user.password);  // extract the salt from hashed password. Use the extracted salt to
                                                                // to encrypt the plain password and compare new hash with old hash 
        if(compare){
            const token = jwt.sign({
               name,email,id
    
            },'mysecret123')
            
            return res.json({"message":"Login Sucessfull","token":token})
        }
        else{
            return res.json({"message":"Invalid credentials"})
        }
        
       
    } 
    else{
        return res.json({"message":"Email not exist"})
    }

})



//////////////////////////////////

var registerAdopter = mongoose.model("Adopter",registerschema,'adopter')
app.post('/register/adopter', async(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let pass=req.body.password;
    let confpass=req.body.confirmpassword;

    let contact=req.body.contact;
    let city=req.body.city;
    let state=req.body.state;
    let url=req.body.url;

    let email_exist=await registerAdopter.findOne({email:email})

    if(!name || !email || !pass || !confpass){
        return res.json({"message":"Please fill the details"})
    }
    else if(email_exist){
        return res.json({"message":"Email already registered"})
    }
    else{
    const hash = await bcrypt.hash(pass,10);
   // console.log(hash)
    const reg = new registerAdopter({
        name:name,
        email:email,
        contact:contact,
        city:city,
        state:state,        
        password:hash,
        url:url,
    })
    const reguser = await reg.save()


    if(reguser){
        return res.json({"status":200,"message":"Registered Succesfully"})
    }
    }
})
/////////////////////////////////////////////////////////


var registerUser= mongoose.model("User",registerschema,'user')
app.post('/register/user', async(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let pass=req.body.password;
    let confpass=req.body.confirmpassword;

    let contact=req.body.contact;
    let city=req.body.city;
    let state=req.body.state;
    let url=req.body.url;
    let email_exist=await registerUser.findOne({email:email})

    if(!name || !email || !pass || !confpass){
        return res.json({"message":"Please fill the details"})
    }
    else if(email_exist){
        return res.json({"message":"Email already registered"})
    }
    else{
    const hash = await bcrypt.hash(pass,10);
   // console.log(hash)
    const reg = new registerUser({
        name:name,
        email:email,
        contact:contact,
        city:city,
        state:state,
        password:hash,
        url:url,
    })
    const reguser = await reg.save()


    if(reguser){
        return res.json({"status":200,"message":"Registered Succesfully"})
    }
    }
})

/////////////////////////////////////////////

app.get('/pets/:id',(req,res) => {  
    // console.log(req.params.id)      ;                //when get fetch request is calledin /api path it will route to this & find all data and return response 
    data.find({_id:req.params.id},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
       
    })
})
app.get('/owner/:id',(req,res)=>{
    registerUser.find({_id:req.params.id},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    })
})



//////////////////////////




app.get('/user/profile/:id',async (req,res)=>{
    
    const data =await registerUser.find({_id:req.params.id});
      res.json(data);
    })

app.get('/adopter/profile/:id',async (req,res)=>{
    
        const data =await registerAdopter.find({_id:req.params.id});
          res.json(data);
})


app.get('/adopter/pet/:id',async (req,res)=>{
        const id = req.params.id;
        let o_id = new ObjectId(id);
        const dt =await data.find({owner:o_id});       
          res.json(dt);
})
/////////////////////////////////



var registerschema = new mongoose.Schema({
    id:Object,
    name:String,
    type:String,
    breed:String,
    age:String,
    gender:String,
    description:String,
    location:String,
    vaccinated:String,
    reason:String,
    owner:Object,
    date:String
   
  }) 
var petupload = mongoose.model("Dog", schema,"dog");

app.post('/pet/upload', async(req,res)=>{
    const id1 = req.body.owner;
    let o_id1 = new ObjectId(id1);

    let type=req.body.type;
    let breed=req.body.breed;
    let age=req.body.age;
    let gender=req.body.gender;
    let name=req.body.name;
    let desc=req.body.description;
    let location=req.body.location;
    let vaccinated=req.body.vaccinated;
    let reason = req.body.reason;
    let date= new Date().toISOString();
    let owner=o_id1;
    
    let one=req.body.one;
    let two=req.body.two;
    let three=req.body.three;
    let four=req.body.four;
    let five=req.body.five;
    let six=req.body.six;

    let url=req.body.url;


    const reg = new petupload({
        type:type,
        breed:breed,
        age:age,
        gender:gender,
        name:name,
        description:desc,
        city: location,        
        vaccinated:vaccinated,
        reason:reason,
        date:date,
        url:url,
        owner:owner,
        characteristics:[
                one,
                two,
                three,
                four,
                five,
                six,
        ]
        




        
        


    })

    const regpet = await reg.save()
    if(regpet)
    {
        return res.json({"status":200,"message":"Uploaded Succesfully"})
    }
})
/////////////////////////////

app.delete('/profile/mypets/delete/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);
    const dt =await petupload.deleteOne({_id:o_id});       
      if(dt){
        return res.json({"status":200,"message":"Deleted Succesfully"})
      }
})


////////////////////////////////////
app.put('/profile/mypets/update/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);

    var query = {age:req.body.age,breed:req.body.breed,description:req.body.description,gender:req.body.gender,name:req.body.name,type:req.body.type,reason:req.body.reason,city:req.body.city,url:req.body.url}
    const dt =await petupload.findOneAndUpdate({_id:o_id},query,{upsert: true});       
      if(dt){
        return res.json({"status":200,"message":"Updated Succesfully"})
      }
})
///////////////////////////////////////////////////////////////


app.put('/profile/user/update/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);

    var query = {name:req.body.name,contact:req.body.contact,city:req.body.city,state:req.body.state}
    const dt =await registerUser.findOneAndUpdate({_id:o_id},query,{upsert: true});       
      if(dt){
        return res.json({"status":200,"message":"Updated Succesfully"})
      }
})


app.put('/profile/adopter/update/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);

    var query = {name:req.body.name,contact:req.body.contact,city:req.body.city,state:req.body.state}
    const dt =await registerAdopter.findOneAndUpdate({_id:o_id},query,{upsert: true});       
      if(dt){
        return res.json({"status":200,"message":"Updated Succesfully"})
      }
})
////////////////////////////////////////////////////


app.put('/adopter/favourite',async (req,res)=>{

    let o_id = new ObjectId(req.body.id);

    const dt =await registerAdopter.findOneAndUpdate({_id:req.body.user},{$push:{favourite:o_id}});       
      if(dt){
        return res.json({"status":200,"message":"Added to favourites"})
      }
})
 
///////////////////////////////////////////////////////

app.delete('/adopter/favourite/remove',async (req,res)=>{

    let o_id = new ObjectId(req.body.id);

    const dt =await registerAdopter.findOneAndUpdate({_id:req.body.user},{$pull:{favourite:o_id}});       
      if(dt){
        return res.json({"status":200,"message":"Removed from Favourites"})
      }
})
/////////////////////////////////////////



//Adopter -> Favourites
app.get('/adopter/favourite/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);
    const fav =await registerAdopter.find({_id:o_id},{favourite:1,_id:0});  
    
    
    
    //const dt =await data.findById( { _id : { $eleMatch: { $_id :{$in: fav.map} } } })
    
    //let arr = fav.map(item => item)
    //console.log(fav)  
//    const result=null;
//         fav.map((item)=>{
//             return (
//                 item.favourite.map(async (subitem)=>{
//                         const result1 = await data.find({_id:subitem})
                        
                       
//                 })
//             )
//         })
        res.json(fav);
        
      
})

app.get('/adopter/favourite/details/:id',async (req,res)=>{
    const id = req.params.id;
    let o_id = new ObjectId(id);
    const result =await data.find({_id:o_id});       
    
    //const dt =await data.findById( { _id : { $eleMatch: { $_id :{$in: fav.map} } } })
    
    //let arr = fav.map(item => item)
     // console.log(fav)  
      res.json(result);
})




//////////////////////////////////////////////////////////
app.listen(port, () =>{
    console.log(`server runnin ${port}`);
})
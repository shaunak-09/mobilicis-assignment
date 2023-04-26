const express=require("express")
const router=express.Router()
const mobilicis=require("./models/model")

router.get("/find1",async (req,res)=>{
 const data= await  mobilicis.find({
        income: { $lt:"$5.00"},
        car: { $in: ['BMW', 'Mercedes'] }
    })
    if(data)
    res.status(200).json(data);
    else res.status(201).send("No data matches the query")
    
})

router.get("/find2",async (req,res)=>{
    try{
        const data= await  mobilicis.find({
            gender:"Male",
            phone_price:{$gt:"10000"}
        })
        if(data)
        res.status(200).json(data);
        else res.status(201).send("No data matches the query")

    }
    catch(err)
    {
        console.error(err.message);
    res.status(500).send('Server Error');
    }
    
       
   })
router.get("/find3",async (req,res)=>{
     try {const data= await  mobilicis.find({
        last_name: { $regex: /^M/i }, 
        quote: { $regex: /^.{16,}$/ },
       
       })
       if(data)
       {
        var data1=[]
      
        data.map((item)=>{
            
            
          if(item.email.toLowerCase().includes(item.last_name.toLowerCase()))
          data1.push(item)
       
        

        })
        // console.log(data1);
          if(data1)
          res.status(200).json(data1);
          else res.status(201).send("No data matches the query")
        // res.status(200).json(data);
       
       }
       
       else res.status(201).send("No data matches the query")
       }
       catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

       }
   })
   router.get("/find4",async (req,res)=>{
    try{
        const regex = /^[^\d@]+@[^\d@]+\.[^\d@]+$/;

        const data =await mobilicis.find({
            car:{$in:["BMW","Mercedes","Audi"]},
            email: { $regex: regex } 
        })
        if(data)
        res.status(200).json(data);
        else res.status(201).send("No data matches the query")

    }
    catch(err)
    {
        console.error(err.message);
    res.status(500).send('Server Error');
    }
    
       
   })

   router.get("/find5",async (req,res)=>{
    try{
       
       const data= await mobilicis.aggregate([
            { $group: { _id: '$city', totalUsers: { $sum: 1 }, totalIncome: { $sum: { $toDecimal: {$substr:["$income",1,-1 ]}}} } },
            { $sort: { totalUsers: -1 } },
            { $limit: 10 }
          ]);
        if(data)
        res.status(200).json(data);
        else res.status(201).send("No data matches the query")

    }
    catch(err)
    {
        console.error(err.message);
    res.status(500).send('Server Error');
    }
    
       
   })

   module.exports=router
   



import express from "express";
import axios   from  "axios" ;
import bodyParser from "body-parser";


const app = express();
const port = 3000;

//http://api.airvisual.com/v2/city?city=mumbai&state=maharashtra&country=india&key=541ed34b-6a5f-4d79-ab3b-7b6eb060fbb5

const key = "541ed34b-6a5f-4d79-ab3b-7b6eb060fbb5";








app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",(req,res)=>{
        res.render("index.ejs");
});

app.post("/submit",async(req,res)=>{
 
      const City    = req.body["cName"];
      const State   = req.body["sName"];
      const Country = req.body["countName"];
      const result = await axios.get(`http://api.airvisual.com/v2/city?city=${City}&state=${State}&country=${Country}&key=${key}`);

      // console.log("AirVisual API Response:", result.data.data.current.pollution.aqius);

      res.render("index.ejs",{
        aqi: result.data.data.current.pollution.aqius})

});



app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
});
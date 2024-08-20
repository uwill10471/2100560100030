import express from "express";
import 'dotenv/config'
import bodyParser from "body-parser";
import ejs from "ejs"
const app= express();

app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine","ejs");
let options = { 
      
    
    method: "POST", 
      
 
    body: JSON.stringify({ 
       companyName : "goMart", 
        ownerName: "anshu singh", 
        rollNo: "2100560100030",
        ownerEmail:"anshu.singh.10471@mail.com",
        "accessCode":"YLoQJB"
    }), 
      

    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}
// var url = 'http://20.244.56.144/test/register';


// fetch(url,options ) 
  
// .then(response => response.json()) 
  

// .then(json => console.log(json)); 

let options2 = { 
      
    
    method: "POST", 
      
 
    body: JSON.stringify({ 
       companyName : "goMart", 
        clientID: process.env.CLIENT_ID, 
        clientSecret:process.env.CLIENT_SECRET,
        ownerName: "anshhu sinh",
        ownerEmail:"anshu.singh.10471@mail.com",
        rollNo:"2100560100030"
    }), 
      

    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}

//  var url2 = 'http://20.244.56.144/test/auth';
 
// fetch(url2,options2 ) 
  
// .then(response => response.json()) 
  

// .then(json => console.log(json)); 




// const url3 ="http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000"
// let options3 = {
//   method: "GET", 
//   headers: {
    
//     Authorization:
//   },
// }








let comp = "";
let cat = "";

app.get("/",(req,res)=>{
    res.render("index");
   
})

app.post('/',(req,res)=>{
     comp=  req.body.Companies,
     cat = req.body.Catagories
     const url3 =`http://20.244.56.144/test/companies/${comp}/categories/${cat}/products?top=10&minPrice=1&maxPrice=10000`;
let options3 = {
  method: "GET", 
  headers: {
    
    Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTY5OTUyLCJpYXQiOjE3MjQxNjk2NTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmZWVlZjNkLTdmYTQtNDk1YS1iYTBhLWFkZDk0YWY1MzAwOCIsInN1YiI6ImFuc2h1LnNpbmdoLjEwNDcxQG1haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI1ZmVlZWYzZC03ZmE0LTQ5NWEtYmEwYS1hZGQ5NGFmNTMwMDgiLCJjbGllbnRTZWNyZXQiOiJvZFlVa2VhTkdtQ3Vyemx3Iiwib3duZXJOYW1lIjoiYW5zaGh1IHNpbmgiLCJvd25lckVtYWlsIjoiYW5zaHUuc2luZ2guMTA0NzFAbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNTYwMTAwMDMwIn0.99p1epKjE5mitJGz9R48tQ313w5TwtNDQF46oZ8DyLk'
  },
}

    fetch(url3, options3)
  .then((response) => {
    
    return response.json();
  })
  .then((data) => {
    // Process the retrieved data
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




})
app.get("/cateories/:categoryname/products/:productid",(req,res)=>{
    let requestedCateory =req.params.categoryname
    let reqproductid = req.params.productid;
    
const url3 =`http://20.244.56.144/test/categories/${requestedCateory}/products/${reqproductid}?top=10&minPrice=1&maxPrice=10000`;
res.render("product",{text1:requestedCateory,text2:reqproductid});
})

app.post("/cateories/:categoryname/products/:productid",(req,res)=>{
    let requestedCateory =req.params.categoryname
    let reqproductid = req.params.productid;
    
const url3 =`http://20.244.56.144/test/categories/${requestedCateory}/products/${reqproductid}?top=10&minPrice=1&maxPrice=10000`;
let options3 = {
  method: "GET", 
  headers: {
    
    Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTY5OTUyLCJpYXQiOjE3MjQxNjk2NTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmZWVlZjNkLTdmYTQtNDk1YS1iYTBhLWFkZDk0YWY1MzAwOCIsInN1YiI6ImFuc2h1LnNpbmdoLjEwNDcxQG1haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI1ZmVlZWYzZC03ZmE0LTQ5NWEtYmEwYS1hZGQ5NGFmNTMwMDgiLCJjbGllbnRTZWNyZXQiOiJvZFlVa2VhTkdtQ3Vyemx3Iiwib3duZXJOYW1lIjoiYW5zaGh1IHNpbmgiLCJvd25lckVtYWlsIjoiYW5zaHUuc2luZ2guMTA0NzFAbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNTYwMTAwMDMwIn0.99p1epKjE5mitJGz9R48tQ313w5TwtNDQF46oZ8DyLk'
  },
}
    fetch(url3, options3)
  .then((response) => {
    
    return response.json();
  })
  .then((data) => {
    // Process the retrieved data
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

})



app.listen(3000,()=>{
    console.log("Server Started At port 3000")
})

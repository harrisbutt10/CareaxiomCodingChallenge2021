const express =require('express')
const router = new express.Router()
const extractUrl = require('../utils/callbackHelper')






// Implement the task1 using plain node.js callbacks 
router.get('/I/want/task1/title/',(request,response)=>{

       //check if address provided in url or not
       if (!request.query.address) 
       return response.send('Please provide an address')
       
      var urlDetail=[]

      //If multiple address given iterate over array
      if(request.query.address instanceof Array){
      
        var arrayLength = request.query.address.length;
        for(var counter = 0;counter < arrayLength; counter++){
          //use utility module validURL function
         extractUrl(request.query.address[counter],(urlInfo)=>{
            urlDetail[counter]=urlInfo    
         })
        }
        response.render('index', {
              showTitile:urlDetail
          })
      }
      else{
          //ELSE condition for single Address

          //use utility module extract function
        extractUrl(request.query.address,(urlInfo)=>{
          response.render('index', {
            url: urlInfo.url,
            title: urlInfo.title,          
        })

        }) 
      }
})




module.exports=router
const express =require('express')
const extractUrl = require('../utils/asyncpromisHelper')
const router = new express.Router()




// Task 2
// Implement the above using some kind of flow library e.g. async.js
router.get('/I/want/task2/title/', async (request,response)=>{

    //check if address provided in url or not
    if (!request.query.address) 
    return response.send('Please provide an address')

    try{
        
        var urlDetail=[]

           //If multiple address given iterate over array
        if(request.query.address instanceof Array){
            var arrayLength = request.query.address.length;
            for(var counter = 0;counter < arrayLength; counter++){
            urlDetail.push(await extractUrl(request.query.address[counter]))
            }
           
            response.render('index', {
                showTitile:urlDetail
            })
          }

        else{
            //ELSE condition for single Address

          //use utility module extract function
             const urlInfo =  await extractUrl(request.query.address)
                response.render('index', {
                url: urlInfo.url,
                title: urlInfo.title,          
            })
        }
        
    }catch(e){
           response.send(e)
    }
})









module.exports=router
const express =require('express')
const router = new express.Router()
const extractUrl= require('../utils/asyncpromisHelper')


// Task 3
// Implement the above using Promises. You could use any library e.g. RSVP 

router.get('/I/want/task3/title/',(request,response)=>{

    //check if address provided in url or not
    if (!request.query.address) 
    return response.send('Please provide an address')

    var urlDetail=[]

     //If multiple address given iterate over array
    if(request.query.address instanceof Array){
        var arrayLength = request.query.address.length;
        for(var counter = 0;counter < arrayLength; counter++){
          urlDetail.push(extractUrl(request.query.address[counter]))
        }

        // takes an iterable of promises as an input, and returns a single Promise that resolves and render to html 
        Promise.all(urlDetail).then((urlInfo) => {
            response.render('index', {
                showTitile:urlInfo
                
            })
        })
        
      }
      else{

    extractUrl(request.query.address).then((urlInfo)=>{
        response.render('index', {
            url: urlInfo.url,
            title: urlInfo.title,          
        })
    }).catch(error => response.send(error))
}

})



module.exports=router
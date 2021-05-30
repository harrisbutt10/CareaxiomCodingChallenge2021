
// Create module function for title extraction




const extractUrl = (url, callback)=> {
 // regex to check URL is valid or not
    var validURL = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
     
      
      if (validURL.test(url))
       { 
         // IF URL VALID EXTRACT URL TITLE
         urLTitle = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.').slice(0,-1).join('.');
          
         callback({url:url , title:urLTitle.toUpperCase() })
	   }
     else{
      
       callback({url:url, title:"No RESPONSE"})
     }
    
     
}
     
  module.exports= extractUrl



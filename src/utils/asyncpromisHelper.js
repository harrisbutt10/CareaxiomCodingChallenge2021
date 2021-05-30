var RSVP = require('rsvp');

// Create module function for title extraction


const extractUrl=(url)=>{
     
    return new RSVP.Promise((resolve, reject)=>{
    // regex to check URL is valid or not
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

      if (pattern.test(url))
      {  // IF URL VALID EXTRACT URL TITLE
        urLTitle = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.').slice(0,-1).join('.');
        //If promise fullfiled => resolve
          resolve({url:url , title:urLTitle.toUpperCase() })
      }
      else
      {
         //If promise is nor fullfiled => reject
      reject({url:url , title:"NO RESPONSE" })
      }

    }).catch((error)=>{
        return error
    })

}

module.exports=extractUrl
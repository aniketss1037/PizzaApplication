// HTTP / HTTPS Call
import URL from "../utils/constant.js";
async function makeNetworkCall(){  
   try{
   const response = await fetch(URL);
   const object = await response.json();
   return object; //wrap promise
   }
   catch(err){
      console.log("problem in api call" , err);
      throw err;
   }

}     
export default makeNetworkCall;

// non blocking state is formed by adding async to the fn
  /* const promise  =  fetch('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
   console.log("promise is", promise)
   promise.then(response =>{
   console.log("response is", response)
      response.json(); //deserialization
      const promise2 = response.json(); // dependent promise
      promise2.then(data =>console.log("data is", data))
      .catch(e =>console.log("JSON parse error",e))
   
   }).catch(err =>{
      console.log("error is ", err)
   })*/
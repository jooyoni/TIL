function addAndHandle(n1:number,n2:number, cb:(num:number)=>void){
  const result=n1+n2;
  cb(result);
}
addAndHandle(2,5,(result)=>{console.log(result)})

let value:unknown;
value="a";
let val:string;
if(typeof value==="string"){
  val=value;
}

function generateError(message:string, code:number):never{
  throw {message, code}
}
generateError("error occurred", 500);

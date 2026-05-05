
function code (callback){
    setTimeout (()=>{
        console.log("Loading");
        callback ();

    },5000);
}
  function code1 (callback){
    setTimeout (()=>{
        console.log("Loading Successfully");
        callback()
    },2000);
  }
  function code2 (callback){
    setTimeout(() => {
        console.log("Completed")

    },1000);
  }
  code(() => {
    code1 (() => {
        code2();
    });
  });

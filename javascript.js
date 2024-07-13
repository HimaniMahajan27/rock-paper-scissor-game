let userturn=0;
let compturn=0;
let choices=document.querySelectorAll(".play");
let msg=document.querySelector(".moves");
let uturn=document.querySelector("#userturn");
let cturn=document.querySelector("#compturn");
choices.forEach((playw)=>
{
   playw.addEventListener("click",()=>{
    const att=playw.getAttribute("id");
   userchoice(att);
   });
});
const userchoice=(att)=>
    {
        console.log("you choose",att);
       let m= compterchoice();
        console.log("computer choose",m);
        if(m===att)
        {
            console.log("draw");
            msg.innerText="draw";
            msg.style.backgroundColor="orange";
            msg.style.borderRadius="15px";
        }
        else
        {
            let userwin=true;
            if(att==="rock"){
               userwin= m==="paper"?false:true;
            }
            else if(att==="paper"){
            userwin=m==="scissor"?false:true;
            }
            else {
               userwin=m==="rock"?false:true;
            }
            winneris(userwin);
        }
    };
let compterchoice=()=>{
    const arr=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3)
  return arr[randidx];
};

const winneris=(userwin)=>{
if(userwin===true){
userturn++;
uturn.innerText=userturn;    
msg.innerText="you won";
msg.style.backgroundColor="green";
msg.style.borderRadius="15px";
}
else{
    compturn++;
cturn.innerText=compturn;
    msg.innerText="you lose";
msg.style.backgroundColor="red";
msg.style.borderRadius="15px";
}
};




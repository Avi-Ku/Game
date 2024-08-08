let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
]

const resetgame=()=>{
    turnO=true;
    enabledbtn();
    msgcontainer.classList.add("hide");
};


boxes. forEach((btn)=>{
btn.addEventListener("click",()=>{
console.log("box was clicked");
if(turnO===true){
    btn.innerText="O"
    turnO=false;
}
else{
btn.innerText="X"
turnO=true;
}
btn.disabled=true;
checkWinner();
});
});

const disabledbtn=()=>{
    for(let btn of boxes){
       btn.disabled= true;
    }
 }
 const enabledbtn=()=>{
    for(let btn of boxes){
       btn.disabled= false;
       btn.innerText=""
    }
 }
const shoWinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide")

}


const checkWinner=()=>{
  for(let pattern of winPattern){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
  if(pos1Val===pos2Val && pos2Val===pos3Val){
    console.log("winner" , pos1Val)
    shoWinner(pos1Val);
    disabledbtn();
  }
    }
  }
};
newbtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);

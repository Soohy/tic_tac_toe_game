  let boxes= document.querySelectorAll(".box");
  let resetbtn=document.querySelector("#reset");
  let newbtn=document.querySelector("#newgame");
  let msgContainer=document.querySelector(".msg-container");
  let msg=document.querySelector("#msg");

  let turnX=true;//playerX,playerO

  const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ];

  const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }
 
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log("box was clicked");
      if (turnX){
      box.innerText="X";
      turnX=false;
      box.disabled=true; 
      }
      else{
        box.innerText="O";
        turnX=true;
        box.disabled=true;
      }
       checkWinners();
    });
  }
  );
   const disableBoxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
   }

   const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
   }

  const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
  const checkWinners=()=>{
    for (let patterns of winPattern){
    let pos1Val= boxes[patterns[0]].innerText;
    let pos2Val= boxes[patterns[1]].innerText;
    let pos3Val= boxes[patterns[2]].innerText;

    if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
      if(pos1Val===pos2Val&&pos2Val===pos3Val){
        console.log("winner");
        showWinner(pos1Val);


      }
    }

    }
  };
  
  resetbtn.addEventListener("click",resetGame);
  newbtn.addEventListener("click",resetGame);
let boxes=document.querySelectorAll(".box");
let message=document.querySelector("#para");
let newGame=document.querySelector("#newgame");
let resetGame=document.querySelector("#reset");

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

let turnofO=true;

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        hideNewGame();
        count++;
        if(count==9){
            drawGame();
        }
        console.log("Count: ",count);
        if(turnofO==true){
            box.innerText="O";
            turnofO=false;
        }
        else{
            box.innerText="X";
            turnofO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let i of winPatterns){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                visibleNewGame();
            }
        }
    }
}

const showWinner=(pos1)=>{
    message.innerText=`Congratulations! Winner is: ${pos1}`;
    disableboxes();
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


newGame.addEventListener("click",()=>{
    message.innerText="Welcome! Let's Play the Game Again!";
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        count=0;
    };
});

resetGame.addEventListener("click",()=>{
    message.innerText="Welcome! Let's Play the Game!";
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        count=0;
    };
});

const hideNewGame=()=>{
    newGame.classList.add("opacity");
    newGame.disabled=true;
}
const visibleNewGame=()=>{
    newGame.classList.remove("opacity");
    newGame.disabled=false;
}
const drawGame=()=>{
    newGame.disabled=false;
    newGame.classList.remove("opacity");
    message.innerText="Game Drawn! Try again!";
    count=0;
}

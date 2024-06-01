let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtm=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");




let turn0=true;
let arr=[1,2,3,4,5,6];

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");

        if(turn0){
            box.innerText="0";
            turn0=false;
        }
            else{
            box.innerText="X";
            turn0=true;
            }
        box.disabled=true;

        checkwinner();
    });
});


const newgame=()=>{
    turn0=true;
    enalbeboxses();
    msgContainer.classList.add("hide");
    

}


const enalbeboxses=()=>{
    for(let box of boxes){
        box.disabled=false;
            box.innerText="";
    }
}


const resetgame=()=>{
    turn0=true;
    enalbeboxses();
    msgContainer.classList.add("hide");
    

}


const disalbeboxses=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showwinner=(x)=>{
    msg.innerText=`Congratulation, winner is ${x}`;
    msgContainer.classList.remove("hide");
    disalbeboxses();
}



const checkwinner = () => {
    for (let pattern of winPattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        
        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showwinner(posval1);
            }
        }
    }
};


resetBtn.addEventListener("click",resetgame);
newgamebtm.addEventListener("click",resetgame);
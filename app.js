// let btns = document.getElementsByClassName('btn');
let btns = document.querySelectorAll(".btn");
let reset= document.querySelector("#reset");
let clicked = true;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(clicked){
            btn.innerHTML="x";
            clicked = false;
        }else{
            btn.innerHTML="o";
            clicked = true;
        }
        btn.disabled= true;

        winner();
    })
})

reset.addEventListener("click",()=>{
    btns.forEach((ele)=>{
        ele.innerHTML=" ";
        ele.disabled=false;
    })
})

function winner(){
    for(let pos of winPattern){
        let p1=btns[pos[0]].innerHTML;
        let p2=btns[pos[1]].innerHTML;
        let p3=btns[pos[2]].innerHTML;

        if((p1!="")&&(p2!="")&&(p3!="")){
            if((p1===p2)&&(p2===p3)){
                alert(`Player ${p1} is the winner`);
                
            }
        }
        // console.log(pos[0],pos[1],pos[2]);
        // console.log(p1,p2,p3);
    }
}

const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
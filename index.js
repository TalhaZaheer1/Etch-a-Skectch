let color = 'black';
let colorC = true;
function populateBoard(size){
    const board = document.querySelector('.board');
    let divs = board.querySelectorAll('div');
    divs.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size;
    for(let i = 0;i < amount;i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover' , colorChoice)
        div.addEventListener('click' , boolC)
        board.appendChild(div);
        div.style.background = 'white';
    }
} 


populateBoard(16);
function changeSize(input){
    if(input >= 16 && input <= 100){
    populateBoard(input);
    }else {
        alert("ERROR");
    }
}

function boolC(){
    colorC = !colorC;
}

function colorChoice(){
    if(colorC){
    if(color == 'random'){
        this.style.background = `hsl(${Math.random() * 360} , 100% , 50%)`;
    }else {
        this.style.background = color;
    }
}
}

function changeColor(choice){
    color = choice;
}

function reset(){
    const board = document.querySelector('.board');
    let divs = board.querySelectorAll('div');
    divs.forEach(div => div.style.background = 'white');
}
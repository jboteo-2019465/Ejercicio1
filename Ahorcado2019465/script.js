

function draw(){
    var canvas = document.getElementById("canvas");
    
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI *2, true);
        ctx.moveTo(600, 0)
        ctx.stroke();
        




}

function letras(){
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);}

}

const palabras = ['html', 'mesa']
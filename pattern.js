const canvas = getElementById("flowers");
const ctx = canvas.getContext('2d');


const CenterX = width/2;
const CenterY = height/2;

const petalCount = 12 ;
const angleIncrement =(2*Math.PI)/petalCount;
const petalLenght = 40;
for(let i = 0; i <petalCount ; i++)
{
const angle = i * angleIncrement;
const x = CenterX + Math.cos(angle) * petalLenght;
const y = CenterY + Math.sin(angle) * petalLenght;


ctx.beginPath();
ctx.moveTo(CenterX, CenterY);
ctx.quadraticCurveTo(CenterX,CenterY,x,y);
ctx.strokeStyle = violet;
ctx.stroke();
ctx.closePath();


}

const radius =10;
ctx.beginPath();
ctx.arc(CenterX,CenterY,radius,0,2*Math.PI);
ctx.fillStyle=yellow;
ctx.fill();
ctx.closePath();


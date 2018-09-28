module.exports = function solveEquation(equation) {
  equation = equation.split(" ").join("");
var pos,a,b,c,x1,x2,D,xpos=[],mas =[];
while(true){
    var found = equation.indexOf("x",pos);
    if(found ==-1)break;
    else xpos.push(found);
    pos= found + 1 ;
}

if(equation.charAt(0)!="-")
{a = +equation.slice(0,xpos[0]-1);}
else a = +(-equation.slice(1,xpos[0]-1));

if(equation.charAt(xpos[0]+3)!="-")
{b = +equation.slice(xpos[0]+4,xpos[1]-1);}
else b = +(-equation.slice(xpos[0]+4,xpos[1]-1));

if(equation.charAt(xpos[1]+1)!="-")
{c = +equation.slice(xpos[1]+2);}
else c = +(-equation.slice(xpos[1]+2));

D = b*b - 4*a*c;
x1 = Math.round((-b + Math.sqrt(D))/(2*a));
x2 = Math.round((-b - Math.sqrt(D))/(2*a));

mas.push(Math.min(x1,x2));
mas.push(Math.max(x1,x2));

return mas;
}

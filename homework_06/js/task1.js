let a = +prompt('Enter length of side a:');
let b = +prompt('Enter length of side b:');
let c = +prompt('Enter length of side c:');

var type, square;
if(a+b>c && a+c>b && b+c>a){
    if(a==b && b==c){
        type = "equilateral";
    }
    if((a==b && b!=c) || (b==c && c!=a) || (a==c && c!=b)){
        type = "isosceles";
    }
    if(a!=b && a!=c && b!=c){
        type = "scalene";
    }
    if((a*a+b*b==c*c) || (a*a+c*c==b*b) || (b*b+c*c==a*a)){
        type = "right triangle";
    }
    p = (a+b+c)/2;
    square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    square = Math.floor(square * 100)/100;
    console.log("Type of triangle is "+type+" and square is "+square); 
}else{
    console.log("Incorrect data");
}
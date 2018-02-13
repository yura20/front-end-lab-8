var n = +prompt("Type N: 0 < N <= 20");
if(n > 0 && n<=20 && Number.isInteger(n)){
    makePiramide(n);
}else{
    console.error("Incorrect!")
}
function makePiramide(num){
    var line = "";
    i=1;
    for (var j = num-1; j>=0; j--){
        line+=return_line(j, i)+'\n';
        i++;
    }
    console.log(line);
}
function return_line(emp, boxes){
    str_line = ""
    for(var x = 0; x < boxes+(boxes-1); x++){
        str_line+="[~]";
    }
    for(var y = 0; y < emp; y++){
        str_line = "   "+str_line+"   ";
    }
    return str_line;
}
function start_game(range, prize, prize_arr){
    var num = Math.round(Math.random()*range)
    var oldprize = prize;
    var prize = return_guess(range, prize, prize_arr, num);
    if(prize == oldprize){
        console.log("Thank you for a game. Your prize is: "+prize+"$");
        guess_game("again");
    }else{
        var countinue_game = confirm("You won! Your total prize is "+prize+"$ Do you want continue game?");
        if(countinue_game){
            var new_prize_arr = []
            for(var i = 0; i < prize_arr.length; i++){
                new_prize_arr[i]=prize_arr[i]*3;
            }
            start_game(range*2, prize, new_prize_arr)
        }else{
            console.log("Thank you for a game. Your prize is: "+prize+"$");
            guess_game("again");
        }
    }
}

function return_guess(range, prize, prize_arr, num){
    var ret_prize = 0;
    for(var i = 0; i < 3; i++){
        var guess = prompt("Enter a number from 0 to "+range+"\nAttempts left: "+(3-i)+"\nTotal prize: "+prize+"$\nPossible prize on current attempt: "+prize_arr[i]+"$");
        if(guess!==null && guess == num){
            ret_prize = prize_arr[i];
            break;
        } 
    }
    return prize+ret_prize
}

function guess_game(again){
    var game;
    if(again == undefined){
        game = confirm("Do you want to play the game?");
    }else{
        game = confirm("Do you want to play the game "+again+"?");
    }
    if(game){
        console.log("The game starts!");
        start_game(5, 0, [10, 5, 2]);
    }else{
        console.log("You did not become a millionaire");
    }
}

guess_game();
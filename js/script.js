let number = Math.floor(Math.random() * 99) + 1;
console.log(number);
var wincounter = 1;
var losscounter = 1;
var attemptcounter = 0;

function checkNumber() {

    let guess = document.querySelector("#guess").value;


    if (guess >= 1 && guess <= 99) {
        document.querySelector("#playerGuesses").innerHTML += `${guess}` + "\n <br>\n";

        if (attemptcounter <= 7) {
            attemptcounter++;
            if (guess > number) {
                document.querySelector("#WinsnLosses").innerHTML += `"guess is too high"` + "\n <br>\n";
                document.querySelector("#playerGuesses").style.backgroundColor = "red";
            }
            if (guess < number) {
                document.querySelector("#WinsnLosses").innerHTML += `"guess is too low"` + "\n <br>\n";
                document.querySelector("#playerGuesses").style.backgroundColor = "red";
            }

            if (guess == number) {
                document.querySelector("#WinsnLosses").innerHTML += `"You Win"` + "\n <br>\n";
                document.querySelector("#playerGuesses").style.backgroundColor = "green";
                alert("You win, congratulations!!!")
               
                document.querySelector("#Wins").innerHTML = "Wins: " + wincounter++;
            }
            if (attemptcounter == 7 && guess !=number ){
                alert("You are out of guesses, you lose! Sorry :/ , Start over and retry");
                document.querySelector("#Loss").innerHTML = "Losses: " +  losscounter++;

            }
        }
    } else{
        alert("Number out of range");
    }
}

function reset() {
    attemptcounter = 0;
    number = Math.floor(Math.random() * 99) + 1;
    console.log(number);
    document.querySelector("#WinsnLosses").innerHTML="";
    document.querySelector("#playerGuesses").innerHTML="";
    document.querySelector("#playerGuesses").style.backgroundColor = "";
}

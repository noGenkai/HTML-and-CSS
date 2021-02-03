var inp = parseInt(prompt('Input: '))

while(inp < 1 || inp > 1000) {
	inp = parseInt(prompt('Invalid input.\nInput: '));
}

var min = 1;
var max = 1000;
count = 0;
var median;

do {
	count++;
	median = Math.floor((min + max)/2);
	var guess = "Guessed " + median + " - ";
	if(median < inp) {
    	guess += "too low."
    	min = median + 1;
  } else if(median > inp) {
    	guess += "too high."
    	max = median;
  } else {
    	guess += "Got it!"
    	console.log(guess);
        break
  } console.log(guess);
}	while(min <= max);

console.log('It took me ' + count + ' tries') 

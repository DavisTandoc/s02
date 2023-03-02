function printMusic(music){
	console.log(`My top music artist is ${music}`);
}

printMusic('Westlife')
printMusic('Michael V.')
printMusic('Marshmello')
printMusic('Duran Duran')
printMusic('Alphaville')

function displayMovie(Movie, rating){
	console.log(`The show ${Movie} is rated ${rating} %.`)
}
displayMovie("SpiderMan: Into the SpiderVerse", 97);
displayMovie("The LEGO Batman Movie", 90);
displayMovie("WAR FOR CYBERTRON Trilogy", 90);
displayMovie("Captain America: CIVIL WAR", 90);
displayMovie("She HULK: Attorney at Law", 80);

document.getElementById("btn-1").addEventListener('click', () => {
	var location = prompt("Where are you located?");
    alert("You are located at " + location);
});

let paragraph = document.getElementById("paragraph-1");
let paragraph2 = document.getElementById("paragraph-2");

document.getElementById("btn-2").addEventListener('click', () => {
	var age = prompt("What is your age?");
    alert("You are " + age + " years old");
});

document.getElementById("btn-3").addEventListener('click', () => {
	var person = prompt("Please enter your name");
    alert("Thank you, " + person + "! BE SAFE!!");
});




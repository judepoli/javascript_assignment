// // NOTES -- ex 1 at bottom of page 
// console.log("Hello!"); //console is object in brower, log is function of tht object -- shown from period - function accepts parameter - prints it out//

// alert("boo!"); // alert on page -- info going to page -- pops up as alert // 

// let firstName = "jude";  // variable - setting name, string text goes in 2 quotation marks. end code with ; // 
// let lastName = "poli";   // camel case notation - humps on back of camel 
// let space = "*_*";	
// let concatString = firstName + "🩵" + lastName;	

// console.log(firstName); // calling string and displaying in console  window // 
// console.log(lastName);

// console.log(firstName + lastName);

// console.log(firstName + " " + lastName);

// console.log(firstName, lastName);

// console.log(firstName + space + lastName);

// console.log(concatString);

// let num1 = 4; 
// let num2 = 6;
// let num3 = 4.2; // nothing diff for decimal

// console.log("The result is: " + (num1 + num2 + num3)); //must use parenthesis around the number for it to actually add add +, sub -, mult *, div / //

// // array - collection or storage //

// // index = number / position inside the collection . item #1 in an arry is actually 0; first thing is # 0 //
// // declare with let //

// let firstArray = ["hello", "goodbye", "nice", "bad", "Bye"];
// let secondArray = ["my", "name", "hungry", "hi"];

// console.log(firstArray); // prints it out - first tells how many items in array, then print out contents *shows actual conetns and list in console //
// console.log(firstArray[3]); // wan tot retrieve pecific item from array  --  will retrieve 4th item from array//
// console.log(secondArray[2]);  


// // conditinoals // 

// num = 4;

// if (num==15){  // if statement, then write condiiton checking for  -- i.e. if val of varieable "num" is 15 -- inside braces, diff behaviors if 'true' // 
// 	console.log('you have the correct number');
// }

// else if (num > 15) {              
// 	console.log('your number is too big');
// }

// else {
// 	console.log ('please choose another number');
// }

// console.log(Math.random()); // random FLOAT from 0-1//

// console.log(Math.random()*30); // random number * 30//

// var thirdArray = ["apple", "bananna", "pear", "orange"]; // 0, 1, 2, 3 //
// var randomIndex = Math.floor( Math.random() * thirdArray.length ); // length property retrieves length from array //

// console.log (randomIndex); // random whole number bt 0-3 // 
// console.log(thirdArray[randomIndex]);

// // functions // 
// function sayHello(){   // declare function //
// 	console.log('halooo');
// 	console.log (":)");
// }

// sayHello(); // execuing funcion //

// // function with parameter - recieves information // 
// function addNumber (numberOne, numberTwo){			
// 	console.log("result: " + (numberOne + numberTwo));
// }

// addNumber(40, 70); // call function to execute // // function can return data -- when execute function it will do something - where you execute you get vaue of piece of data // 



// function addNumberAndReturn(numberOne, numberTwo){
// 	console.log("ran the function ...");
// 	return numberOne + numberTwo;
// }

// console.log (addNumberAndReturn(30, 20));{ // getting data back as number nd printing that to console//

// }


// function door(num){
// 	if (num == 1){
// 		return "bathroom";
// 	}

// 	else if (num == 2){
// 		return "bedroom";
// 	}
// 	else if (num == 3){
// 		return "kitchen";
// 	}
// 	else{
// 		return "there are only three doors!";
// 	}

// }

// console.log (door(1));
// console.log (door(2));
// console.log (door(3));
// console.log (door(8));


// var doorResult = door(2);
// console.log ("i opened the door and found ..." + doorResult);



//

//Excersize 1//

let number1 = 9
let number2 = 9

if (number1 == number2){   
	console.log('true');
}

else {              
	console.log('false');
}

















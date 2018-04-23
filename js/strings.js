/*eslint-env browser*/

//STEP 1
var name = window.prompt("What is your name?");
var n = name.length;
window.alert(n);

//STEP 2
var name2 = window.prompt("Enter your Name");
var num = window.prompt("Enter a numeric value");
var nameIndex = name2.charAt(num);
window.alert(nameIndex);

//STEP 3
var firstName = window.prompt("Enter your first name: ");
var lastName = window.prompt("Enter your last name: ");
var fullName = firstName.concat(" ", lastName);
window.alert(fullName);

//STEP 4
var text = "The quick brown fox jumps over the lazy dog";
var foxIndex = text.indexOf("fox");
window.alert(foxIndex);

/*
/////////////////////////////////////////////////////////STEP 5
var text2 = "The quick brown fox jumps over the lazy dog";
var foxIndexofLast = text2.lastIndexOf("fox", 16);
window.alert(foxIndexofLast);
*/

//STEP 6
var text3 = "The quick brown fox jumps over the lazy dog";
var nameFull = window.prompt("Enter your full name:");
var replace = text3.replace("the lazy dog", nameFull);
window.alert(replace);

//STEP 7
var text4 = "The quick brown fox jumps over the lazy dog";
var wordInput = window.prompt("Please enter a word");
var word = new RegExp('(\\w*' + wordInput + '\\w*)', 'gi');

var matches = text4.match(word);

if (matches === -1) {
    window.alert("does not contain " + wordInput);
} else {
    window.alert(matches);
}

//STEP 8

var oldString = "The quick brown fox jumps over the lazy dog";
var newString = oldString.slice(31, 50);
window.alert(newString.toUpperCase());

//STEP 9
var text5 = "          THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         ";
var newText5 = text5.trim();
window.alert(newText5.toLowerCase());

//STEP 10
var text6 = "the quick brown fox jumps over the lazy dog";
var firstLetter = text6.charAt(0);
var capitilizeFirstLetter = text6.charAt(0).toUpperCase();
var stringWithoutFirstLetter = text6.slice(1);

window.alert(capitilizeFirstLetter + stringWithoutFirstLetter);




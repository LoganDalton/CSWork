var myString = "This is an example of a string";
console.log(myString);
console.log("we can also output strings right to the console");
console.log("just make sure you use double quotes \" or '");
console.log('this is an example of using a \'')
var firstHalf = "Strings can be ";
var secondHalf = 'concatenated by using +';
console.log(firstHalf + secondHalf);
console.log("in the above lines I used ");
console.log("a \\ before some characters");
console.log("the \\is called an escape character");
console.log("There are many of these");
console.log("The \\n escape character prints");
console.log("a new line");
var manyLines = "Every\nword\nwill\nbe\non\na\nnew\nline";
console.log(manyLines);
var Charcount = secondHalf.length;
console.log("secondHalf has " + Charcount + " characters");
console.log("notice that spaces count as characters");
console.log("The position of a character in a string is");
console.log("called the index");
var indexExample = "abcdefghijklmnopqrstuvwxyz";
console.log("indexOf will give the index for the");
console.log("first occurance of a group of characters");
console.log("The index of de is " + indexExample.indexOf("de") );
console.log("Why was it 3 and not 4?, try a");
console.log("The index of a in " + indexExample.indexOf("a"));
console.log("this is very impartant so I will scream at you");
var yelling = "Computers start counting at 0 not 1";
console.log(yelling.toUpperCase());
console.log("Did we change yelling to upper case?");
console.log(yelling);
console.log("what if we wanted to");
yelling = yelling.toUpperCase();
console.log(yelling);
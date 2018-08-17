function changeColor() {

    var colorValue = prompt ("What color my dood?");
    document.body.style.backgroundColor = colorValue;
    
}

function changeTextColor() {

    var colorValue = prompt ("More colors and stuff, Brogurt");
    document.body.style.color = colorValue;

}

function changeTextSize() {
    var size = prompt ("Change me size!");
    document.body.style.fontSize = size;
}

function welcomeMessage() {
    var name = prompt("What is your name, pops?");
    var message = "<h1>Hello " + name + "&#x263A</h1>";
    document.getElementById("line1").innerHTML = message;
}


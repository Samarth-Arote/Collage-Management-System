/* function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('show');
    }

    var section = document.getElementById(sectionId);
    section.classList.add('show');
}
function processInput() {
    //get the user input
    //var userInput = document.getElementById("userInput").value;
    var userinput2 = document.getElementById("name").value;
    var userinput3 = document.getElementById("address").value;
    var userinput4 = document.getElementById("education").value;
    var userinput5 = document.getElementById("age").value;


    //perform any necessary validation or processing 
    //var processedInput = "processed:" + userInput;
    var processedInput1 = "Student Name     :   " + userinput2;
    var processedInput2 = "Student address  : " + userinput3;
    var processedInput3 = "Student education: " + userinput4;
    var processedInput4 = "Student age:       " + userinput5;


    //display the output
   // var outputElement = document.getElementById("home1");
    //outputElement.innerHTML=processedInput;

    var outputElement1 = document.getElementById("home1");
    outputElement1.innerHTML=processedInput1;

    var outputElement2 = document.getElementById("home2");
    outputElement2.innerHTML=processedInput2;

    var outputElement3 = document.getElementById("home3");
    outputElement3.innerHTML=processedInput3;

    var outputElement4 = document.getElementById("home4");
    outputElement4.innerHTML=processedInput4; 
}   */


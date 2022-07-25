const peter ={
    firstName: 'Peter',
    lastName: 'Smith',
    birthYear: 1990,
    jobTitle: 'student',
    score: [100, 99, 90, 96],
    calAvgScore: function(){
        this.avgScore = (this.score[0] + this.score[1] + this.score[2] + this.score[3])/this.score.length;
        return this.avgScore;
    },
    showSummary: function (){
        return this.firstName + " "+ this.lastName + " has completed " + this.score.length + " tasks, and "
        + this.firstName + " 's average score is " + this.calAvgScore() + ", " + this.firstName + " 's highest score is " + Math.max(...this.score);
    }
}

console.log(peter.showSummary());
var conti= 'y'

function convertCelsius(){
    while( conti === 'y'){
        num = prompt("Please enter celsius temperature ");
        if (num === ""){
            alert('This is not a number'); 
           
        }else if(-88> num || num>58){
            alert('Out of limit')
        }
        else{
            const farhenheit = (num* 9/5) +32;
           alert(`The value in fahrenheit is ${farhenheit}`)
        }
        conti = prompt("Continue 'Y' or 'N' ");
    }
}

convertCelsius();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal1");
var btn2 = document.getElementById("myBtn1");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal2");
var btn3 = document.getElementById("myBtn2");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


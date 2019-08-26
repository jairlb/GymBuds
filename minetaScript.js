function goBack() {
    window.history.back();
}

$(document).ready(function() {
    if(localStorage.getItem('totalWork') != 0) {
        $("#totalWork").html(localStorage.getItem('totalWork'));
        $("#totalTime").html(localStorage.getItem('totalDays') + " days," + localStorage.getItem('totalHours') + " hrs," + localStorage.getItem('totalMinutes') + " mins");
    }
    else {
        $("#totalWork").html(0);
        $("#totalTime").html("0 days," + "0 hrs," + "0 mins");
    }
    
$("#workEdit").click(function() {
    var newNum = localStorage.getItem('totalWork');
    newNum = parseInt(newNum) + 1;
    newNum = [newNum].toString();

    if(newNum){
        $("#totalWork").html(newNum);
        localStorage.setItem('totalWork', newNum);
    }

});

$("#timeEdit").click(function() {
    var newHours = parseInt(prompt("How many hours did you work out?"));
    var newMinutes = parseInt(prompt("How many minutes did you work out?"));
    var totalDays = 0;
    newMinutes = newMinutes + parseInt(localStorage.getItem('totalMinutes'));
    newHours = newHours + parseInt(localStorage.getItem('totalHours'));

    if(newMinutes >= 60) {
            newHours = newHours + 1;
            newMinutes = newMinutes - 60;
    }

    if(newHours >= 24) {
            totalDays = totalDays + 1;
            newHours = newHours - 24;
    }
   
        totalDays = [totalDays].toString();
        newHours = [newHours].toString();
        newMinutes = [newMinutes].toString();

        $("#totalTime").html(totalDays + " days, " + newHours + " hrs, " + newMinutes + " mins");
        localStorage.setItem('totalDays', totalDays);
        localStorage.setItem('totalHours', newHours);
        localStorage.setItem('totalMinutes', newMinutes);
});

$("#getInfo").click(function() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var uname = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var totalWorkouts = 0;
    var totalDays = 0;
    var totalHours = 0;
    var totalMinutes = 0;

    localStorage.setItem('customFirstName', fname);
    localStorage.setItem('customLastName', lname);
    localStorage.setItem('customUserName', uname);
    localStorage.setItem('customEmail', email);
    localStorage.setItem('totalWork', [totalWorkouts].toString());
    localStorage.setItem('totalDays', [totalDays].toString());
    localStorage.setItem('totalHours', [totalHours].toString());
    localStorage.setItem('totalMinutes', [totalMinutes].toString());
});

$("#getInfo1").click(function() {
    var uname = document.getElementById('userName').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('customUserName', uname);
    localStorage.setItem('customEmail', email);
});

var uname = localStorage.getItem('customUserName');

$("#userName").html(uname);

$("#editIcon").click(function() {
    var newDay = prompt("Type in a day.");
    var newTime = prompt("Type in a time. (Ex. 9:00)");
    var newTime1 = prompt("am or pm?");
    var newGym = prompt("New Favorite gym? Press 'Cancel' if not");
    if (newDay && newTime && newTime1) {
        $("#currSched").html('Current Schedule: ' + newDay + "s" + ", " + newTime + newTime1);
        localStorage.setItem('customDay', newDay);
        localStorage.setItem('customTime', newTime);
        localStorage.setItem('customTime1', newTime1);
    }
    if (newGym) {
        $("#currGym").html('Favorite Gym: ' + newGym);
    }
});

//for messages.html
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('itemsMineta') ? JSON.parse(localStorage.getItem('itemsMineta')) : [];

localStorage.setItem('itemsMineta', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('itemsMineta'));

const liMaker = (text) => {
  const li = document.createElement('ol');
  const br = document.createElement('br');
  li.textContent = text;
  ul.appendChild(li);
  ul.appendChild(br);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('itemsMineta', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

function sendText() {
  itemsArray.push(input.value);
  localStorage.setItem('itemsMineta', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
  }
});
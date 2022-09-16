let alarmInput = "";

function testFunction() {
    // Not used in final project but important part of pseudocode/development cycle -RM
    let timeHours = 0;
    let timeMinutes = 0;
    let timeSeconds = 0;
    let alarmHours = 0;
    let alarmMinutes = 0;
    let alarmSeconds = 0;
    

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = (today.getMonth()+1)+'-'+today.getDate() +'-'+ today.getFullYear();
    console.log ("It is currently " + time + " on " + date);
    console.log ("Please follow the prompts to enter an alarm time.");
    alarmHours = prompt("Hours 0-23");
    alarmMinutes = prompt("Minutes 0-59");
    alarmSeconds = prompt("Seconds 0-59");
    let alarmTime = (alarmHours + ":" + alarmMinutes + ":" + alarmSeconds);
    console.log("Alarm is set for " + alarmTime);
};

function getTime() {
    let timeHours = 0;
    let timeMinutes = 0;
    let timeSeconds = 0;
    let alarmHours = 0;
    let alarmMinutes = 0;
    let alarmSeconds = 0;
    

    let today = new Date();
    let time = today.getHours() + ":";
    if (today.getMinutes() < 10) {
        time = time + "0";
    }
    time = time + today.getMinutes() + ":";
    if (today.getSeconds() < 10) {
        time = time + "0";
    }
    time = time + today.getSeconds();
    let date = (today.getMonth()+1)+'-'+today.getDate() +'-'+ today.getFullYear();

    let timeBox = document.getElementById("showTime");
    let dateBox = document.getElementById("showDate");
    timeBox.innerText = time;
    dateBox.innerText = date;

    // Check for alarm

    alarmHours = (alarmInput[0]+alarmInput[1]);
    Number(alarmHours);
    // console.log(alarmHours);

    alarmMinutes = (alarmInput[3]+alarmInput[4]);
    Number(alarmMinutes);
    // console.log(alarmMinutes);


    if ((alarmHours == today.getHours()) && (alarmMinutes == today.getMinutes()) && today.getSeconds() == "00") {
        callAlarm(time);
    }
};

function callAlarm(time) {
    alert("It is " + time + ".");
}

function getAlarm() {
    alarmInput = (document.getElementById("alarmInput")).value;
    let alarmBox = document.getElementById("showAlarm");
    alarmBox.innerText = "Alarm Set For " + alarmInput;
}

setInterval(getTime, 1000);

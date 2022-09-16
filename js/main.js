function testFunction() {
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
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = (today.getMonth()+1)+'-'+today.getDate() +'-'+ today.getFullYear();

    let timeBox = document.getElementById("showTime");
    timeBox.innerText = time;
};

setInterval(getTime(), 1000);

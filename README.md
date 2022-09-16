# Alarm Clock
### Roger Mullins
### Team DaVinci

## Pseudocode

### Project Requirements
- Display the current time in digital format (HH:MM:SS)
- Continually updating without reloading
- Allow user to set an alarm time
- Alarm goes off when alarm time = current time

### Display the Current Time in Digital Format
1. BEGIN
1. CREATE a new Date() object
1. GET current hours
1. GET current minutes
1. GET current seconds
1. IF minutes < 10
  1. BEGIN
  1. CONCATENATE "0" to start of minutes
  1. END IF
1. IF seconds < 10
  1. BEGIN
  1. CONCATENATE "0" to start of seconds
  1. END IF
1. SET timeString = hours + minutes + seconds
1. GET timeDisplay DIV from DOM
1. SET timeDisplay text = timeString
1. END

### Continually Update
1. BEGIN
1. RUN 'Display' function (above) every second
1. END

### Allow User to Set an Alarm Time
1. BEGIN
1. GET alarm hour
1. GET alarm minutes
1. CONVERT each to an integer
1. STORE in global variable
1. END

### Alarm Goes Off
1. BEGIN
1. EXTRACT currentHour from timeString (reference ARRAY elements 0, 1)
1. CONVERT currentHour to integer
1. EXTRACT currentMinutes from timeString (reference ARRAY elements 3, 4)
1. CONVERT currentMinutes to integer
1. IF alarmHour == currentHour AND alarmMinutes = currentMinutes
1. BEGIN
1. DISPLAY alarm alert (call external alarm function)
1. END IF
1. END

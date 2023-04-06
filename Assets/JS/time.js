// Fetch the current time and update the <p> tag
function updateCurrentTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = days[currentTime.getDay()];
  var month = months[currentTime.getMonth()];
  var date = currentTime.getDate();
  var year = currentTime.getFullYear();
  document.getElementById("time").innerHTML = hours + ':' + minutes + ' ' + ampm + ' - ' + day + ', ' + month + ' ' + date + ', ' + year;
}

// Call the function to update the time initially
updateCurrentTime();

// Update the time every second
setInterval(updateCurrentTime, 1000);

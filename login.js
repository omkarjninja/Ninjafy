// function move(){
//     document.querySelector(".lab1").style.top="220px";
//     document.querySelector(".lab1").style.fontsize="0.5rem";
// }
function login() {
  // Get the values of the username and password fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password are correct
  if (username === "omkar" && password === "1234") 
  {
    alert("Login successful!");
    window.location.href="whos-watching.html";
  } else {
    alert("Incorrect username or password.");
  }
}

function userlogin(form) /*function to check userid & password*/ {
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.userid.value == "siddhesh@gmail.com" && form.usrpsw.value == "123") {
    window.open('index.html') /*opens the target page while Id & password matches*/
  }
  else if (form.userid.value == "ayush@gmail.com" && form.usrpsw.value == "456") {
    window.open('index.html') /*opens the target page while Id & password matches*/
  }
  else if (form.userid.value == "prajwal@gmail.com" && form.usrpsw.value == "789") {
    window.open('index.html') /*opens the target page while Id & password matches*/
  }
  else {
    alert("Your Username or Password is Incorrect!") /*displays error message*/
  }
}

document.getElementById('registrationForm').addEventListener('submit',function(event){

  var password=document.getElementById('password').value;
  var confirmPass=document.getElementById('confirmPassword').value;

  if(password!==confirmPass){
    alert('Password do not Match.');
    return;
  }
  if(!document.getElementById('terms').checked){
    alert('You must agree to the terms and conditions.');
    return;
  }

  alert('Registration successful.');
})
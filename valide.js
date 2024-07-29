
function validateForm(event) {
  var fname = document.getElementById('fname').value;
  var email = document.getElementById('email').value;
  var adr = document.getElementById('adr').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var cname = document.getElementById('cname').value;
  var ccnum = document.getElementById('ccnum').value;
  var expyear = document.getElementById('expyear').value;
  var cvv = document.getElementById('cvv').value;
  var termsCheckbox = document.querySelector('input[name="terms"]:checked');

  
  if (fname == "" || email == "" || adr == "" || city == "" || state == "" || zip == "" || cname == "" || ccnum == "" || expyear == "" || cvv == "") {
    alert("All fields must be filled out");
    event.preventDefault(); 
    return false;
  }

  
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email format");
    event.preventDefault(); 
    return false;
  }

  
  var ccnumPattern = /^(\d{4}\s?){4}$/;
  if (!ccnumPattern.test(ccnum)) {
    alert("Invalid credit card number");
    event.preventDefault();  
    return false;
  }

  
  var cvvPattern = /^\d{3}$/;
  if (!cvvPattern.test(cvv)) {
    alert("Invalid CVV");
    event.preventDefault();
    return false;
  }

  
  alert("its OKAY ! check out your email for confirmation");
  return true;
}


document.querySelector('form').addEventListener('submit', validateForm);

//variables. because they keep not working 
window.onload=function(){
  //contact form submit button
  var submit = document.getElementById("submitbtn");
  if (submit){submit.addEventListener("click", confirmationMessage);}
  //spread awareness fact generator button;
  var awarenessBtn = document.getElementById("awareness-btn");
  if (awarenessBtn){awarenessBtn.addEventListener("click", increment);}
  var fact = document.getElementById("fact");
  
}
//contact form
function confirmationMessage(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  document.getElementById("confirm").innerHTML = "<h6> Hey, " + fname +"! Thanks for contacting us! Unfortunately, this organization doesn't actually exist and this form is fake. :)</h6>";
}

//spread awareness page
var count = 0;
var factList = [
    "<h4>From the 70s to the present day, the survival rate for melanoma has improved from 68% to 90% in white patients, while in black patients, it has gone down from 67% to 66%.</h4>", 
    "<h4>A 2018 study analysed more than 4,000 images in four major US medical textbooks, and found that only 4.5% of images showed dark skin.</h4>", 
    "<h4>Though incidence of skin cancer is low amongst POC, disproportionately higher rates of morbidity and mortality are seen in these groups.</h4>", 
    "<h4>  Recent figures indicate that there are more than 50 million (16.7%) uninsured people in the U.S. and this number has been increasing since 2000.</h4>", 
    "<h4> 7.5 million children are uninsured. </h4>", 
    "<h4> 38% of dermatologists report that there is a shortage of dermatologists in their community, and this shortage is greatest in rural settings.</h4>", 
    "<h4> 47% of dermatologists and dermatology residents reported that their medical training (medical school and/or residency) was inadequate in training them on skin conditions in people of color.<h4>", 
    "<h4> Black dermatologists comprise only 3% of all dermatologists, despite the fact that 12.8% of Americans are black.</h4>", 
    "<h4>Only 4.2% of dermatologists are of Hispanic origin, despite the fact that 16.3% of the general population is of Hispanic origin.</h4>", 
    "<h4> It took five years before a mixed-race 13-year-old from Connecticut's white patches were properly diagnosed: She had T-cell lymphoma, a cancer.</h4>"];
function increment(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
}
}
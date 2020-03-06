//Calculate tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleAmt").value;

  //variable input
  if (billamt === "" || serviceQual === 0) {
    alert("Please enter values");
    return;
  }

//Check to see if the input is empty or less than or equal to 1
  if (numOfPeople === 0 || numOfPeople <==1) {
    numOfPeople = 1;
  document.getElementById("each").style.display="none";
} else{
  document.getElementById("each").style.display="block";
}

}

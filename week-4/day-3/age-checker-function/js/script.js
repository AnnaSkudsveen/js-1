const ageInput = document.querySelector("#age");

const enterBtn = document.querySelector("button");

enterBtn.addEventListener("click", function () {
  const age = ageInput.value;

  const isAgeOk = isOldEnough(age);

  if (isAgeOk) {
    document.location.href = "welcome.html";
  } else {
    alert("YOU ARE NOT OLD ENOUGH!!!");
    //TODO handle error: show error message
  }
});

function isOldEnough(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

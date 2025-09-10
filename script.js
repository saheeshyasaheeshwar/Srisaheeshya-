const angleInput = document.getElementById("angle");
const currentAngleSpan = document.querySelector(".current-angle");

function updateAngle() {
  const angleValue = angleInput.value;
  currentAngleSpan.textContent = angleValue;

  document.documentElement.style.setProperty("--angle", `${angleValue}deg`);
}

angleInput.addEventListener("input", updateAngle);
updateAngle();

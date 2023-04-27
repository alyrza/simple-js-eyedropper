const btnStart = document.getElementById("btn-start");
const colorCode = document.getElementById("color-code");

btnStart.addEventListener("click", () => {
  if (!window.EyeDropper) {
    colorCode.textContent = "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      colorCode.textContent = result.sRGBHex;
      document.body.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      colorCode.textContent = e;
    });
});

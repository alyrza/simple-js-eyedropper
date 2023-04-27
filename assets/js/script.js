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

colorCode.addEventListener("click", () => {
  if (colorCode.textContent) {
    navigator.clipboard
      .writeText(colorCode.textContent)
      .then(() => {
        // success
        let temp = colorCode.textContent;
        colorCode.textContent = "copied!";
        setTimeout(() => {
          colorCode.textContent = temp;
        }, 1000);
      })
      .catch((e) => {
        //error
      });
  }
});

(function () {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleEncryptClick);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleResetClick);

    let radio_12pt = document.getElementById("radio-12pt");
    radio_12pt.addEventListener("click", radFont.bind(this, 12));

    let radio_24pt = document.getElementById("radio-24pt");
    radio_24pt.addEventListener("click", radFont.bind(this, 24));

    let checkCaps = document.getElementById("all-caps");
    checkCaps.addEventListener("click", capsClick);
  }

  const handleEncryptClick = () => {
    console.log("Clicked encrypt");
    let textField = document.getElementById("input-text");
    let results = shiftCipher(textField);
    document.getElementById("result").textContent = results;
  };

  const handleResetClick = () => {
    console.log("Clicked Reset");
    let textField = document.getElementById("input-text");
    textField.value = "";
  };

  const radFont = (size) => {
    console.log("Font was changed");
    let textField = document.getElementById("input-text");
    textField.style.fontSize = `${size}pt`;
  };

  const capsClick = () => {
    console.log("Caps was clicked");
    let textField = document.getElementById("input-text");
    if (document.getElementById("all-caps").checked) {
      textField.style.textTransform = "uppercase";
    } else {
      textField.style.textTransform = "lowercase";
    }
  };

  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] == "z") {
        result += "a";
      } else {
        // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();


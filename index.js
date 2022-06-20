//event listeners
var form1 = document.getElementById("form1");
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  let textValue = document.getElementById("text").value;
  let passwordValue = document.getElementById("password").value;
  vigenereCipherEncoder(passwordValue, textValue);
});
var form2 = document.getElementById("form2");
form2.addEventListener("submit", (event) => {
  event.preventDefault();
  let textValue2 = document.getElementById("text2").value;
  let passwordValue2 = document.getElementById("password2").value;
  vigenereCipherDecoder(passwordValue2, textValue2);
});

//encoder function

function vigenereCipherEncoder(key, abc) {
  inputArray = abc.split("");
  passwordArray = key.split("");
  let filledPasswordAarray = [];

  while (filledPasswordAarray.length < inputArray.length) {
    for (let i = 0; i < passwordArray.length; i++) {
      filledPasswordAarray.push(passwordArray[i]);
    }
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = alphabet.split("");
  let shifterArray = [];

  for (let i = 0; i < filledPasswordAarray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
      if (filledPasswordAarray[i] == alphabetArray[j]) {
        shifterArray.push(j);
      }
    }
  }
  console.log(
    "shifter array: " + shifterArray,
    "filledPasswordAarray: " + filledPasswordAarray
  );

  let encoded = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === " ") {
      encoded.push(" ");
    }
    for (let j = 0; j < alphabetArray.length; j++) {
      if (inputArray[i] == alphabetArray[j]) {
        if (shifterArray[i] + j > 25) {
          encoded.push(alphabetArray[shifterArray[i] + j - 26]);
        } else {
          encoded.push(alphabetArray[shifterArray[i] + j]);
        }
      }
    }
  }
  console.log("inputArray: " + inputArray, "encoded:" + encoded);
  let result = encoded.join("");
  console.log(result);
  document.getElementById("result1").innerHTML = result;
}

//decoder function

function vigenereCipherDecoder(key, abc) {
  {
    inputArray = abc.split("");
    passwordArray = key.split("");
    let filledPasswordAarray = [];

    while (filledPasswordAarray.length < inputArray.length) {
      for (let i = 0; i < passwordArray.length; i++) {
        filledPasswordAarray.push(passwordArray[i]);
      }
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = alphabet.split("");
    let shifterArray = [];

    for (let i = 0; i < filledPasswordAarray.length; i++) {
      for (let j = 0; j < alphabetArray.length; j++) {
        if (filledPasswordAarray[i] == alphabetArray[j]) {
          shifterArray.push(j);
        }
      }
    }

    let dencoded = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        dencoded.push(" ");
      }
      for (let j = 0; j < alphabetArray.length; j++) {
        if (inputArray[i] == alphabetArray[j]) {
          if (j - shifterArray[i] === 0) {
            dencoded.push("a");
          }
          if (j - shifterArray[i] < 1) {
            dencoded.push(alphabetArray[j - shifterArray[i] + 26]);
          } else {
            dencoded.push(alphabetArray[j - shifterArray[i]]);
          }
        } else if (inputArray[i] == " ") {
          dencoded.push(" ");
        }
      }
    }
    let result2 = dencoded.join("");
    console.log(result2);
    document.getElementById("result2").innerHTML = result2;
  }
}

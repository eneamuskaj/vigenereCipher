function vigenereCipher(key, abc) {
  this.encode = function (str) {
    inputArray = str.split("");
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

    let encoded = [];
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j < alphabetArray.length; j++) {
        if (inputArray[i] == alphabetArray[j]) {
          if (shifterArray[i] + j > 26) {
            encoded.push(alphabetArray[shifterArray[i] + j - 26]);
          } else {
            encoded.push(alphabetArray[shifterArray[i] + j]);
          }
        }
      }
    }
    console.log(encoded.join(""));
  };
  this.decode = function (str) {
    inputArray = str.split("");
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
        }
      }
    }
    console.log(dencoded.join(""));
  };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password";
c = new vigenereCipher(key, abc);

c.encode("codewars");
c.decode("rovwsoiv");

const emoji_zero = ":otter:"
const emoji_one = ":heart_eyes:"
const separator = ":frog:"

const frase = "oi bobaiao";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const morseNums = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

function integerToMorseNum(num) {
  res = "";
  for (let i = 0; i < num.length; i++) {
    res += morseNums[num[i]];
    if (num.length === 2 && i === 0) res += ";";
  }
  return res;
}

function morseNumsToFakeBinary(str) {
  let res = " ";
  let temp = str.split(";");
  temp.forEach((element, index) => {
    temp[index] = `---${element}`;
  });
  {
    temp.length === 2 ? (temp = temp.join(";")) : (temp = temp[0]);
  }
  str = temp;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ";") {
      {
        str[i] === "-" ? (res += "0") : (res += "1");
      }
    } else {
      res += ";";
    }
  }
  return res;
}

function fakeBinaryToEmoji(num, emoji_zero, emoji_one, separator) {
  res = " ";
  for (let i = 0; i < num.length; i++) {
    const n = num[i];
    if (n != ";") {
      if (n != " ") {
        n === "0" ? (res += emoji_zero) : (res += emoji_one);
      }
    } else {
      res += separator;
    }
  }
  return res;
}

const str = frase;

let emoji_output = "";
let output = "";

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    if (str[i].toLowerCase() === alphabet[j]) {
      let index = j + 1;
      const morseNum = integerToMorseNum(`${index}`);
      const fakeBinary = morseNumsToFakeBinary(morseNum);
      output += fakeBinary;
      emoji_output += fakeBinaryToEmoji(fakeBinary, emoji_zero, emoji_one, separator);
    }
  }
}

console.log(output)
console.log(emoji_output);

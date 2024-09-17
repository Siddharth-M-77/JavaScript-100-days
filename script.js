//Question 1 -> FIND LONGEST WORD IN STRING

// const findLongestWord = (str) => {
//   //first you to convert it into array
//   if (str.trim().length === 0) return null;

//   // 1 way to solve this question
//   words = str.split(" "); //here we got each word

//   //   words = words.sort((a, b) => b.length - a.length); //here we got decending order  if we want assending so change the b.length = a.length
//   //   return words[0]

//   //2nd way to solve this question

//   return words.reduce(
//     (acc, curElem) => (curElem.length > acc.length ? curElem : acc),
//     ""
//   );

//   console.log(
//     findLongestWord("Text is a siddharth  customer service software company")
//   );
// };

//Question 2 -> Hash Tag Generator and each word of first char will be capital letter

// const hashTagGenerator = (str) => {
//   if (str.trim().length === 0 || str.length > 280) return null;
//   str = str.split(" ");

//   //1st way
//   str = str.map((curElem) =>
//     curElem.replace(curElem[0], curElem[0].toUpperCase())
//   );

//   //2nd way
//   str = str.map(
//     (curElem) => curElem.charAt(0).toUpperCase() + curElem.slice(1)
//   );

//   str = `#${str.join("")}`;

//   return str;
//   console.log(hashTagGenerator("my name is siddharth"));
// };

// Question 3 ->COUNT character repeat in a words OCCURENCES OF CHARACTER

// const countChar = (word, char) => {

//  //1st way

//   word = word.toLowerCase();
//   char = char.toLowerCase();
//   totalChar = word.split("").reduce((accum, curChar) => {
//     if (curChar === char) {
//       accum++;
//     }
//     return accum;
//   }, 0);
//   return totalChar;
// };
// console.log(countChar("ImmiSiiiga", "i"));

//2nd wayyy to solve this question

// const countChar = (word, char) => {
//   return [...word.toLowerCase()].filter((c) => c === char.toLowerCase()).length;
// };

// console.log(countChar("ImmiSiiiga", "i"));

// Question 4 ->COUNT character repeat in a paragraph OCCURENCES OF CHARACTER

// const countChar = (text, char) =>  [...text.toLowerCase()]
//     .filter(c => c === char.toLowerCase())
//     .length;

// const paragraph =
//   "In a small town, there lived a young boy named Tim. Tim loved to explore and discover new things.";

// console.log(countChar(paragraph, "t"));

//Q5 write  program to cheak TriangleType

// const cheakTrangleType = (a, b, c) => {
//   if (a === b && b === c) return "equileateral";
//   if (a === b || b === c || c === a) return "isoceles";
//   return "scalene";
// };

// console.log(cheakTrangleType(3, 3, 3));
// console.log(cheakTrangleType(3, 1, 3));
// console.log(cheakTrangleType(3, 4, 5));

//Q6 Sort An Array

// const sort = (arr) => {
//   return arr.sort((a, b) => a - b);
// };
// console.log(sort([1, 5, 2, 0, 3, 6, 4, 7]));

//Q7=>palidrome a word or paragrph

// const isPalidrome = (str) => {
//   str = str.toLowerCase().replace(/\W/g, "");

//   let reverse_word = str.split("").reverse().join("");
//   console.log(reverse_word);
//   return str === reverse_word ? true : false;
// };
// console.log(isPalidrome("helloo"));



//Q-8

// const arr = ["one"]
// const str = "hello"
// const res = arr.includes("on")  
// console.log(res) //ouput wil be false

// const res2 = arr.includes("onetwo")
// console.log(res2) //ouput wil be false

// const str2 = str.includes("ll")  //here it will cheak substrings also
// console.log(str2) //ouput wil be true



//Q9=> 
  console.log(true == "")  //o/p => false

//here true convert into 1 and "" convert into 0 so 1 ==0





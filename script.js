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

const countChar = (text, char) =>  [...text.toLowerCase()]
    .filter(c => c === char.toLowerCase())
    .length;

const paragraph =
  "In a small town, there lived a young boy named Tim. Tim loved to explore and discover new things.";

console.log(countChar(paragraph, "t"));


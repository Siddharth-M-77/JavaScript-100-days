//Question 1 -> FIND LONGEST WORD IN STRING

//first you to convert it into array

// const findLongestWord = (str) => {
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

const hashTagGenerator = (str) => {
  if (str.trim().length === 0 || str.length > 280) return null;
  str = str.split(" ");
  
  //1st way
  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );

  //2nd way
  str = str.map(
    (curElem) => curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );

  str = `#${str.join("")}`;

  return str;
};
console.log(hashTagGenerator("my name is siddharth"));

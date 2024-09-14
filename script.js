//Question 1 -> FIND LONGEST WORD IN STRING

//first you to convert it into array

const findLongestWord = (str) => {
  if (str.trim().length === 0) return null;

  words = str.split(" "); //here we got each word

  words = words.sort((a, b) => (b.length - a.length));
  console.log(words);
};
console.log(
  findLongestWord("Sidd hello my name is siddharth and i am live in khalilabad")
);

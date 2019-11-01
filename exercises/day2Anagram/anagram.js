let list = ['enlists', 'google', 'inlets', 'banana'];

let lengthMatch = []; // We will use this to keep the proper list of the words that match by length.
let lengthMatchSplit = []; // This will be used to split and sort to find the exact word match.

function anagram(word) {
  let wordLetters = word.split('').sort().join(''); // Here we are manipulating the input word. we need to split them to letter, sort them alphabetically and then join them together again. We need to join them because then we can easily do the match on the specific "string"/word.

// first test is to see if the length of the input word and the list of words match. we For a for loop for this. In the loop if there is a match, we are pushing it to the two arrays we have setup earlier.
  for (var i=0; i<list.length; i++)
    {
      if (list[i].length === word.length)
      {
        lengthMatch.push(list[i]);
        lengthMatchSplit.push(list[i].split('').sort().join(''));
      }
    }

// Here we are creating a new value thing, so that we can get the exact index vaule of the match in the lengthMatch array, from the exact match we get from the lengthMatchSplit array.
// IndexOf searches an array for an exact match, this helps us not to require for loop again!
// Here Match index is holding the index value for the exact match for the input word from within the list.
// We refer to this index value when display the correct anagram word.

  MatchIndex = lengthMatchSplit.indexOf(wordLetters);

  console.log(`The input word rearranged in alphabetical order: ${wordLetters}`);
  console.log(`The words from our list that match by length include: ${lengthMatch}`);
  console.log(`The list match rearranged in alphabetical order: ${lengthMatchSplit}`);
  console.log(`The index number of the word from the list that matches the input word: ${lengthMatchSplit.indexOf(wordLetters)}`);

  console.log(`The Anagram for the word "${word}" is "${lengthMatch[MatchIndex]}"`);
}

anagram("listen");

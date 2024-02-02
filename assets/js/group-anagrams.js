var groupAnagrams = function(strs) {
  const anagramGroups = new Map();

  for (const str of strs) {
      // Sort the characters of the string to create a unique key
      const sortedStr = str.split('').sort().join('');

      // If the key is not in the map, create a new array
      if (!anagramGroups.has(sortedStr)) {
          anagramGroups.set(sortedStr, []);
      }

      // Push the current string to the array of anagrams
      anagramGroups.get(sortedStr).push(str);
  }

  // Convert the map values to an array and return the result
  return Array.from(anagramGroups.values());
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);
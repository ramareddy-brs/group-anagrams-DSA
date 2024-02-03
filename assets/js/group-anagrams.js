function groupAnagrams() {
  const inputArray = JSON.parse(document.getElementById('inputArray').value);
  const groupedAnagrams = {};

  inputArray.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if (groupedAnagrams[sortedWord]) {
      groupedAnagrams[sortedWord].push(word);
    } else {
      groupedAnagrams[sortedWord] = [word];
    }
  });

  const result = Object.values(groupedAnagrams);

  document.getElementById('result').textContent = JSON.stringify(result, null, 2);
}
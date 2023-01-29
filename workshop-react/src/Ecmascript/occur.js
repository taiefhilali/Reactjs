const input =[

    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"]
];



function countOccurrences(arr) {
    return arr.flat().reduce((counts, item) => {
      counts[item] = (counts[item] || 0) + 1;
      return counts;
    }, {});
  }



  console.log(countOccurrences(input))
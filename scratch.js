// var slug = "thai-yellow-curry";

function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

console.log(
  makeTitle("athlete-profile")
)

console.log(makeTitle("thai-yellow-curry"))



// var result = ""
//
// var strArr = slug.split('-');
//
// console.log(strArr);
//
// function makeWords() {
//   for (let i = 0; i < strArr; i++) {
//     var word = strArr[i]; // each word in array
//
//     strArr[i] = word.charAt(0).toUpperCase() + word.slice(1);  // capitalize first letter then add it to a slice of remainder
//     console.log(strArr[i])
//   }
//
//   return strArr.join(' ')
// }
//
// console.log(makeWords());


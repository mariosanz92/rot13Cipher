
function rot13(str) { // LBH QVQ VG!
  let finalArray = []
  let converToArray = str.split('')

  for (const element of converToArray){ 

    if (element.charCodeAt() > 77 && element.charCodeAt() < 91){
    finalArray.push(element.charCodeAt() - 13)
    }

    if(element.charCodeAt() > 64 && element.charCodeAt() < 78) {
    finalArray.push((element.charCodeAt() + 13))
    }

    if(element.charCodeAt() < 64  || element.charCodeAt() > 91) {
      finalArray.push(element.charCodeAt())
    }

 }
 
  return String.fromCharCode(...finalArray);
  
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
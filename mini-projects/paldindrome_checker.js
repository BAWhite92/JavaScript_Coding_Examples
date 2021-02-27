function palindrome(str){
  let forwardStr = str.replace(/[_\W]/g, "").toLowerCase();
  let revStr = forwardStr.split("").reverse().join("");
  if(forwardStr === revStr){
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("a _man a plan a canal panama"));
console.log(palindrome("not!!? a pallindrome"));

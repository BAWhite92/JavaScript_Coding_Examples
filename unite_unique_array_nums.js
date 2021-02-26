function uniteUnique(arr) {
  var arrs = Array.prototype.slice.call(arguments);
  var allarr = arrs[0];
  for(let i=1; i < arrs.length; i++){
    allarr = allarr.concat(arrs[i]);
  }
  return [...new Set(allarr)];

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

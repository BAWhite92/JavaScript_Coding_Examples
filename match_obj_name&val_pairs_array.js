function whatIsInAName(collection, source) {

  var srcKey = Object.keys(source);
  return collection.filter(obj =>{
    for(let i=0; i < srcKey.length; i++){
      if(
        !obj.hasOwnProperty(srcKey[i]) ||
          obj[srcKey[i]] !== source[srcKey[i]]){
        return false;
      }
    }
    return true;
  });

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" });

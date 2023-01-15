// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);

}
function destructivelyRemoveLastCat(name){
    return cats.pop();
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name) {
    let catsCopy = cats.slice();
    catsCopy.push(name);
    return catsCopy;
  }
  
  function prependCat(name) {
    let catsCopy = [...cats];
    catsCopy.unshift(name);
    return catsCopy;
  }
  
  function removeLastCat() {
    let catsCopy = [...cats];
    catsCopy.pop();
    return catsCopy;
  }
  
  function removeFirstCat() {
    let catsCopy = cats.slice();
    catsCopy.shift();
    return catsCopy;
  }
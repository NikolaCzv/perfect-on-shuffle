const array = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const firstHalf = (array.length / 2);
const array1 = [];


const onShuffel = (defaultShuffel, newShuffel) => {
  let topHalf = defaultShuffel.slice(0, firstHalf);
  let bottomHalf = defaultShuffel.slice(firstHalf, defaultShuffel.length);
  
  for(let i = 0; i < topHalf.length; i++){  
    newShuffel.push(topHalf[i], bottomHalf[i]);
  }
  
  return newShuffel;
}

console.log(onShuffel(array, array1));
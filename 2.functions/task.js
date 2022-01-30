// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max) {  
      max = arr[i]; 
    } 
    if (arr[i] < min) {
      min = arr[i];
    }   
    sum = sum + arr[i]
}
avg = (sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: Number(avg) };
}

let callFunc = getArrayParams (arr)


// Задание 2
let arrOfArr=[[1, 2, 3], [4, 5, 6]];

function worker(arr) {
  let sum = 0;
  let sum1 =0
  let sum2 = 0;
    for(let i = 0; i < arrOfArr.length; i++){
        for (let k = 0; k < arrOfArr[i].length; k++) {   
        console.log(sum1 = sum1 + arrOfArr[0][k], 'первый элемент')
        console.log(sum2 = sum2 + arrOfArr[1][k], 'второй элемент')  
        
        } 
        
        break

    }
    if(sum1>sum2) {
        sum = sum1
    } else {
        sum = sum2
    }
    
return sum
}
let getWorker = worker();

function makeWork(arrOfArr, func) {
  let max = 0;

  max = console.log(getWorker);
  
  return max;
}
let getMakeWork = makeWork();
console.log(getMakeWork);




// Задание 3
function worker2(arr) {
  // Ваш код
}

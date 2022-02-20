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

getArrayParams();


// Задание 2


function worker(arr) {
 
  let sum = 0;

  for(let i = 0; i != arr.length; i++) {
    sum = sum + arr[i];

  }    

  return sum;

}


function makeWork(arrOfArr, fn) {
  let max = 0;



  for(let i = 0; i<arrOfArr.length; i++){
      fn(arrOfArr[i]);

      if(fn(arrOfArr[i]) > max ) {
          max = fn(arrOfArr[i]);
      }
  }



  
  return max;
}
console.log(makeWork([[10, 20, 30], [-40, -50, -65]], worker2), 'result');




// Задание 3

function worker2(arr) {
  // Ваш код
  let dfr = 0;
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i != arr.length; i++) {
          if(arr[i] > max) {  
            max = arr[i]; 
          } 
          if (arr[i] < min) {
            min = arr[i];
          }   

          dfr = (max) - (min);
       
      }    
    
return Math.abs(dfr)

}

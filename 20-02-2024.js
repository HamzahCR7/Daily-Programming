//find missing numbers in an array--start

function missingNumbers(nums) {
    let n = nums.length+1;
    let totalSum = (n*(n+1))/2;
    let actualSum = nums.reduce((a,b) => a+b,0);
    return totalSum-actualSum;
    
  }
  
  let arr=[1,2,3,4,5,6,7,9,10];
  let missing = missingNumbers(arr);
  console.log(missing);
 //find missing numbers in an array--end
 

 //count vowels -- start
  function countVowels(str) {
    let vowels ='aeiouAEIOU';
    let count=0;
    for(let char of str) {
      if(vowels.includes(str[char])){
      count++;  
    }
  }
  console.log(count)
  }
  
  countVowels('Hamzaheiou');
   //count vowels -- end

   //check Prime -- start
   function isPrime(num) {
    if(num<=1) {
      return;
    }
    for(let i = 2; i<=Math.sqrt(num);i++) {
      if(num%i == 0) {
        return 'is not Prime'
      } else {
        return 'Prime'
      }
    }
  }
  
  console.log(isPrime(11));
  //check Prime --end

  //find Largest Num in an arr -- start
  function MaxNumber(arr) {
    let max = arr[0];
    for(let i =0 ; i< arr.length; i++) {
      if(arr[i]> max) {
      max = arr[i]
    } 
    }
    return max;
   
  }
  
  console.log(MaxNumber([1,2,1000,4,90,100,230,11]));
  //find Largest Num in an arr -- end

  //find fibonacci sequence -- start
  function fibonacci(num) {
    if(num == 0 || num ==1) {
      return num;
    }
    
    return fibonacci(num-1) + fibonacci(num-2);
  }
  
  for(let i=0; i<10;i++) {
    console.log(fibonacci(i))
  }
  //find fibonacci sequence -- end

  //armstrong Num --start
  function armStrongNum(n) {
    let nums = String(n);
    let sum =0;
    for(let num of nums) {
      sum += Math.pow(parseInt(num),3);
    }
    return sum == n;
  }
  
  console.log(armStrongNum(153))
  //armstrong Num -- end

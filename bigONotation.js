// Question 11) 0(2^n)

const towerOfHanoi = function (disks, startRod, middleRod, endRod){

    if (N == disks){
     return console.log(`${startRod}: to ${endRod}`) // 
    }
    else {
     towerOfHanoi(disks-1, startRod, endRod, middleRod) // 2,'A','C','B' -> 1 A,B,C -> A to C
     towerOfHanoi(1, startRod, middleRod, endRod) // 3 A B C 
     towerOfHanoi(diska-1, middleRod, startRod, endRod)
    }
    
    }
    
    towerOfHanoi(3,'A','B','C') //7 moves
    towerHanoi(3, "A", "B", "C"); // 7 moves
    towerHanoi(4, "A", "B", "C"); // 15 moves
    towerHanoi(5, "A", "B", "C"); // 31 moves

    //Run time for N disks : 
    // 1) 3 = 0.288 seconds
    // 2) 4 = 0.295 seconds 
    // 3) 5 = 0.333 seconds

// Question 12)

    //1. Counting Sheep

    function countingSheep(sheepNum) {
        if(sheepNum === 0){
          return console.log("All sheeps jumped over the fence");
        }
        console.log(`${sheepNum}: Another sheep jumps over the fence`)
        return countingSheep(sheepNum - 1)
      }
    
      countingSheep(3)
    
    
    //2. Power Calculator
    
    function calculator(base, exp) {
      if (exp <= 0) {
          return console.log('exp should be >= 0')
      };
    
      let total = 1;
      for (let i = 1; i <= exp; i++) {
          total = total * base;
      }
      return console.log(total);
    }
    calculator(10, 2)
    
    
    //3. Reverse String
    
    function reverseString(string) {
      if (string === "") return console.log("");
      return console.log(reverseString(string.substr(1)) + string.charAt(0))
    }
    stringReverse("string")
    
    
    //4. nth Triangular Number
    
    function triNumber(n) {
      if (n <= 1) return n;
      return n + triNumber(n - 1)
    } 
    
    console.log(triNumber(5))
    
    
    //5.  String Splitter
    
    function split(string) {
      if (string === 3) return console.log(string);
      result.push(string.substr(0, 2))
      console.log(result)
      return split(string)
    }
    split('02/20/2020')
    
    
    //6. Fibonacci
    
    function fib(n) {
      if (n === 1) return [0, 1];
      let x = fib(n - 1);
      x.push(x[x.length - 1] + x[x.length - 2]);
      return x;
    }
    console.log(fib(5))
    
    
    //7. Factorial
    
    function factorial(x) {
      if (x === 0) return 1;
      return x * factorial(x - 1);
    }
    console.log(factorial(9))
    
    
    
// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи 
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

console.log(new MathX().fib(10)); // 55
console.log(new MathX().fibAll(10)); // [0, 1, 1, 2, 3, 5, 8]
console.log(new MathX().prime(10)); // 29
console.log(new MathX().primeAll(10)); // [2, 3, 5, 7]q


function MathX() {
  this.fib = function (n) { // вычисление N-го числа в ряду Фибоначчи
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) { // 3, 4, 5, 6, 7, 8, 9, 10
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  this.fibAll = function (n) { // вычисление всех чисел в ряду Фибоначчи до числа N
    let arr = [0, 1];
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) { // 3, 4, 5, 6, 7, 8, 9, 10
      let c = a + b;
      a = b;
      b = c;
      arr.push(b);
    }
    return arr;
  }

  this.prime = function (n) { // вычисление N-го просто числа
    let arr = [];
    let i = 2;
    while (arr.length < n) { // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
      if (isPrime(i)) {
        arr.push(i);
      }
      i++;
    }
    return arr[arr.length - 1];
  }

  this.primeAll = function (n) { // вычисление всех простых чисел до числа N
    let arr = [];
    let i = 2;
    while (arr.length < n) { // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
      if (isPrime(i)) {
        arr.push(i);
      }
      i++;
    }
    return arr;
  }

  function isPrime(num) { // проверка на простое число
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true;
  }
}





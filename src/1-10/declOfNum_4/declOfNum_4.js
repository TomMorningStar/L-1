// Разработать функцию, изменяющую окончание слов в зависимости от падежа. 


// 1 вариант
function declOfNum(n, textForms) {
  return textForms[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? Math.abs(n) % 10 : 5]];
}

// 2 вариант
function declOfNum(n, textForms) {
  n = Math.abs(n) % 100; // 123 % 100 = 23
  let n1 = n % 10;
  if (n > 10 && n < 20) { // 11-19
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) { // 2-4
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0]; // 1
  }
  return textForms[2];
}

console.log(declOfNum(5, ['пользователь', 'пользователя', 'пользователей'])); // 5 пользователей



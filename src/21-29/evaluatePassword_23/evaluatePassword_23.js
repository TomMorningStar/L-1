// Анализатор сложности пароля: создайте функцию, которая оценивает сложность
//  введенного пользователем пароля. Необходимо анализировать длину пароля,
//  использование различных символов, наличие чисел и букв в разных регистрах.
//  Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

function evaluatePasswordComplexity(password) {
  const length = password.length;
  let complexity = 0;

  //  проверка на длину
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  if (hasLowercase && hasUppercase) { // проверка на регистр
    complexity += 2;
  } else if (hasLowercase || hasUppercase) {
    complexity += 1;
  }

  // проверка на цифры
  const hasNumbers = /\d/.test(password);
  if (hasNumbers) {
    complexity += 1;
  }

  // проверка на спецсимволы
  const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  if (hasSpecialCharacters) {
    complexity += 2;
  }

  // Evaluate overall password complexity
  if (length >= 8 && complexity >= 3) {
    return "Сильный пароль";
  } else if (length >= 6 && complexity >= 2) {
    return "Пароль средний";
  } else {
    return "Слабый пароль. Рассмотрите возможность увеличения длины и использования сочетания строчных и прописных букв, цифр и специальных символов.";
  }
}

console.log(evaluatePasswordComplexity('asswrdФфывфывФЫвФЫв')); // Слабый пароль. Рассмотрите возможность увеличения длины и использования сочетания строчных и прописных букв, цифр и специальных символов.

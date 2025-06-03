function isEvenlyDivisible(a, b) {
return a % b === 0;
}

function halfSquare(num) { 
   return (num * num) / 2;
}
function isLong(str) {
  return str.length >= 15;
}


function exclaim(str) {
  let end = str.length - 1;
  while (end >= 0 && str[end] === '!') {
    end--;
  }
  return str.slice(0, end + 1) + '!';
}
function countWords(str) {
    let trimmed = str.trim();
  if (trimmed === '') return 0;
  let words = trimmed.split(' ');
  let count = 0;
  for (let word of words) {
    if (word !== '') count++;
  }
  return count;
}

function containsDigit(str) {
    for (let i = 0; i < str.length; i++) {
    if ('0123456789'.includes(str[i])) return true;
  }
  return false;
}
function containsLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) { 
      return true;
    }
  }
  return false;
}
function containsUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c >= 'A' && c <= 'Z') return true;
  }
  return false;
}


function containsNonAlphanumeric(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (
      !(c >= 'a' && c <= 'z') &&
      !(c >= 'A' && c <= 'Z') &&
      !(c >= '0' && c <= '9')
    ) {
      return true;
    }
  }
  return false;
}
function containsSpace(str) {
  return str.includes(' ');
}

function digits(num) {
    let str = Math.abs(num).toString().split('.');
  let all = str.join('');
  let result = [];
  for (let char of all) {
    result.push(Number(char));
  }
  return result;
}
  function truncate(str) {
  return str.length >= 15 ? str.slice(0, 8) + '...' : str;
}
function isValidPassword(str) {
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSymbol = false;
  let hasSpace = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      hasLower = true;
    } else if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
    } else if (char === ' ') {
      hasSpace = true;
    } else {
      hasSymbol = true; 
    }
  }

  return hasLower && hasUpper && hasDigit && hasSymbol && !hasSpace;
}
function onlyPunchy(titles) {
  const result = [];

  for (let title of titles) {
    let i = title.length - 1;
    while (i >= 0 && title[i] === '!') {
      i--;
    }
    const trimmedTitle = title.slice(0, i + 1);
    if (trimmedTitle.length < 15) {
      result.push(trimmedTitle + '!');
    }
  }

  return result;
}



module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}

function isEvenlyDivisible(a, b) {
  return a % b === 0;
}
function halfSquare(num) {
  return (num * num) / 2;
}
function isLong(str) {
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  }
}
function exclaim(str) {
  let newStr = '';
  let i = str.length - 1;
 while (i >= 0 && str[i] === '!') {
    i = i - 1;
  }
newStr = str.slice(0, i + 1);
  return newStr + '!';
}
function countWords(str) {
  let trimmed = str.trim();
  if (trimmed === '') {
    return 0;
  }
let words = trimmed.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      count = count + 1;
    }
  }
  return count;
}
function containsDigit(str) {
  let digits = '0123456789';

  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true;
    }
  }

  return false;
}
function containsLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      return true;
    }
  }
return false;
}
function containsUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      return true;
    }
  }

  return false;
}
function containsNonAlphanumeric(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    let isNumber = (code >= 48 && code <= 57);

    if (!isLetter && !isNumber) {
      return true;
    }
  }
 return false;
}
function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      return true;
    }
  }
 return false;
}
function digits(num) {
  let str = Math.abs(num).toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch !== '.') {
      result.push(Number(ch));
    }
  }
return result;
}
function truncate(str) {
  if (str.length >= 15) {
    return str.slice(0, 8) + '...';
  } else {
    return str;
  }
}
function isValidPassword(str) {
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSymbol = false;
  let hasSpace = false;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
       if (ch >= 'a' && ch <= 'z') {
      hasLower = true;
    } else if (ch >= 'A' && ch <= 'Z') {
      hasUpper = true;
    } else if (ch >= '0' && ch <= '9') {
      hasDigit = true;
    } else if (ch === ' ') {
      hasSpace = true;
    } else {
      hasSymbol = true;
    }
  }
 if (hasLower && hasUpper && hasDigit && hasSymbol && !hasSpace) {
    return true;
  } else {
    return false;
  }
}
function onlyPunchy(titles) {
  let result = [];

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let end = title.length - 1;

    while (end >= 0 && title[end] === '!') {
      end = end - 1;
    }

    let cleanTitle = title.slice(0, end + 1);

    if (cleanTitle.length < 15) {
      result.push(cleanTitle + '!');
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

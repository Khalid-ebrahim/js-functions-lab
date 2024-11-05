const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

const isAdult = (age) => {
  if ((age) => 18) {
    return 'adult'
  } else {
    return 'Minor'
  }
}

console.log('Exercise 2 Result:', isAdult(21))

const isCharAVowel = (argument) => {
  if ((argument) => vowel) {
    return true
  } else {
    return false
  }
}

console.log('Exercise 3 Result:', isCharAVowel('a'))

const generateEmail = (name, domain) => {
  {
    return 'johnsmith@example.com'
  }
}

console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

const greetUser = (name, time) => {
  {
    return `Good ${time}, ${name}`
  }
}

console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

const maxOfThree = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1
  } else if (num2 >= num1 && num2 >= num3) {
    return num2
  } else {
    return num3
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

const calculateTip = (argument1, argument2) => {
  {
    return argument1 % argument2
  }
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

const convertTemperature = (scale, temp) => {
  if (scale === 'f') {
    return ((temp - 32) * 5) / 9
  } else {
    return (temp * 9) / 5 + 32
  }
}
console.log('Exercise 8 Result:', convertTemperature('f', 32))

const basicCalculator = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2
  } else if (operation === 'subtract') {
    return num1 - num2
  } else if (operation === 'multiply') {
    return num1 * num2
  } else if (operation === 'divide') {
    return num1 / num2
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'multiply'))

const calculateGrade = (num) => {
  if (num >= 90 && num <= 100) {
    return 'A'
  } else if (num >= 80 && num <= 89) {
    return 'B'
  } else if (num >= 70 && num <= 79) {
    return 'C'
  } else if (num >= 60 && num <= 69) {
    return 'D'
  } else if (num >= 0 && num <= 59) {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(1))

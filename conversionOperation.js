// let score = "33"
// console.log(typeof score);
// console.log(typeof (score));

// const InValueNumber = Number(score)
// console.log(typeof InValueNumber);

// let score1 = "33abc"
// const InValueNumber1 = Number(score1)
// console.log(typeof InValueNumber1);
// console.log(InValueNumber1);  // it will give NaN (Not a Number)

// let score2 = null
// const InValueNumber2 = Number(score2)
// console.log(typeof InValueNumber2);
// console.log(InValueNumber2);  // it will give 0 because null is treated as 0 in number conversion

// let score3 = undefined
// const InValueNumber3 = Number(score3)
// console.log(typeof InValueNumber3);
// console.log(InValueNumber3);  // it will give NaN because undefined is treated as NaN in number conversion

// let score4 = true
// const InValueNumber4 = Number(score4)
// console.log(typeof InValueNumber4);
// console.log(InValueNumber4);  // it will give 1 because true is treated as 1 in number conversion

// let score5 = false
// const InValueNumber5 = Number(score5)
// console.log(typeof InValueNumber5);
// console.log(InValueNumber5);  // it will give 0 because false is treated as 0 in number conversion

// let IsLoggedIn = 1
// let booleanIsLoggedIn = Boolean(IsLoggedIn)   // it will give true because 1 is treated as true in boolean conversion
// console.log(booleanIsLoggedIn);

// let IsLoggedIn1 = 0
// let booleanIsLoggedIn1 = Boolean(IsLoggedIn1)  // it will give false because 0 is treated as false in boolean conversion
// console.log(booleanIsLoggedIn1);

// let IsLoggedIn2 = "Vikalp"
// let booleanIsLoggedIn2 = Boolean(IsLoggedIn2) // it will give true because non-empty string is treated as true in boolean conversion
// console.log(booleanIsLoggedIn2);

// let IsLoggedIn3 = ""
// let booleanIsLoggedIn3 = Boolean(IsLoggedIn3) // it will give false because empty string is treated as false in boolean conversion
// console.log(booleanIsLoggedIn3);

// let randomValue = 17
// let stringNumber = String(randomValue)  // it will give "17" because it is already a string
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Operations //

// let value = 17
// let negValue = -value
// console.log(negValue);  // it will give -17 because it is negating the value

// let str1 = "Hello"
// let str2 = " Enedavour"
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log("1" - 2); //how
// console.log("1" * 2); //how
// console.log("1" / 2 + 3); //reading left to right

//Special Cases (just to remember)
// console.log(true);
// console.log(+true);
// console.log(+""); //no sense

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2
// console.log(num1);

let gameCounter = 100
gameCounter++
console.log(gameCounter);  // Study postfix
let gameCounter1 = 100
++gameCounter1
console.log(gameCounter1);  // Study prefix
console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 2);
console.log(2 != 2);

console.log("2" > 1);  // it will give true because "2" is converted to number 2 in comparison
console.log("02" < 1); // it will give false because "02" is converted to number 2 in comparison


console.log(0 == null)
console.log(0 >= null)
console.log(0 <= null)  // it will give true because null and undefined are considered equal in loose equality comparison

console.log(undefined == 0)  // it will give true because undefined and null are considered equal in loose equality comparison
console.log(undefined >= 0)  // it will give false because undefined is treated as NaN in comparison
console.log(undefined <= 0)  // it will give false because undefined is treated as NaN in comparison

console.log(null == undefined)  // it will give true because null and undefined are considered equal in loose equality comparison
console.log(null >= undefined)  // it will give false because null is treated as 0 and undefined is treated as NaN in comparison
console.log(null <= undefined)  // it will give false because null is treated as 0 and undefined is treated as NaN in comparison
// These type of comparison can lead to unexpected results and should be avoided.

console.log(null === 0) // === is a strict comparison operator that checks for both value and type.
console.log("2" === 2)
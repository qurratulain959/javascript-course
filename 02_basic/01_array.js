// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["ironman", "batman"]
// const myArr2 = new Array (1, 2, 3)
//console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// console.log("A", myArr);
// const mynew1 = myArr.slice(1,3)
// console.log(mynew1);

// console.log("B", myArr);

// const mynew2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(mynew2);

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat (Infinity)
console.log(real_another_array);

console.log(Array.isArray("Qurrat"))
console.log(Array.from("Qurrat"))
console.log(Array.from({name: "Qurrat"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));




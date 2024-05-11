//1

//let arr = [12, 5, 23, 18, 4, 45, 32]
//arr.sort((a, b) => a - b)
//console.log(arr)

let arr = [12, 5, 23, 18, 4, 45, 32]
arr.sort((a, b) => a - b)
let rendah = arr[0]
let tinggi = arr[arr.length-1]

let sum = 0
for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
average = sum / arr.length

console.log(rendah, tinggi, average)

//cara gk pake sort
function lowest(arr) {
    for(let i = 0; i < arr.length; i++){

    }
}

//2
function arrToString(arr) {
    let result = ""
    for(let i = 0; i <= arr.length-1; i++) {
        if(i == arr.length-1) {
            result += "and " + arr[i]
        } else {
            result += arr[i] + ", "
        }
    }
    return result
}

console.log(arrToString(["apple", "banana", "cherry", "date"]))

//3
function kataArray (kata2) {
    let hasil3 = []
    let kata3 = ""

    for(i = 0; i < kata2.length; i++) {
        if(kata2[i] === " ") {
            hasil3.push(kata3)
            kata3 = "" //setiap ketemu spasi, maka kata3 harus di kosongin
        } else if(i == kata2.length-1) {
            kata3 += kata2[i]
            hasil3.push(kata3)
        } else {
            kata3 += kata2[i]
        }
    }
    return hasil3
}

console.log(kataArray("Hello World"))

//4
function addarray(arr7, arr8 ) {
    if(arr7.length !== arr8.length) {
        return "array name must be the same"
    } 
    let result2 = []
    for(let i = 0; i < arr7.length; i++) {
        result2.push(arr7[i] + arr8[i])
    }

    return result2
}
console.log(addarray([1,2,3],[4,5,6]))
console.log(addarray([1,2,3],[4,5,6,7]))

//5
function Latihan5(arrLatihan5, newElement) {
    if (!arrLatihan5.includes(newElement)) {
        arrLatihan5.push(newElement);
    }
    return arrLatihan5;
}

let arr15 = [1, 2, 3, 4];
let newElement1 = 4;
console.log(" hasil no 5 ---> " , Latihan5(arr15, newElement1));

let arr16 = [1, 2, 3, 4];
let newElement2 = 7;
console.log(" hasil no 5 ---> " , Latihan5(arr16, newElement2));

//6
let numbers = [1, 2, 3, 4, 5, 6];
function hapusGanjil(numbers) {
    let angkaGenap = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            angkaGenap.push(numbers[i]);
        }
    }

    return console.log(angkaGenap)
}
hapusGanjil(numbers)

//7
function limitarray(maxSize, arr9) {
    let result3 = []
    for(let i = 0; i < maxSize; i++) {
        result3.push(arr9[i])
    }
    return result3
}


//8
let arr2 = [1,2,3]
let arr3 = [4,5,6]

hasil = arr2.concat(arr3)
console.log(hasil)

//9
function findDuplicate(arr14) {
    let result5 = []
    for(let i = 0; i < arr14.length; i++) {
        let found = false
        for(let j = 0; j < arr14.length; j++) {
            if(i != j && arr14[i] == arr14[j] && arr14[i] != null && arr14[j] != null) {
                arr14[j] = null
                found = true
            }
        }
        if(found){
            result5.push(arr14[i])
        }
    }
    console.log(" arr14 --> ", arr14)
    return result5
}

console.log(" findingDuplicate -->", findDuplicate([1,2,2,2,3,3,4,5,5]))

//10
arr5 = [1,2,3,4,5]
arr6 = [3,4,5,6,7]
function findDifference(arr10, arr11) {
    let combine = arr10.concat(arr11)
    let result = []
    for(let i = 0; i < combine.length; i++) {
        let found = false
        for(let j = 0; j < combine.length; j++) {
            if(i != j && combine[i] == combine[j]){
                found = true
                break
            }
        }
        if(!found){
            result.push(combine[i])
        }
    }
    return result
}

console.log(findDifference([1,2,3,4,5], [3,4,5,6,7]))


//11
function checkPrimitiveData(arr12) {
    let result4 = []
    for(let i = 0; i < arr12.length; i++) {
        if(typeof arr12[i] != "object" || arr12[i] == null) {
            result4.push(arr12[i])
        }
    }
    return result4
}

console.log(checkPrimitiveData([1, undefined, { name:"dimas" }, [], "string", {},[1,2,3],null]))

//12
function secondSmallestNumber(arr13) {

    let min = arr13[0]
    let min2 = arr13[1]

    for(let i = 0; i < arr13.length; i++) {
        if(min > arr13[i]){
            min = arr13[i]
        }
        else if(min2 > arr13[i] && min2 > min) {
            min2 = arr13[i]
        }
    }
    return min2
}
console.log(secondSmallestNumber([5,3,1,7,2,6]))

//13
function Latihan13(nilaiLatihan13){
    let res = 0;
    for(let i = 0; i <= nilaiLatihan13.length-1; i++){
        if (typeof(nilaiLatihan13[i]) == "number"){
            res+= nilaiLatihan13[i];
        }
    }
    return res;
}
nilaiLatihan13 = ["3", 1, "string", null, false, undefined, 2]

console.log(" hasil no 13 ---> ",Latihan13(nilaiLatihan13));

//14
arr4 = [10, 20, 40, 10, 50, 30, 10, 60, 10]
let sum2 = 0
for(let i = 0; i < arr4.length; i++) {
    sum2 += arr4[i]
}

console.log(sum2)

//15
//pake random

function Latihan15(){
    let playerNum = Math.floor(Math.random() * 3);
    let enemyNum = Math.floor(Math.random() * 3);
    let winner;

    function determineChoice(choice){
        switch(choice){
            case 0 : return "rock";
            case 1 : return "paper";
            case 2 : return "scissors";
        }
    }

    player = determineChoice(playerNum)
    enemy = determineChoice(enemyNum)

    if (player === enemy) {
        winner = "It's a tie!";
    } else if (
        (player === "rock" && enemy === "scissors") ||
        (player === "paper" && enemy === "rock") ||
        (player === "scissors" && enemy === "paper")
    ) {
        winner = "Player wins!";
    } else {
        winner = "Enemy wins!";
    }

    return {
        "player" : player,
        "enemy" : enemy,
        "winner" : winner
    }
}

playerChoice = 'paper';

console.log(" hasil no 15 ---> ",Latihan15());

//1
//i = 0 1
 //i = 2 2
 //i = 4 3
 //i = 6 4
 //i = 8 5
 //i = 10
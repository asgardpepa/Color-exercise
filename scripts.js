let palette = {
    colors: ["blue", "yellow", "red", "green", "black", "white"]
};

let hasManyColors = palette.colors.length > 3;

console.log("Josef Pospíšil");

console.log("more than 3 colors on palette: " + hasManyColors);

// 4tx exercise - theory
let printNumbersTill = cislo => {

for (let i = 0; i < cislo; i++) {
    /*if(((i+1)%2) === 0){
        console.log(i + 1);
    }*/
    console.log(i + 1);
};
}

// greeter
let getGreeingTo = name => {
    console.log(`Hello, ${name}`);
};

getGreeingTo("Pepo");
getGreeingTo("Honzo");

// 4th EXERCISE - FINAL EXERCISE 

let numberPrinter = numbersArray => {
    numbersArray.forEach(number => {
        console.log(number);
    });
};

numberPrinter([0, 3, 2, 1, 5, 10]);

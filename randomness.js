//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber() {
    console.log(Math.floor(Math.random() * 21));
}
// randomNumber();

function randomLetter() {
    console.log(alphabet[Math.floor(Math.random() * 26)]);
}
// randomLetter();

function randomFood() {
    console.log(foods[Math.floor(Math.random() * 6)]);
}
// randomFood();

function randomStudent() {
    console.log(students[Math.floor(Math.random() * 7)]);
}
// randomStudent();

let student0 = students[Math.floor(Math.random() * 7)]
let student1 = students[Math.floor(Math.random() * 7)]
let student2 = students[Math.floor(Math.random() * 7)]
function randomGroup() {
    console.log(student0);
    if(student1 == student0) {
        while(student1 != student0) {
            student1 = randomStudent();
            console.log(student1);
        }
    }
    else {
        console.log(student1);
    }
    // if(student2 == student0 || student2 == student1) {
    //     while(student2 != student0 && student2 != student1) {
    //         student2 = randomStudent();
    //         console.log(student2);
    //     }
    // }
    // else {
    //     console.log(student2);
    // }
}
randomGroup();
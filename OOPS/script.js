const mark = {
    marks : 95,
    printMarks() {
        console.log("Marks: " + this.marks);
    },
};

console.log(mark);

// const stu1 = {
//     marks : 98,
// }

// stu1.__proto__ = mark;

// stu1.printMarks();

// class car {
//     constructor(brand) {
//         console.log("I am constructor");
//         this.brandName = brand;
//     }
//     start() {
//         console.log("I am starting");
//     }
//     stop() {
//         console.log("I am stopped");
//     }
//     printBrand() {
//         console.log(`My brand is ${this.brandName}`);
//     }
// }

// let thar = new car("Thar");
// console.log(typeof thar);
// thar.printBrand();
// thar.start();
// thar.stop();

// let fortuner = new car();

// let a = 5, b = 6;

// try {
//     console.log(a+b);
//     console.log(b+c);
//     console.log(a+b);
// } catch(e) {
//     console.log(e);
// }

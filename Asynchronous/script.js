// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("I will be displayed after 1 second only");
// }, 1000)

// console.log("Three");
// console.log("Four");

// console.log();

let getData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`My id is ${data}`);
            resolve("Success");
        }, 3000);
    });
}

// This will get printed at once but we want delay in every printing so we will use callback hell
// getData(1);
// getData(2);
// getData(3);

// Callback Hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });

// const getPromise1 = () => {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             console.log("I am data 1");
//             resolve();
//         }, 4000)
//     })
// }

// const getPromise2 = () => {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             console.log("I am data 2");
//             resolve("Success");
//         }, 4000)
//     })
// }

// getPromise1().then(() => {
//     console.log("Fetching data 2...");
//     getPromise2().then((res) => {
//         console.log(res);
//     })
// })

//Above code can be written using Promise chain
console.log("Fetching data 1...");
getData(1).then(() => {
    console.log("Fetching data 2...");
    return getData(2);
}).then(() => {
    console.log("Fetching data 3...");
    return getData(3);
}).then((res) => {
    console.log("Fetched all the data");
    console.log(res);
})

const URL = "https://cat-fact.herokuapp.com/facts/";

// let promise = fetch(URL);
// console.log(promise);
// console.log("Hello");
let getAllData;
let getCatData = async () => {
    let response = await fetch(URL);
    console.log(response.status);
    console.log("Hello");
    getAllData = await response.json();
    console.log(getAllData);
}
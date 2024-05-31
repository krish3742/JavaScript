function arugument(...arr ) {
    console.log(arr);
    // for(let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }
}

arugument(2,3,4);

let a = (2,3,4,5);
console.log(a);

let newMap = new Map();

newMap.set('Name', "Kshitij Agrawal");
newMap.set('Mobile', 6389769480);
console.log(newMap);
console.log(newMap.get('Name'));
console.log(newMap.get('Mobile'));

let newSet = new Set([1,1,1,1,3,3,3,5,6,7]);
console.log(newSet);

// For Input 
// For Output
var a = {
    mobiles: {
        samsung: {
        a30: {
            name: "a30",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 2000,
        },
        note10: {
            name: "note10",
            ram: "6gb",
            rom: "128gb",
            camera: "50px",
            price: 4000,
            },
        s10: {
            name: "s10",
            ram: "3gb",
            rom: "128gb",
            camera: "10px",
            price: 5000,
            },
        },
        iphone: {
        iphone4: {
            name: "iphone4",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
            iphone4s: {
            name: "iphone4s",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 20000,
            },
            iphone5: {
            name: "iphone5",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 30000,
            },
            iphone6: {
            name: "iphone6",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 30000,
            },
        },
        xiomi: {
            redminote10: {
            name: "redminote10",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
            redminote11: {
            name: "redminote11",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
            redmi10: {
            name: "redmi10",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
            redmi10pro: {
            name: "redmi10pro",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
        },
        oppo: {
            a3s: {
            name: "a3s",
            ram: "4gb",
            rom: "64gb",
            camera: "50px",
            price: 10000,
            },
        },
        },
    };

// console.log(isObject(a));
// // console.log(typeof a); // object

// // for (const [key, value] of Object.entries(givenObject)) {
// //     console.log(`${key}: ${value}`);
// // };

// function isObject(objValue) {
//     return objValue && typeof objValue === 'object' && objValue.constructor === Object;
// }

const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// Checking if the object contains a value or not
// Object.values return an array of values of the object .includes() checks if the array contains the value or not
if (Object.values(object).includes(3)){
    console.log('yes');
}
else {
    console.log('no');
}
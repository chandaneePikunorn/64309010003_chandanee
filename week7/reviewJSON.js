let obj = {
    FirstName: "Sam",
    LastName: "Smith",
    Age: 20
};

let myJSON = '{"FirstName": "Sam","LastName": "Smith","Age": 20}';
console.log("myJSON", typeof (myJSON));

let myOBJ = JSON.parse(myJSON);
console.log("myJSON", typeof (myOBJ));
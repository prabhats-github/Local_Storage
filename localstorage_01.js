// Save Data to Local Storage...
// localStorage.setItem(key, value);

// let obj = {
//     "First_Name": "John",
//     "Last_Name":"Murphy"
// }

localStorage.setItem("First_Name","john")
localStorage.setItem("Last_Name","Murphy")



// Read Data from Local Storage...
// let a = localStorage.getItem(key);

let a=localStorage.getItem('First_Name')
console.log(a)

let ln=localStorage.getItem('Last_Name')
console.log(ln)

// Remove Data from Local Storage...
// localStorage.removeItem(key);

let b=localStorage.removeItem('First_Name')
console.log(a)
console.log(b)
console.log(ln)


// Remove All (Clear Local Storage)
let clr=localStorage.clear()
console.log(clr)





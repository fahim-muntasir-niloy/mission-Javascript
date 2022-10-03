// promise is a constructor function
// it is essential in react and other stuffs
// basic structure

// resolve: do if true, reject: do if not true

let myPromise = new Promise((resolve,reject)=>{
    if (condition) {
        resolve(`do something`)
    }
    else{
        reject(`do this`)
    }
})

// handling a fulfilled promise
myPromise.then(result =>{
    // result comes from resolve argument
})

// handling a rejected promise
myPromise.catch(error =>{
    // error comes from reject argument
})
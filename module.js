// modules are bits of code `such as a function or part of code` that can be used in other files.

let add = (a,b,c) =>{
    return a+b+c;
}

let sub = (a,b,c) =>{
    return a-b-c;
}

//this makes this `add` function to be used in other files
export {add}

// to use the function in a new file
import {add} from 'module.js'

// we can also import everything from a file
import * as mathfunc from "module.js"

// to use from this:
mathfunc.sub(1,23,4)

// export default term is used for setting a default value while exporting
// export default add()

// importing default
// import add from "./module.js";